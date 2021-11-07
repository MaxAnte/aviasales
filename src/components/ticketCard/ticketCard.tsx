import React from "react";
import styled from "styled-components";

import { Ticket } from "../../actions/ticket.actions.types";

import "./ticketCard.css";

type Props = {
  ticket: Ticket;
};

const StyledTicket = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
`;

const StyledTicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledPrice = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #2196f3;
`;

const StyledSegment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 10px;
`;

const StyledSegCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSegTitle = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #a0b0b9;
`;

const StyledSegContent = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #4a4a4a;
`;

function TicketCard({ ticket }: Props) {
  const createStopString = (stops: number) =>
    stops > 0
      ? stops === 1
        ? `${stops} пересадкa`
        : `${stops} пересадки`
      : `Без пересадок`;

  const createDurationString = (minutes: number) =>
    minutes % 60 === 0
      ? `${minutes}ч`
      : `${(minutes - (minutes % 60)) / 60}ч ${minutes % 60}м`;

  const createStartEndTimeString = (datestr: string, duration: number) => {
    const startDate = new Date(datestr);
    const endDate = new Date(+startDate + duration * 60 * 1000);
    return `${startDate.getHours()}:${startDate.getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()}`;
  };

  return (
    <StyledTicket>
      <StyledTicketHeader>
        <StyledPrice>{ticket.price} P</StyledPrice>
        <img
          src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
          alt={ticket.carrier}
        />
      </StyledTicketHeader>
      {ticket.segments.map((seg, i) => (
        <StyledSegment key={i}>
          <StyledSegCol>
            <StyledSegTitle>
              {seg.origin} - {seg.destination}
            </StyledSegTitle>
            <StyledSegContent>
              {createStartEndTimeString(seg.date, seg.duration)}
            </StyledSegContent>
          </StyledSegCol>
          <StyledSegCol>
            <StyledSegTitle>В пути</StyledSegTitle>
            <StyledSegContent>
              {createDurationString(seg.duration)}
            </StyledSegContent>
          </StyledSegCol>
          <StyledSegCol>
            <StyledSegTitle>
              {createStopString(seg.stops.length)}
            </StyledSegTitle>
            {seg.stops.length ? (
              <StyledSegContent>{seg.stops.join(", ")}</StyledSegContent>
            ) : null}
          </StyledSegCol>
        </StyledSegment>
      ))}
    </StyledTicket>
  );
}

export default TicketCard;
