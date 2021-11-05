import {
  SearchIdDispatchTypes,
  SEARCH_ID,
  SEARCH_ID_FAIL,
  SEARCH_ID_SUCCESS,
  Ticket,
  TICKETS,
  TicketsDispatchTypes,
  TICKETS_FAIL,
  TICKETS_SUCCESS,
} from "../actions/ticket.actions.types";

interface InitialState {
  loading: boolean;
  searchId?: string;
  tickets?: Ticket[];
  stop: boolean;
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
      return { ...state, loading: false };

    case TICKETS:
      return { ...state, loading: true };

    case TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: action.payload.tickets,
        stop: action.payload.stop,
      };

    default:
      return state;
  }
};

export default ticketReducer;
