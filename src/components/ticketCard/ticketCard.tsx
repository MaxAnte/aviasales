import React from "react";

import { Ticket } from "../../actions/ticket.actions.types";
import {
  StyledPrice,
  StyledSegCol,
  StyledSegContent,
  StyledSegment,
  StyledSegTitle,
  StyledTicket,
  StyledTicketHeader,
} from "./ticketCard.styles";

type Props = {
  ticket: Ticket;
};

function TicketCard({ ticket }: Props) {
  const createStopString = (stops: number) =>
    stops > 0
      ? stops === 1
        ? `${stops} пересадкa`
        : `${stops} пересадки`
      : `Без пересадок`;

  const createDurationString = (minutes: number) =>
    minutes % 60 === 0
      ? `${minutes / 60}ч`
      : `${(minutes - (minutes % 60)) / 60}ч ${minutes % 60}м`;

  const createStartEndTimeString = (datestr: string, duration: number) => {
    const startDate = new Date(datestr);
    const endDate = new Date(+startDate + duration * 60 * 1000);
    return `${startDate.getHours()}:${startDate.getMinutes()} - ${endDate.getHours()}:${endDate.getMinutes()}`;
  };

  return (
    <StyledTicket>
      <StyledTicketHeader>
        <StyledPrice>{ticket.price.toLocaleString("ru")} P</StyledPrice>
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
