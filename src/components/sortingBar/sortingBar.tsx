import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import {
  sortCheapTickets,
  sortFastTickets,
  sortDefaultTickets,
} from "../../actions/ticket.actions";

import { StyledButton, StyledSortingBar } from "./sortingBar.styles";

function SortingBar() {
  const dispacth = useDispatch();
  const ticketsStore = useSelector((state: RootStore) => state.data.tickets);
  const [activeTab, setActiveTab] = useState<"cheap" | "fast" | "optimal">(
    "cheap"
  );

  useEffect(() => {
    ticketsStore.length && dispacth(sortCheapTickets);
  }, [ticketsStore.length, dispacth]);

  return (
    <StyledSortingBar>
      <StyledButton
        active={activeTab === "cheap"}
        type="button"
        onClick={() => {
          ticketsStore.length && dispacth(sortCheapTickets);
          setActiveTab("cheap");
        }}
      >
        Самый дешевый
      </StyledButton>
      <StyledButton
        active={activeTab === "fast"}
        type="button"
        onClick={() => {
          ticketsStore.length && dispacth(sortFastTickets);
          setActiveTab("fast");
        }}
      >
        Самый быстрый
      </StyledButton>
      <StyledButton
        active={activeTab === "optimal"}
        type="button"
        onClick={() => {
          ticketsStore.length && dispacth(sortDefaultTickets);
          setActiveTab("optimal");
        }}
      >
        Оптимальный
      </StyledButton>
    </StyledSortingBar>
  );
}

export default SortingBar;
