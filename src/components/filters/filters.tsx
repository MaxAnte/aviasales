import React, { useState } from "react";
import styled from "styled-components";
import { filters } from "./filters.const";

import "./filters.css";
import { Filter } from "./filters.types";

const StyledFiltersTitle = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #4a4a4a;
  padding: 10px 20px;
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

const StyledCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked + label {
    &::before {
      border-color: #2196f3;
      transition: all 0.3s ease;
    }
    &::after {
      transform: rotate(-45deg) scale(1);
      transition: all 0.3s ease;
    }
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-left: 10px;
  font-size: 13px;
  line-height: 20px;
  color: #4a4a4a;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #9abbce;
    background-color: #ffffff;
    border-radius: 2px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    transition: all 0.3s ease;
  }
  &::after {
    content: "";
    position: absolute;
    top: 7px;
    left: 5px;
    width: 10px;
    height: 4px;
    border-left: 2px solid #2196f3;
    border-bottom: 2px solid #2196f3;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    transform: rotate(-45deg) scale(0);
    transition: all 0.3s ease;
  }
`;

function Filters() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "all") {
      setActiveFilters(
        activeFilters.includes("all") ? [] : filters.map((el) => el.value)
      );
    } else {
      setActiveFilters(
        activeFilters.includes(e.target.id)
          ? activeFilters.filter((el) => el !== e.target.id && el !== "all")
          : [...activeFilters, e.target.id]
      );
    }
  };

  return (
    <>
      <StyledFiltersTitle>Количество пересадок</StyledFiltersTitle>
      {filters.map((filter) => (
        <StyledInputGroup key={filter.id}>
          <StyledCheckbox
            type="checkbox"
            id={filter.value}
            checked={activeFilters.includes(filter.value)}
            onChange={handleFilterCheck}
          />
          <StyledLabel htmlFor={filter.value}>{filter.name}</StyledLabel>
        </StyledInputGroup>
      ))}
    </>
  );
}

export default Filters;
