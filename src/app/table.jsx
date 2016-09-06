import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';
import Row from './Row.jsx';

function Table({ activate }) {

  const times = [9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24];
  return (
    <table id="main">
      <thead>
        <tr className="top">
          <th className="time"></th> 
  
          <th className="top"><a className="day" href="#SUN">SUN</a></th>
          <th className="top"><a className="day" href="#MON">MON</a></th>
          <th className="top"><a className="day" href="#TUE">TUE</a></th>
          <th className="top"><a className="day" href="#WED">WED</a></th>
          <th className="top"><a className="day" href="#THU">THU</a></th>
          <th className="top"><a className="day" href="#FRI">FRI</a></th>
       </tr>
     </thead>

      <tbody>
        { times.map((e) => (<Row key={e} time={e} activate={activate} />)) }
      </tbody>
    </table>
  );
}

export default Table;
