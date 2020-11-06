import React, { Component, Fragment } from "react";
import Eventlistitem from "./eventlistitem";

class Eventlist extends Component {
  render() {
    return (
      <Fragment>
        {this.props.events.map((event) => (
          <Eventlistitem key={event.id} event={event} />
        ))}
      </Fragment>
    );
  }
}
export default Eventlist;
