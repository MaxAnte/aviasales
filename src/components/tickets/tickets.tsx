import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";

import TicketCard from "../ticketCard/ticketCard";
import Loader from "../loader/loader";

import { ticketsLoadMore } from "../../actions/ticket.actions";

import {
  StyledTicketsWrapper,
  StyledErrorMessage,
  StyledLoadMore,
} from "./tickets.styles";

function Tickets() {
  const dispatch = useDispatch();
  const store = useSelector((state: RootStore) => state.data);

  return (
    <StyledTicketsWrapper>
      {store.filteredTickets.length ? (
        store.filteredTickets
          .slice(0, store.visibleTickets)
          .map((ticket, i) => <TicketCard ticket={ticket} key={i} />)
      ) : store.tickets.length ? (
        store.tickets
          .slice(0, store.visibleTickets)
          .map((ticket, i) => <TicketCard ticket={ticket} key={i} />)
      ) : store.error ? (
        <StyledErrorMessage>{store.error.message}</StyledErrorMessage>
      ) : (
        <Loader />
      )}
      <StyledLoadMore onClick={() => dispatch(ticketsLoadMore)}>
        Загрузить еще 5 билетов
      </StyledLoadMore>
    </StyledTicketsWrapper>
  );
}

export default Tickets;
