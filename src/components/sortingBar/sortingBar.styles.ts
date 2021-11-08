import styled from "styled-components";

export const StyledSortingBar = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  width: 50%;
  padding: 15px;
  border: none;
  outline: none;
  text-transform: uppercase;
  background-color: ${({ active }: { active: boolean }) =>
    active ? "var(--color-blue)" : "var(--color-white)"};
  color: ${({ active }: { active: boolean }) =>
    active ? "var(--color-white)" : "var(--color-blue)"};
  cursor: pointer;
`;
