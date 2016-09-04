import React from 'react';
import { render } from 'react-dom';
import config from 'json!yaml!../config.yml';
import { Accordion, Panel } from 'react-bootstrap';

function formatTime(number) {
  let midiStatus = number < 12 ? ' am' : ' pm';
  let formattedTime = String(number <= 12.5 ? number : number - 12);
  let attempt = formattedTime.replace('.5', ':30');
  if (attempt != formattedTime) {
    return attempt + midiStatus;
  } else {
    return attempt + ':00' + midiStatus;
  }
}

function Day({ day }) {

  const eventInfo = config.events;
  const colorInfo = config.colors;    

  const times = [9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 24];

  return (
    <span id='panel'>
      <h3 id="SUN">{day}</h3>
      <Accordion>
        { times.map(eventTime => {
            const eventsAtTime = eventInfo[day][eventTime];
            if (!eventsAtTime) return;

            return eventsAtTime.map(event => {
              if (!event) return;
              event.tag = event.name.split(' ').join('').toLowerCase();

              const spanStyle = { float: 'right', };
              const anchor = (
                <a className='header' id={event.tag}>
                  <h4>
                    {event.name}
                    <span style={spanStyle}>{formatTime(eventTime)}</span>
                  </h4>
                </a>
              );

              return (
                  <Panel key={event.tag}
                         header={anchor}
                         eventKey={event.tag}
                         ref={event.tag}
                         >
                    {event.description}
                    {/*<img className="pic" src={`src/res/${event.tag}.jpg`} />*/}
                  </Panel>
              );
            }
          )})
        }
      </Accordion>
    </span>
  );

}

export default Day;
