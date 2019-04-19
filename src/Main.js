import React, {Component} from 'react';
import ControlPanel from './ControlPanel';
import BriskTable from './BriskTable/BriskTable';

const styles = {
  container: {
    margin: 30,
  },
};

class Main extends Component {
  render() {
    return (
        <div style={styles.container}>
          <div>
            <ControlPanel />
          </div>
          <div style={{marginTop: 90}}>
            <BriskTable />
          </div>
          <div style={{marginTop: 90}}>
            version 0.1.3
          </div>
        </div>
    );
  }
}

export default Main;
