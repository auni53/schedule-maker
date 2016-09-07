import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';
import Row from './Row.jsx';

function Header({ activate }) {
  return (
    <div id="header">
      <img src='src/res/logo.png' />
      <img src='src/res/title.png' />
    </div>
  );
}

export default Header;
