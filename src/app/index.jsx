import React from 'react';
import { render } from 'react-dom';
import Table from './Table.jsx';
import Descriptions from './Descriptions.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="table-container" align="middle">
          <Table />
        </div>
        <Descriptions />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
