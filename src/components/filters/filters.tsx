import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { filterTickets } from "../../actions/ticket.actions";
import { filters } from "./filters.const";

import {
  StyledCheckbox,
  StyledFiltersTitle,
  StyledInputGroup,
  StyledLabel,
} from "./filters.styles";

function Filters() {
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(filterTickets(activeFilters));
  }, [dispatch, activeFilters]);

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
