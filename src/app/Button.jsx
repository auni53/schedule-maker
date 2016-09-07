import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';

function Button({ filename }) {

  return (
    <a id='backtotop'>
      <img src='src/res/top.png' />
    </a>
  );
}

export default Button;
