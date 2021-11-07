import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";

import TicketCard from "../ticketCard/ticketCard";
import Loader from "../loader/loader";

import "./tickets.css";

const StyledTicketsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledErrorMessage = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #ffffff;
  padding: 10px 20px;
  background-color: #fb4b4bbf;
  border-radius: 4px;
`;

function Tickets() {
  const store = useSelector((state: RootStore) => state.data);

  return (
    <StyledTicketsWrapper>
      {store.filteredTickets.length ? (
        store.filteredTickets
          .slice(0, 5)
          .map((ticket, i) => <TicketCard ticket={ticket} key={i} />)
      ) : store.tickets.length ? (
        store.tickets
          .slice(0, 5)
          .map((ticket, i) => <TicketCard ticket={ticket} key={i} />)
      ) : store.error ? (
        <StyledErrorMessage>{store.error.message}</StyledErrorMessage>
      ) : (
        <Loader />
      )}
    </StyledTicketsWrapper>
  );
}

export default Tickets;
