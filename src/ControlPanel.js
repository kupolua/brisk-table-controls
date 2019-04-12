import React, { Component } from 'react';
import { Tab, Input, Form, Button, Label, Dropdown, Menu, Segment, Loader, Table, Checkbox } from 'semantic-ui-react';
import axios from 'axios';

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
      // url: 'https://raw.githubusercontent.com/kupolua/web-presentation/master/json/db.json',
      json: undefined,
      source: undefined,
      path: undefined,
      paths: [],
      error: undefined,
      loader: false,
      activeIndex: 0,
      isConfigurator: false,
      dropdownText: 'Select path',
      columnTitles: [],
      customFields: {},
    };

    this.fetchData = this.fetchData.bind(this);
    this.displayConfigurator = this.displayConfigurator.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.createTable = this.createTable.bind(this);
  }

  fetchData() {
    this.setState({ error: undefined, loader: true, dropdownText: 'Select path' });

    if(this.state.activeIndex === 0 || this.state.url) {
      if(!this.state.url) {this.setState({error: 'Empty url!', paths: [], loader: false}); return}

      const url = this.state.url;
      let that = this;
      let source = new Promise(function(resolve, reject) {
        axios.get(url).then((data) => {
          resolve(data);
        })
            .catch((error) => {
              that.setState({ error: error.toString(), paths: [], loader: false });
            });
      }, this);

      source.then(result => {
        let paths = [];

        //todo: check correct json format
        Object.keys(result.data).map(path => {
          paths.push({key: path, text: path, value: path})
        });

        this.setState({ paths, loader: false, source: result.data })
      });
    } else {
      if(!this.state.json) {this.setState({error: 'Empty json!', paths: [], loader: false}); return}

      try {
        let source = JSON.parse(this.state.json);
        let paths = [];

        Object.keys(source).map(path => {
          paths.push({key: path, text: path, value: path})
        });

        this.setState({ paths, loader: false, source })
      } catch (error) {
        this.setState({ error: error.toString(), paths: [], loader: false })
      }
    }
  };

  displayConfigurator(value) {
    // console.log('displayConfigurator (value) {, value', value);
    let dataSource = jp.query(this.state.source, value);
    let columnTitles = Object.keys(dataSource[0][0]);
    let customFields = {};

    columnTitles.map(column => {
      customFields = {
        ...customFields,
        [column]: {
          fieldName: column,
          columnName: column,
          columnWidth: 10,
          isColumnVisible: true
        }
      }
    });
    // [{"fieldName":"firstName","columnName":"firstName","columnWidth":15}],

    this.setState({ dropdownText: value, isConfigurator: true, columnTitles, customFields });

    // console.log('displayConfigurator (value) {, dataSource', dataSource[0][0]);
    // console.log('displayConfigurator (value) {, columnTitles', columnTitles);
    console.log('displayConfigurator (value) {, customFields', customFields);
  }

  createTable() {
    console.log('createTable() {, this.state.customFields', this.state.customFields);
  }

  renderBody() {
    return this.state.columnTitles.map((column, i) => {
      return (
          <Table.Row key={i}>
            <Table.Cell> {column} </Table.Cell>
            <Table.Cell>
              <Input
                  placeholder='column name'
                  onChange={ (e, { value }) => {
                    let { customFields } = this.state;
                    customFields[column].columnName = value;

                    this.setState({ customFields })
                  }}
              />
            </Table.Cell>
            <Table.Cell>
              <Input
                  placeholder='width'
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
      <div style={{ flexDirection: 'column', justifyContent : 'center', alignItem: 'center', margin: 20 }}>
        <Segment>
          <Tab panes={panes} onTabChange={(e, data) => this.setState({
            url: undefined,
            json: undefined,
            error: undefined,
            paths: [],
            activeIndex: data.activeIndex,
            isConfigurator: false,
            dropdownText: 'Select path',
            columnTitles: [],
          })} />
          <Loader active={this.state.loader} />
        </Segment>
        <div style={{margin: 10}}>
          <Button basic color='green' floated='right' onClick={() => this.fetchData()}>
            Fetch data
          </Button>
        </div>
        <div style={{ marginTop: 90}}>
          <Menu compact borderless>
            <Menu.Item as='a'>
              <Dropdown
                  button
                  className='icon'
                  floating
                  labeled
                  icon='world'
                  options={this.state.paths}
                  search
                  text={this.state.dropdownText}
                  onChange={(e, {value}) => this.displayConfigurator(value)}
              />
              {this.state.paths.length > 0 ? <Label color='red' floating>
                {this.state.paths.length}
              </Label> : null}
            </Menu.Item>
          </Menu>
        </div>
        <div style={{ flexDirection: 'column', justifyContent : 'center', alignItem: 'center', marginTop: 20 }}>
          <h4>Configure</h4>
          <Input label='max length' placeholder={this.state.maxLength} onChange={ (e, { value }) => this.setState({ maxLength: value }) } />
        </div>
        <div style={{marginTop: 20}}>
          <Input label='min length' placeholder={this.state.minLength} onChange={ (e, { value }) => this.setState({ minLength: value }) } />
        </div>
        <div style={{ marginTop: 20 }}>
          {this.state.isConfigurator
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
                    <Button basic color='green' floated='right' onClick={() => this.createTable()}>
                      Create table
                    </Button>
                  </div>
                </div>
            : null}
        </div>
      </div>
    );
  }
}

export default ControlPanel;
