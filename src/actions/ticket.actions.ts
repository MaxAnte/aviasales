import { Dispatch } from "redux";
import {
  SEARCH_ID,
  SEARCH_ID_FAIL,
  SEARCH_ID_SUCCESS,
  SearchIdDispatchTypes,
  TICKETS,
  TICKETS_FAIL,
  TICKETS_SUCCESS,
  TICKETS_CHEAP,
  TicketsDispatchTypes,
  TICKETS_DEFAULT,
  TICKETS_FAST,
  TICKETS_FILTERED,
  TICKETS_LOAD_MORE,
} from "./ticket.actions.types";

const API_URL_BASE: string = "https://front-test.beta.aviasales.ru";

export const getSearchId =
  () => async (dispatch: Dispatch<SearchIdDispatchTypes>) => {
    try {
      dispatch({ type: SEARCH_ID });

      const res = await fetch(`${API_URL_BASE}/search`);
      const data = await res.json();

      dispatch({ type: SEARCH_ID_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SEARCH_ID_FAIL });
    }
  };

export const getTickets =
  (searchId: string) => async (dispatch: Dispatch<TicketsDispatchTypes>) => {
    try {
      dispatch({ type: TICKETS });

      const res = await fetch(`${API_URL_BASE}/tickets?searchId=${searchId}`);
      const data = await res.json();

      dispatch({ type: TICKETS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: TICKETS_FAIL });
    }
  };

export const sortCheapTickets = {
  type: TICKETS_CHEAP,
};

export const sortFastTickets = {
  type: TICKETS_FAST,
};

export const sortDefaultTickets = {
  type: TICKETS_DEFAULT,
};

export const ticketsLoadMore = {
  type: TICKETS_LOAD_MORE,
};

export const filterTickets = (filters: string[]) => ({
  type: TICKETS_FILTERED,
  payload: { filters },
});
