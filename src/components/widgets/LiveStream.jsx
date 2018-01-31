import React from 'react';
import ReactEventSourc from 'react-eventsource';

class LiveStream extends React.Component {

  render() {
    const props = { ...this.props };
    const url = 'http://hhzhu-5510:9058/raw/microevents_json';
    const renderEvent = event => <div>{ event }</div>
    return (
      <EventSource url={url}>
        { events => events.map(renderEvent) }
      </EventSource>
    );
  }
}

export default LiveStream;

