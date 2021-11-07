import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";

import TicketCard from "../ticketCard/ticketCard";
import Loader from "../loader/loader";

import { StyledTicketsWrapper, StyledErrorMessage } from "./tickets.styles";

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
