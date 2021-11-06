import React from "react";
import styled from "styled-components";

import { Ticket } from "../../actions/ticket.actions.types";

import "./ticketCard.css";

type Props = {
  ticket: Ticket;
};

function TicketCard({ ticket }: Props) {
  const StyledTicket = styled.div`
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px;
  `;
  return (
    <StyledTicket>
      <h5>Carrier: {ticket.carrier}</h5>
      <p>Price: {ticket.price}</p>
    </StyledTicket>
  );
}

export default TicketCard;
