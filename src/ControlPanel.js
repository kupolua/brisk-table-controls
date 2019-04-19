import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tab, Input, Form, Button, Label, Dropdown, Menu, Segment, Loader, Table, Checkbox, Icon } from 'semantic-ui-react';
import axios from 'axios';
import {setSourceList} from "./actions/setSourceList";

const jp = require('jsonpath');

let log = window.BriskTableLogger = (function () {
  let storage = [];

  function logs() {
    return storage;
  }

  function DEBUG(message) {
    storage.push({level: 'DEBUG', message})
  }

  function INFO(message) {
    storage.push({level: 'INFO', message})
  }

  function WARN(message) {
    storage.push({level: 'WARN', message})
  }

  function ERROR(message) {
    storage.push({level: 'ERROR', message})
  }

  function reset() {
    storage = [];

    return storage;
  }

  return {
    logs,
    DEBUG,
    INFO,
    WARN,
    ERROR,
    reset,
  }
})();

class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxLength: 50,
      minLength: 10,
      url: undefined,
      // url: 'http://localhost:3001/db',
      // url: 'https://raw.githubusercontent.com/kupolua/web-presentation/master/json/db.json',
      json: undefined,
      source: undefined,
      path: undefined,
      jsonPaths: [],
      error: undefined,
      loader: false,
      activeIndex: 0,
      isConfigurator: false,
      dropdownText: 'Select path',
      columnTitles: [],
      customFields: {},
      isRefresh: false,
      isRenderBody: false,
      inputPath: '',
    };

    this.fetchData = this.fetchData.bind(this);
    this.displayConfigurator = this.displayConfigurator.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.createTable = this.createTable.bind(this);
    this.fetchJSONPaths = this.fetchJSONPaths.bind(this);
  }

  fetchJSONPaths(path, obj) {
    if(Array.isArray(obj)) {
      let { jsonPaths } = this.state;

      jsonPaths.push({key: path, text: path, value: path});

      return this.setState({ jsonPaths })
    }

    return Object.keys(obj).map((path) => {
      return this.fetchJSONPaths(path, obj[path])
    })
  }

  fetchData() {
    this.setState({ error: undefined, loader: true, dropdownText: 'Select path', customFields: [], isRenderBody: false });
    this.props.setSourceList({ source: undefined});

    if(this.state.activeIndex === 0 || this.state.url) {
      if(!this.state.url) {this.setState({error: 'Empty url!', jsonPaths: [], loader: false}); return}

      const url = this.state.url;
      let that = this;
      let source = new Promise(function(resolve, reject) {
        axios.get(url).then((data) => {
          resolve(data);
        })
            .catch((error) => {
              that.setState({ error: error.toString(), jsonPaths: [], loader: false });
            });
      }, this);

      source.then(result => {
        //todo: check correct json format
        if(Array.isArray(result.data)) {
          let { jsonPaths } = this.state;

          jsonPaths.push({key: 'root', text: 'root', value: 'root'})

          this.setState({ jsonPaths });
        } else {
            this.fetchJSONPaths(undefined, result.data);
        }

        this.setState({ loader: false, source: result.data });

        if(Array.isArray(result.data)) {
          console.log('fetchData()->displayConfigurator()', result.data);
          this.displayConfigurator('root', result.data);
        }
      });
    } else {
      if(!this.state.json) {this.setState({error: 'Empty json!', jsonPaths: [], loader: false}); return}

      try {
        let source = JSON.parse(this.state.json);

        if(Array.isArray(source)) {
          let { jsonPaths } = this.state;

          jsonPaths.push({key: 'root', text: 'root', value: 'root'});

          this.setState({ jsonPaths });
        } else {
            this.fetchJSONPaths(undefined, source);
        }

        this.setState({ loader: false, source });

        if(Array.isArray(source)) {
          this.displayConfigurator('root', source);
        }
      } catch (error) {
        this.setState({ error: error.toString(), jsonPaths: [], loader: false })
      }
    }
  };

  displayConfigurator(path, source) {
    console.log(
        'displayConfigurator\n',
        'path',
        path,
        '\ndataSource',
        source,
    );
    let dataPath = '$..' + path;
    let dataSource = path === 'root' ? source : jp.query(source, dataPath);

    console.log(
        'displayConfigurator\n',
        'dataSource',
        dataSource,
    );
    let columnTitles = path === 'root' ? Object.keys(dataSource[0]) : Object.keys(dataSource[0][0]);
    let customFields = {};

    columnTitles.map(column => {
      customFields = {
        ...customFields,
        [column]: {
          fieldName: column,
          columnName: column,
          columnWidth: 10,
          // columnWidth: dataSource[0][0][column].toString().length,
          isColumnVisible: true
        }
      }
    });

    console.log(
        'displayConfigurator()->createTable(path === \'root\' ? source : this.state.source, dataPath, this.state.maxLength, customFields)',
        path === 'root',
        source,
        this.state.source,
        dataPath,
        this.state.maxLength,
        customFields
    );
    this.setState({ dropdownText: path, path: dataPath, isConfigurator: true, columnTitles, customFields, isRenderBody: true });

    // console.log(this.state.source, dataPath, this.state.maxLength, customFields);
    this.createTable(path === 'root' ? source : this.state.source, dataPath, this.state.maxLength, customFields);

    // console.log('displayConfigurator (value) {, dataSource', dataSource[0][0]);
    // console.log('displayConfigurator (value) {, columnTitles', columnTitles);
    // console.log('displayConfigurator (value) {, customFields', customFields);
  }

  createTable(source, dataPath, columnTextLength, customFields) {
    customFields = Object.values(customFields).filter(field => field.isColumnVisible);

    console.log('createTable() {', customFields);

    this.setState({ isRefresh: true });

    this.props.setSourceList({
      source,
      dataPath,
      rowsPerPage: 10, //todo: implement user choice
      columnTextLength,
      customFields,
    })
  }

  renderBody() {
    console.log('renderBody() {', this.state.customFields);
    if(Array.isArray(this.state.customFields)) {return}

    return this.state.columnTitles.map((column, i) => {
      console.log(this.state.customFields[column].isColumnVisible);
      return (
          <Table.Row key={i}>
            <Table.Cell> {column} </Table.Cell>
            <Table.Cell>
              <Input
                  placeholder={this.state.customFields[column].columnName}
                  disabled={!this.state.customFields[column].isColumnVisible}
                  value={this.state.customFields[column].isColumnVisible ? this.state.customFields[column].columnName : ''}
                  onChange={ (e, { value }) => {
                    let { customFields } = this.state;
                    customFields[column].columnName = value;

                    this.setState({ customFields })
                  }}
              />
            </Table.Cell>
            <Table.Cell>
              <Input
                  placeholder={this.state.customFields[column].columnWidth}
                  disabled={!this.state.customFields[column].isColumnVisible}
                  value={this.state.customFields[column].isColumnVisible ? this.state.customFields[column].columnWidth : ''}
                  onChange={ (e, { value }) => {
                    let { customFields } = this.state;
                    customFields[column].columnWidth = value;

                    this.setState({ customFields })
                  }}
              />
            </Table.Cell>
            <Table.Cell>
              <Checkbox
                  checked={this.state.customFields[column].isColumnVisible}
                  toggle
                  onChange={ (e, { checked }) => {
                    let { customFields } = this.state;
                    customFields[column].isColumnVisible = checked;

                    this.setState({ customFields })
                  }}
              />
            </Table.Cell>
            <Table.Cell> hide </Table.Cell>
          </Table.Row>
      )
    })
  }

  render() {
    const panes = [
      { menuItem: 'Input url', render: () => <Tab.Pane><
            Input fluid placeholder='url' onChange={ (e, { value }) => this.setState({ url: value }) }/>
            {this.state.error ? <Label basic color='red' pointing>
              {this.state.error}
            </Label> : null}
        </Tab.Pane> },
      { menuItem: 'Input json', render: () => <Tab.Pane>
          <Form>
            <Form.TextArea rows='10' placeholder='Input json' onChange={ (e, { value }) => this.setState({ json: value }) } />
            {this.state.error ? <Label basic color='red' pointing>
              {this.state.error}
            </Label> : null}
          </Form>
        </Tab.Pane> },
    ];

    return (
      <div style={{ flexDirection: 'column', justifyContent : 'center', alignItem: 'center', marginTop: 20, marginBottom: 30, }}>
        <Segment>
          <Tab panes={panes} onTabChange={(e, data) => {
            this.setState({
              url: undefined,
              json: undefined,
              error: undefined,
              jsonPaths: [],
              activeIndex: data.activeIndex,
              isConfigurator: false,
              dropdownText: 'Select path',
              columnTitles: [],
              isRefresh: false,
              isRenderBody: false,
            });
            this.props.setSourceList({ source: undefined});
          }}
          />
          <Loader active={this.state.loader} />
        </Segment>
        <div style={{margin: 10}}>
          <Button basic color='green' floated='right' onClick={() => this.fetchData()}>
            Fetch data
          </Button>
        </div>
        <div style={{ marginTop: 90}}>
          <h4>Select JSON path</h4>
          <Menu compact borderless floated>
            <Menu.Item as='a'>
              <Dropdown
                  button
                  className='icon'
                  floating
                  labeled
                  icon='world'
                  options={this.state.jsonPaths}
                  search
                  text={this.state.dropdownText}
                  onChange={(e, {value}) => this.displayConfigurator(value, this.state.source)}
              />
              {this.state.jsonPaths.length > 0 ? <Label color='red' floating>
                {this.state.jsonPaths.length}
              </Label> : null}
            </Menu.Item>
          </Menu>
          <div style={{marginTop: 20}}>
            <div style={{float: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div style={{float: 'left'}}>
              <Input label='input JSON path' placeholder={this.state.inputPath} onChange={ (e, { value }) => this.setState({ inputPath: value }) } />
            </div>
            <div style={{float: 'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <Button onClick={() => this.displayConfigurator(this.state.inputPath, this.state.source)}>
              Submit
            </Button>
          </div>

        </div>
        <div style={{flexDirection: 'row', justifyContent: 'centre', alignItems: 'centre', marginTop: 30}}>
          <div style={{paddingTop: 5, paddingRight: 20}}>
            <Button
                icon
                floated='left'
                size='mini'
                onClick={() => this.setState({isConfigurator: !this.state.isConfigurator})}
            >
              <Icon name={this.state.isConfigurator ? 'caret up' : 'caret down'} />
            </Button>
          </div>
          <div style={{paddingTop: 5, paddingLeft: 20}}>
            <h4>Configure</h4>
          </div>
        </div>
        {this.state.isConfigurator
          ?
            <div>
              <div style={{ flexDirection: 'column', justifyContent : 'center', alignItem: 'center', marginTop: 20 }}>
                <Input label='max text length' placeholder={this.state.maxLength} onChange={ (e, { value }) => this.setState({ maxLength: value }) } />
              </div>
              <div style={{marginTop: 20}}>
                <Input label='min text length' placeholder={this.state.minLength} onChange={ (e, { value }) => this.setState({ minLength: value }) } />
              </div>
              <div style={{ marginTop: 20 }}>
                {this.state.isRenderBody
                  ? <div>
                      <Table celled striped>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell colSpan='5'>Columns</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>
                        <Table.Body>
                          {this.renderBody()}
                        </Table.Body>
                      </Table>
                      <div style={{margin: 10}}>
                        <Button basic color='green' floated='right' onClick={() => this.createTable(this.state.source, this.state.dataPath, this.state.maxLength, this.state.customFields)}>
                          Refresh table
                          {/*{this.state.isRefresh ? 'Refresh table' : 'Create table'}*/}
                        </Button>
                      </div>
                    </div>
                  : null
                }
              </div>
            </div>
          : null
        }
      </div>
    );
  }
}

function mapStateToProps({ dataSource }) {
  return { dataSource };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSourceList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
