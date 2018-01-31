import React from 'react';
import ReactEventSourc from 'react-eventsource';

class LiveStream extends React.Component {

  render() {
    const props = { ...this.props };
    const url = 'http://hhzhu-5510:9058/raw/microevents_json';
    const renderEvent = event => <div>data: { event }</div>
    return (
      <ReactEventSource url={url} onEventSourceError={console.log}>
        { events => events.map(renderEvent) }
      </ReactEventSource>
    );
  }
}

export default LiveStream;

