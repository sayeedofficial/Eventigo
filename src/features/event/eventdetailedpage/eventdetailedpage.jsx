import React from "react";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./eventDetailedHeader";
import EventDetailedChat from "./eventDetailedChats";
import EventDetailedInfo from "./eventDetailedInfo";
import EventDetailedSideBar from "./eventDetailedSideBar";

export const eventdetailedpage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader />
        <EventDetailedInfo />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSideBar />
      </Grid.Column>
    </Grid>
  );
};
