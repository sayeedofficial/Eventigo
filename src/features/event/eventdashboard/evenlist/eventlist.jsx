import React, { Component } from "react";
import Eventlistitem from "./eventlistitem";

class Eventlist extends Component {
  render() {
    return (
      <div>
        <Eventlistitem />
        <Eventlistitem />
        <Eventlistitem />
      </div>
    );
  }
}
export default Eventlist;
