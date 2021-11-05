import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";

import TicketCard from "../ticketCard/ticketCard";

import "./tickets.css";

function Tickets() {
  const store = useSelector((state: RootStore) => state.data);

  return (
    <div className="tickets-wrapper">
      {store.tickets ? (
        store.tickets.map((ticket, i) => <TicketCard ticket={ticket} key={i} />)
      ) : (
        <p>No tickets</p>
      )}
    </div>
  );
}

export default Tickets;
