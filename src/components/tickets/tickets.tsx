import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";

import TicketCard from "../ticketCard/ticketCard";

import "./tickets.css";

function Tickets() {
  const ticketState = useSelector((state: RootStore) => state.ticket);

  return (
    <div className="tickets-wrapper">
      {ticketState.tickets ? (
        ticketState.tickets.map((ticket, i) => (
          <TicketCard ticket={ticket} key={i} />
        ))
      ) : (
        <p>No tickets</p>
      )}
    </div>
  );
}

export default Tickets;
