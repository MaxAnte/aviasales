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
    active ? "#2196F3" : "#ffffff"};
  color: ${({ active }: { active: boolean }) =>
    active ? "#ffffff" : "#2196F3"};
  cursor: pointer;
`;
