import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchId, getTickets } from "./actions/ticket.actions";
import { RootStore } from "./store";

import Filters from "./components/filters/filters";
import Tickets from "./components/tickets/tickets";
import TicketsSortingBar from "./components/ticketsSortingBar/ticketsSortingBar";

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
    <div className="wrapper">
      {/* <Logo /> */}
      <h1>Logo</h1>
      <main className="main">
        <aside>
          <Filters />
        </aside>
        <section className="tickets-wrapper">
          <TicketsSortingBar />
          <Tickets />
        </section>
      </main>
    </div>
  );
}

export default App;
