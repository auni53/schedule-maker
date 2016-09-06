import React from 'react';
import { findDOMNode, render } from 'react-dom';
import { getTag } from './lib.js';
import 'smoothscroll';

function Event(props) {
  const { activate, color, event, n } = props;

  let style = {
    color: 'white',
    fontWeight: 500,

    background: color,
    padding: '1px 5px',

    height: '100%',
    width: `calc(${100/n}% - ${n-1}px)`,
    borderRadius: '10px',
    wordWrap: 'break-word',
    textAlign: 'center',
  };

  const tag = getTag(event.name);

  if (tag === 'karaoke') {
    style.height = 'calc(100% + 15px)';
    style.marginTop = '-15px';
  }

  const handleClick = () => {
    activate(null);

    const anchor = document.querySelector(`#${tag}`);
    // smoothScroll(anchor);

    activate(tag);

    // setTimeout(() => {
    // }, 100);
  }

  return (
    <a className='event' style={style} href={`#${tag}`} onClick={handleClick} >
      {event.name}
    </a>
  );
}

export default Event;
