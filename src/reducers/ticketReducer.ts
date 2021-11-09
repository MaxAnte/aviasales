import {
  SearchIdDispatchTypes,
  SEARCH_ID,
  SEARCH_ID_FAIL,
  SEARCH_ID_SUCCESS,
  Ticket,
  TICKETS,
  TicketsDispatchTypes,
  TICKETS_CHEAP,
  TICKETS_FAIL,
  TICKETS_FAST,
  TICKETS_FILTERED,
  TICKETS_SUCCESS,
  TICKETS_DEFAULT,
  TICKETS_LOAD_MORE,
} from "../actions/ticket.actions.types";

interface InitialState {
  loading: boolean;
  searchId?: string;
  tickets: Ticket[];
  filteredTickets: Ticket[];
  visibleTickets: number;
  stop: boolean;
  error?: { message: string };
}

const initialState: InitialState = {
  loading: true,
  tickets: [],
  filteredTickets: [],
  visibleTickets: 5,
  stop: false,
};

const ticketReducer = (
  state: InitialState = initialState,
  action: SearchIdDispatchTypes | TicketsDispatchTypes
): InitialState => {
  switch (action.type) {
    case SEARCH_ID_FAIL:
      return { ...state, loading: false };

    case SEARCH_ID:
      return { ...state, loading: true };

    case SEARCH_ID_SUCCESS:
      return { ...state, loading: false, searchId: action.payload.searchId };

    case TICKETS_FAIL:
      return {
        ...state,
        loading: false,
        error: { message: "Ошибка сервера, попробуйте снова" },
      };

    case TICKETS:
      return { ...state, loading: true };

    case TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: action.payload.tickets,
        stop: action.payload.stop,
      };

    case TICKETS_CHEAP:
      return {
        ...state,
        tickets: [...state.tickets.sort((a, b) => a.price - b.price)],
        filteredTickets: [
          ...state.filteredTickets.sort((a, b) => a.price - b.price),
        ],
      };
    case TICKETS_FAST:
      return {
        ...state,
        tickets: [
          ...state.tickets.sort(
            (a, b) =>
              a.segments.reduce((acc: number, cur) => acc + cur.duration, 0) -
              b.segments.reduce((acc: number, cur) => acc + cur.duration, 0)
          ),
        ],
        filteredTickets: [
          ...state.filteredTickets.sort(
            (a, b) =>
              a.segments.reduce((acc: number, cur) => acc + cur.duration, 0) -
              b.segments.reduce((acc: number, cur) => acc + cur.duration, 0)
          ),
        ],
      };
    case TICKETS_DEFAULT:
      return state;
    case TICKETS_LOAD_MORE:
      return { ...state, visibleTickets: state.visibleTickets + 5 };
    case TICKETS_FILTERED:
      if (
        action.payload.filters.includes("all") ||
        !action.payload.filters.length
      ) {
        return { ...state, filteredTickets: [...state.tickets] };
      } else {
        const newState = { ...state };
        newState.filteredTickets = newState.tickets;
        action.payload.filters.map((el) => {
          newState.filteredTickets = newState.filteredTickets.filter((ticket) =>
            ticket.segments
              .map((seg) => Boolean(seg.stops.length === +el.split("_")[1]))
              .includes(true)
          );
          return el;
        });
        return {
          ...state,
          filteredTickets: newState.filteredTickets,
        };
      }

    default:
      return state;
  }
};

export default ticketReducer;
