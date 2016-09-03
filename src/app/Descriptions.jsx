import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';
import Day from './Day.jsx';

function Descriptions(props) {

  const eventInfo = config.events;
  const colorInfo = config.colors;    
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className='panel-group' >
      <h2>Events</h2>
      {days.map(day => <Day key={day} day={day} />)}
    </div>
  );
}

export default Descriptions;
