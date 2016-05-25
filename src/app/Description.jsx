import React from 'react';
import { render } from 'react-dom';
import { PanelGroup, Panel } from 'react-bootstrap';

function Description({ event }) {

  return (
    <Panel collapsible expanded={false} style={{ background: event.color }} >
      {event.name}
    </Panel>
  );
}

export default Description;
