import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Eventlist from "./evenlist/eventlist";

class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Eventlist />
        </Grid.Column>
        <Grid.Column width={6}></Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
