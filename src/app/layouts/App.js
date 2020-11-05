import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/eventdashboard/eventdashboard";
import Navbar from "../../features/event/eventdashboard/nav/navbar/navbar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container className="main">
          <Navbar />
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}
export default App;
