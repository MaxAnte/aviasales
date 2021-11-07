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

function Tickets() {
  const store = useSelector((state: RootStore) => state.data);

  return (
    <StyledTicketsWrapper>
      {store.tickets ? (
        store.tickets
          .slice(0, 5)
          .map((ticket, i) => <TicketCard ticket={ticket} key={i} />)
      ) : (
        <Loader />
      )}
    </StyledTicketsWrapper>
  );
}

export default Tickets;
