import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import Eventform from "../eventform/eventform";
import Eventlist from "./evenlist/eventlist";
import cuid from "cuid";

const eventsfromdashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
    ],
  },
];

class EventDashboard extends Component {
  state = {
    events: eventsfromdashboard,
    isOpen: false,
    selectedEvent: null,
  };
  // handleFormOpenToggle = () => {
  //   this.setState(({ isOpen }) => ({
  //     isOpen: !isOpen,
  //   }));
  // };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null,
    });
  };
  handleFormCancel = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.setState(({ events }) => ({
      events: [...events, newEvent],
      isOpen: false,
    }));
  };

  handleSelectEvent = (evt,event) => {
    this.setState({
      selectedEvent: event,
      isOpen: true,
    });
  };

  render() {
    const { events, isOpen, selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Eventlist events={events} selectEvent={this.handleSelectEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleCreateFormOpen}
            negative
            icon="play circle"
            content="Create Event"
          />
          {isOpen && (
            <Eventform
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              cancelFormOpen={this.handleFormCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
export default EventDashboard;
