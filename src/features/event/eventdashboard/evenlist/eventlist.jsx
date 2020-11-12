 import React, { Component, Fragment } from "react";
import Eventlistitem from "./eventlistitem";

class Eventlist extends Component {
  render() {
    const { events, selectEvent } = this.props;
    return (
      <Fragment>
        {events.map((event) => (
          <Eventlistitem key={event.id} event={event} selectEvent={selectEvent} />
        ))}
      </Fragment>
    );
  }
}
export default Eventlist;
