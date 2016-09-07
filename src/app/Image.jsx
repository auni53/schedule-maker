import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';

function Image({ filename }) {
  const imgStyle = { padding: '5px' };

  const path = `src/res/${filename}.jpg`;
  return <object style={imgStyle} className='pic' data={path} type="image/png" />
}

export default Image;
