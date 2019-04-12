import React, {Component} from 'react';
import ControlPanel from './ControlPanel';
import BriskTable from './BriskTable/BriskTable';

const styles = {
  container: {
    textAlign: 'left',
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
        </div>
    );
  }
}

export default Main;
