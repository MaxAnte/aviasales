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
  TICKETS_SUCCESS,
} from "../actions/ticket.actions.types";

interface InitialState {
  loading: boolean;
  searchId?: string;
  tickets?: Ticket[];
  stop: boolean;
  error?: { message: string };
}

const initialState: InitialState = {
  loading: true,
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
        tickets: state.tickets?.length
          ? [...state.tickets.sort((a, b) => a.price - b.price)]
          : undefined,
      };
    case TICKETS_FAST:
      return {
        ...state,
        tickets: state.tickets?.length
          ? [
              ...state.tickets.sort(
                (a, b) =>
                  a.segments.reduce(
                    (acc: number, cur) => acc + cur.duration,
                    0
                  ) -
                  b.segments.reduce((acc: number, cur) => acc + cur.duration, 0)
              ),
            ]
          : undefined,
      };

    default:
      return state;
  }
};

export default ticketReducer;
