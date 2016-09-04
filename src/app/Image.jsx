import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';

function Image({ filename }) {
  const path = `src/res/${filename}.jpg`;
  return <object className='pic' data={path} type="image/png" />
}

export default Image;
