import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';
import Row from './Row.jsx';

function Header({ activate }) {

  const logoStyle = {

  };

  const titleStyle = {

  };

  return (
    <div id="header">
      <img style={logoStyle} src='src/res/logo.png' />
      <img style={titleStyle} src='src/res/title.png' />
    </div>
  );
}

export default Header;
