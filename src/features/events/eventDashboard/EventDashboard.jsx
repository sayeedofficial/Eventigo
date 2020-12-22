import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useDispatch, useSelector } from "react-redux";
import EventListItemPlaceholder from "./EventListItemPlaceholder";
import EventFilters from "./EventFilters";
import {
  dataFromSnapshot,
  getEventsFromFirestore,
} from "../../../app/firestore/firestoreservice";
import { listenToEvents } from "../eventActions";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../../../app/async/asyncReducer";

export default function EventDashboard() {
  const dispatch = useDispatch();

  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);
  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubsribe = getEventsFromFirestore({
      next: (snapshot) => {
        dispatch(
          listenToEvents(
            snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
          )
        );
        dispatch(asyncActionFinish());
      },

      error: (error) => dispatch(asyncActionError(error)),
    });
    return unsubsribe;
  }, [dispatch]);
  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
}
