import styled from "styled-components";

export const StyledTicket = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
`;

export const StyledTicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledPrice = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #2196f3;
`;

export const StyledSegment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 10px;
`;

export const StyledSegCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledSegTitle = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #a0b0b9;
`;

export const StyledSegContent = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #4a4a4a;
`;
