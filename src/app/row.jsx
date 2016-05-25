import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';
import Event from './Event.jsx';
import Description from './Description.jsx';
import { PanelGroup } from 'react-bootstrap';

function eventsAtTime(day, time) {
  return Object.keys(config.events[day]).filter( t => 
    (t <= time && time < config.events[day][t].end)
  );
}

function Row({ time }) {

  const eventInfo = config.events;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const timestamp = (time %1 === 0) && (
    <td className="time" rowSpan="2">
      { time <= 12 ? time : time - 12 }
    </td>
  );

  const events = days.map( day =>
    time in eventInfo[day]
    ? <td rowSpan={(eventInfo[day][time].end - time) * 2}>
        <Event event={eventInfo[day][time]} />
        <Description event={eventInfo[day][time]} />
      </td>
    : eventsAtTime(day, time).length === 0 && <td/>
  );

  return (
    <tr>
      {timestamp}
      
      {events}
      {timestamp}
    </tr>
  );
}

export default Row;
