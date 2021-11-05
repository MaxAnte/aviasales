import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchId, getTickets } from "./actions/ticket.actions";
import { RootStore } from "./store";

import TicketCard from "./components/ticketCard/ticketCard";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const ticketState = useSelector((state: RootStore) => state.ticket);

  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (ticketState.searchId && !ticketState.stop)
      dispatch(getTickets(ticketState.searchId));
  }, [ticketState.searchId, ticketState.stop]);

  return (
    <div className="App">
      <h1>{ticketState.searchId}</h1>
      {ticketState.tickets?.map((ticket, i) => (
        <TicketCard ticket={ticket} key={i} />
      ))}
    </div>
  );
}

export default App;
