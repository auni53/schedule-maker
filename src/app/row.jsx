import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';
import Event from './Event.jsx';

export default class Row extends React.Component {

  eventsAtTime(day, time) {
    return Object.keys(config.events[day]).filter( t => 
      (t <= time && time < config.events[day][t].end)
    );
  }

  render() {
    const { time, active } = this.props;

    const eventInfo = config.events;
    const colorInfo = config.colors;    

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const timestamp = (time %1 === 0) && (
      <td className="time" rowSpan="2">
        { time <= 12 ? time : time - 12 }
      </td>
    );

    const events = days.map( day => {
      const event = eventInfo[day][time];
      const color = event && ( colorInfo[event.color] || event.color );
      const key = event && ( day + time + event.name );

      return time in eventInfo[day]
      ? <td key={key} rowSpan={(event.end - time) * 2} onClick={() => handleClick(key)} >
          <Event event={event} color={color} active={key === active} />
        </td>
      : this.eventsAtTime(day, time).length === 0 && <td key={day + time} />
    });

    return (
      <tr>
        {timestamp}
        {events}
        {timestamp}
      </tr>
    );
  }
}
