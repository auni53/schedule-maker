import React from 'react';
import { render } from 'react-dom';
import Day from './Day.jsx';
import config from 'json!yaml!../config.yml';

function Descriptions({ active }) {
  const colorInfo = config.colors;    
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className='panel-group' >
      <h2>Events</h2>
      {days.map(day => <Day key={day} day={day} active={active} />)}
    </div>
  );
}

export default Descriptions;
