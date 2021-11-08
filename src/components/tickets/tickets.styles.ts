import styled from "styled-components";

export const StyledTicketsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledErrorMessage = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: var(--color-white);
  padding: 10px 20px;
  background-color: var(--color-error-message-bg);
  border-radius: 4px;
`;
