import React, { Component } from "react";
import { Grid,Button } from "semantic-ui-react";
import Eventform from "../eventform/eventform";
import Eventlist from "./evenlist/eventlist";

class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Eventlist />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button negative icon="play circle" content="Create Event"/>
          <Eventform/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
