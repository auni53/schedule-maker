import React from 'react';
import { render } from 'react-dom';
import { Accordion } from 'react-bootstrap';

function Panel(props) {

  const { event } = props;
  event.tag = event.name.split(' ').join('').toLowerCase();

  return (
    <div className="panel panel-default">
      <a data-toggle="collapse" data-parent="#accordion" href={`#${event.tag}`} className="panel-heading">
         <h4 className="panel-title">
            <span className="event-title">{event.name}</span>
            <span className="event-time">{event.time}</span>
         </h4>
      </a>
      <div id={event.tag} className="panel-collapse collapse">
        <div className="panel-body">
            <div><img className="pic" src={event.picture} /></div>
            {event.description}
        </div>
      </div>
    </div>
  );
}

export default Panel;
