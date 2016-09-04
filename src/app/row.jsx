import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';
import Event from './Event.jsx';

export default class Row extends React.Component {

  eventsAtTime(day, time) {
    return Object.keys(config.events[day]).filter( t => 
      (t <= time && time < config.events[day][t][0].end)
    );
  }

  render() {
    const { time, active } = this.props;

    const eventInfo = config.events;
    const colorInfo = config.colors;    

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const timestamp = (time %1 === 0) && (
      <td className='time' rowSpan='2'>
        { time <= 12 ? time : time - 12 }
      </td>
    );

    const events = days.map( day => {
      const key = day + time;

      if (time in eventInfo[day]) {
        const eventsAtTime = eventInfo[day][time];
        const end = eventsAtTime[0].end;
        return (
          <td key={key} rowSpan={(end - time) * 2} >
            {eventsAtTime.map(e => <Event key={e.name} n={eventsAtTime.length} event={e} color={colorInfo[e.color] || e.color} />)}
          </td>
        );
      } else {
        return this.eventsAtTime(day, time).length === 0 && <td key={key} />
      }
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
