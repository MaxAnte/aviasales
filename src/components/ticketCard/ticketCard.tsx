import React from "react";
import { Ticket } from "../../actions/ticket.actions.types";
import "./ticketCard.css";

type Props = {
  ticket: Ticket;
};

function TicketCard({ ticket }: Props) {
  return (
    <div className="ticket">
      <h5>Carrier: {ticket.carrier}</h5>
      <p>Price: {ticket.price}</p>
    </div>
  );
}

export default TicketCard;
