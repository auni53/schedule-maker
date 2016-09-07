import React from 'react';
import { render } from 'react-dom';
import { Accordion } from 'react-bootstrap';
import Day from './Day.jsx';
import config from 'json!yaml!../config.yml';

function Descriptions({ activate, active }) {
  const colorInfo = config.colors;    
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className='panel-group' >
      <h2>Events</h2>
      {days.map(day => <Day key={day} day={day} activate={activate} active={active} />)}
    </div>
  );
}

export default Descriptions;
