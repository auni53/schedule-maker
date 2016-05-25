import React from 'react';
import { render } from 'react-dom';
import { PanelGroup, Panel } from 'react-bootstrap';

function Event({ event }) {

  return (
    <div className="event" style={{ background: event.color }} >
      {event.name}
    </div>
  );
}

export default Event;
