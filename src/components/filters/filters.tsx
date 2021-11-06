import React from "react";
import styled from "styled-components";

import "./filters.css";

function Filters() {
  const StyledFiltersTitle = styled.p`
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #4a4a4a;
    padding: 10px 20px 20px;
  `;

  const StyledInputGroup = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    &:hover {
      background-color: #f1fcff;
      transition: all 0.3s ease;
    }
  `;

  const StyledLabel = styled.label`
    margin-left: 10px;
    font-size: 13px;
    line-height: 20px;
    color: #4a4a4a;
  `;

  return (
    <div className="filters">
      <StyledFiltersTitle>Количество пересадок</StyledFiltersTitle>
      <StyledInputGroup>
        <input type="checkbox" name="all" />
        <StyledLabel htmlFor="all">Все</StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <input type="checkbox" name="noone" />
        <StyledLabel htmlFor="noone">Без пересадок</StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <input type="checkbox" name="change_1" />
        <StyledLabel htmlFor="change_1">1 пересадка</StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <input type="checkbox" name="change_2" />
        <StyledLabel htmlFor="change_2">2 пересадка</StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <input type="checkbox" name="change_3" />
        <StyledLabel htmlFor="change_3">3 пересадка</StyledLabel>
      </StyledInputGroup>
    </div>
  );
}

export default Filters;
