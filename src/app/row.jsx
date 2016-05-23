import React from 'react';
import { render } from 'react-dom';
import info from 'json!yaml!./info.yml';

function Row({ time }) {
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const events = days.map( (day) => (
    info.events["Sunday"].map( (event) => event.start === time &&
    (
    <td rowspan={(event.end - event.start) * 2}>
      <a class="event" style={{ background: 'blue' }} >
        
      </a>
    </td>
    ))
  ));

  console.log(events);
  return (
    <tr>
      <td className="time" rowspan="2">
        { time % 1 == 0 && time % 13 }
      </td>

      { events }   

      <td className="time" rowspan="2">
        { time % 1 == 0 && time % 13 }
      </td>
    </tr>
  );
}

export default Row;
