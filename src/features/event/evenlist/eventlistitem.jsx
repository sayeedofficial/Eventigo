/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import Eventlistattendee from "./eventlistattendee";
import { Link } from 'react-router-dom'
class Eventlistitem extends Component {
  render() {
    const { event, selectEvent, deleteEvent } = this.props;
    return (
      <div>
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                <Item.Content>
                  <Item.Header as="a">{event.title}</Item.Header>
                  <Item.Description>
                    Hosted by <a>{event.hostedby} </a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span>
              <Icon name="clock" /> {event.date} |
              <Icon name="marker" /> {event.venue}
            </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
              {event.attendees &&
                event.attendees.map((attendee) => (
                  <Eventlistattendee key={attendee.id} attendee={attendee} />
                ))}
            </List>
          </Segment>
          <Segment clearing>
            <span>{event.description}</span>
            <Button
              onClick={() => deleteEvent(event.id)}
              as="a"
              color="red"
              floated="right"
              content="Delete"
            />
            <Button
              as={Link}
              to={`/events/${event.id}`}
              color="teal"
              floated="right"
              content="View"
            />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}

export default Eventlistitem;
