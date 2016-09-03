import React from 'react';
import { render } from 'react-dom';
import Row from './Row.jsx';

export default class Table extends React.Component {

  constructor(props) {
    super(props); 

    this.state = { active : null };
  }

  render() {
    const times = [9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24];
    return (
      <table id="main">

        <th className="top">
          <td className="time"></td> 

          <td className="top"><a className="day" href="#SUN">SUN</a></td>
          <td className="top"><a className="day" href="#MON">MON</a></td>
          <td className="top"><a className="day" href="#TUE">TUE</a></td>
          <td className="top"><a className="day" href="#WED">WED</a></td>
          <td className="top"><a className="day" href="#THU">THU</a></td>
          <td className="top"><a className="day" href="#FRI">FRI</a></td>
        </th>

        <tbody>
          { times.map((e) => (<Row key={e} time={e} />)) }
        </tbody>
      </table>
    );
  }
}
