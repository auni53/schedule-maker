import React from 'react';
import { render } from 'react-dom';

function Event(props) {
  const { event, color, active } = props;

  const style = {
    color: 'white',
    fontWeight: 500,

    background: color,
    padding: '5px 0px',

    height: '100%',
    width: '100%',
    borderRadius: '5px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={style} >
      {event.name}
    </div>
  );
}

export default Event;
