import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";

class Eventlistattendee extends Component {
  render() {
    return (
      <div>
        <List.Item>
          <Image
            as="a"
            size="mini"
            circular
            src="https://randomuser.me/api/portraits/women/42.jpg"
          ></Image>
        </List.Item>
      </div>
    );
  }
}

export default Eventlistattendee;
