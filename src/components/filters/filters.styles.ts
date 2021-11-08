import styled from "styled-components";

export const StyledFiltersTitle = styled.p`
  font-weight: 600;
  font-size: var(--font-main-size);
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--font-main-color);
  padding: 10px 20px;
`;

export const StyledInputGroup = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--color-filter-hoverz);
    transition: all 0.3s ease;
  }
`;

export const StyledCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked + label {
    &::before {
      border-color: var(--color-blue);
      transition: all 0.3s ease;
    }
    &::after {
      transform: rotate(-45deg) scale(1);
      transition: all 0.3s ease;
    }
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-left: 10px;
  font-size: 13px;
  line-height: 20px;
  color: var(--font-main-color);
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid var(--color-filter-border);
    background-color: var(--color-white);
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
    border-left: 2px solid var(--color-blue);
    border-bottom: 2px solid var(--color-blue);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    transform: rotate(-45deg) scale(0);
    transition: all 0.3s ease;
  }
`;
