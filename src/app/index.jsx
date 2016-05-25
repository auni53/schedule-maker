import React from 'react';
import { render } from 'react-dom';
import Table from './Table.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="table-container" align="middle">
        <Table />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
