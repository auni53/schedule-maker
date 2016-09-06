import React from 'react';
import { render } from 'react-dom';
import Header from './Header.jsx';
import Table from './Table.jsx';
import Descriptions from './Descriptions.jsx';

class App extends React.Component {

  constructor() {
    super();

    this.state = {};
    this.state.active = null;

    this.activate = this.activate.bind(this);
  }

  activate(tag) {
    console.log("ACTIVATING " + tag);
    this.setState({ active : tag });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="table-container" align="middle">
          <Table activate={this.activate} />
        </div>
        <Descriptions active={this.state.active} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
