import React from 'react';
import { render } from 'react-dom';
import Header from './Header.jsx';
import Table from './Table.jsx';
import Descriptions from './Descriptions.jsx';
import ScrollToTop from 'react-scroll-up';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.active = null;
    this.activate = this.activate.bind(this);
  }

  activate(tag) {
    this.setState({ active : tag });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="table-container" align="middle">
          <Table activate={this.activate} />
        </div>
        <Descriptions activate={this.activate} active={this.state.active} />
        <ScrollToTop showUnder={760}>
          <span>
            <a id='backtotop'>
              <img src='src/res/top.png' />
            </a>
          </span>
        </ScrollToTop>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
