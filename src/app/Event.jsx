import React from 'react';
import { findDOMNode, render } from 'react-dom';

function Event(props) {
  const { event, n, color, active } = props;

  const style = {
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

  event.tag = event.name.split(' ').join('').toLowerCase();

  const node = findDOMNode(event.tag);
  if (node) console.log(node);

  return (
    <a className='event' style={style} href={`#${event.tag}`} >
      {event.name}
    </a>
  );
}

export default Event;
