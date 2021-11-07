import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  filterCheapTickets,
  filterFastTickets,
} from "../../actions/ticket.actions";
import { RootStore } from "../../store";

import "./sortingBar.css";

const StyledSortingBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  width: 50%;
  padding: 15px;
  border: none;
  outline: none;
  text-transform: uppercase;
  background-color: ${({ active }: { active: boolean }) =>
    active ? "#2196F3" : "#ffffff"};
  color: ${({ active }: { active: boolean }) =>
    active ? "#ffffff" : "#2196F3"};
  cursor: pointer;
`;

function SortingBar() {
  const dispacth = useDispatch();
  const ticketsStore = useSelector((state: RootStore) => state.data.tickets);
  const [activeTab, setActiveTab] = useState<"cheap" | "fast">("cheap");

  useEffect(() => {
    ticketsStore?.length && dispacth(filterCheapTickets);
  }, [ticketsStore?.length, dispacth]);

  return (
    <StyledSortingBar>
      <StyledButton
        active={activeTab === "cheap"}
        type="button"
        onClick={() => {
          ticketsStore?.length && dispacth(filterCheapTickets);
          setActiveTab("cheap");
        }}
      >
        Самый дешевый
      </StyledButton>
      <StyledButton
        active={activeTab === "fast"}
        type="button"
        onClick={() => {
          ticketsStore?.length && dispacth(filterFastTickets);
          setActiveTab("fast");
        }}
      >
        Самый быстрый
      </StyledButton>
    </StyledSortingBar>
  );
}

export default SortingBar;
function dispacth(arg0: {
  type: string;
}): React.MouseEventHandler<HTMLButtonElement> | undefined {
  throw new Error("Function not implemented.");
}
