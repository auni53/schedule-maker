import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';
// import Panel from './Panel.jsx';
import { Accordion, Panel } from 'react-bootstrap';

function Day({ day }) {

  const eventInfo = config.events;
  const colorInfo = config.colors;    

  return (
    <span id='panel'>
      <h3 id="SUN">{day}</h3>
      <Accordion>
        { Object.keys(eventInfo[day])
          .map(eventTime => {
            event = eventInfo[day][eventTime];
            event.tag = event.name.split(' ').join('').toLowerCase();

            return (
              <Panel key={event.name}
                     header={event.name}
                     eventKey={event.tag}
                     >
                <a name={event.tag} />
                {event.description}
              </Panel>
            );
          })
        }
      </Accordion>
    </span>
  );

}

export default Day;
