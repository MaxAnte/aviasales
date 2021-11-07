import React from "react";
import styled from "styled-components";

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
  background-color: ${({ active }: { active: boolean }) =>
    active ? "#2196F3" : "#ffffff"};
  color: ${({ active }: { active: boolean }) =>
    active ? "#ffffff" : "#2196F3"};
  cursor: pointer;
`;

function SortingBar() {
  return (
    <StyledSortingBar>
      <StyledButton active={true} type="button">
        Самый дешевый
      </StyledButton>
      <StyledButton active={false} type="button">
        Самый быстрый
      </StyledButton>
    </StyledSortingBar>
  );
}

export default SortingBar;
