export const SEARCH_ID = "SEARCH_ID";
export const SEARCH_ID_FAIL = "SEARCH_ID_FAIL";
export const SEARCH_ID_SUCCESS = "SEARCH_ID_SUCCESS";

export const TICKETS = "TICKETS";
export const TICKETS_FAIL = "TICKETS_FAIL";
export const TICKETS_SUCCESS = "TICKETS_SUCCESS";
export const TICKETS_CHEAP = "TICKETS_CHEAP";
export const TICKETS_FAST = "TICKETS_FAST";

export interface SearchId {
  type: typeof SEARCH_ID;
}

export interface SearchIdFail {
  type: typeof SEARCH_ID_FAIL;
}

export interface SearchIdSuccess {
  type: typeof SEARCH_ID_SUCCESS;
  payload: { searchId: string };
}

type Segment = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

type Segments = [Segment, Segment];

export interface Ticket {
  price: number;
  carrier: string;
  segments: Segments;
}

export interface Tickets {
  type: typeof TICKETS;
}

export interface TicketsFail {
  type: typeof TICKETS_FAIL;
}

export interface TicketsSuccess {
  type: typeof TICKETS_SUCCESS;
  payload: { tickets: Ticket[]; stop: boolean };
}
export interface TicketsCheap {
  type: typeof TICKETS_CHEAP;
}
export interface TicketsFast {
  type: typeof TICKETS_FAST;
}

export type SearchIdDispatchTypes = SearchId | SearchIdFail | SearchIdSuccess;
export type TicketsDispatchTypes =
  | Tickets
  | TicketsFail
  | TicketsSuccess
  | TicketsCheap
  | TicketsFast;
