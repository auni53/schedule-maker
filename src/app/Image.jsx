import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';

function Image({ filename }) {
  const path = `src/res/${filename}.jpg`;

  console.log("I AM AUNI");
  const x = require(path);
  console.log(x);


  return <img className="pic" src={path} />
}

export default Image;
