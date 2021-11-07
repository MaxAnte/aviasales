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
  TICKETS_FAST,
} from "./ticket.actions.types";

export const getSearchId =
  () => async (dispatch: Dispatch<SearchIdDispatchTypes>) => {
    try {
      dispatch({ type: SEARCH_ID });

      const res = await fetch("https://front-test.beta.aviasales.ru/search");
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

      const res = await fetch(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
      );
      const data = await res.json();
      console.log(data);

      dispatch({ type: TICKETS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: TICKETS_FAIL });
    }
  };

export const filterCheapTickets = {
  type: TICKETS_CHEAP,
};

export const filterFastTickets = {
  type: TICKETS_FAST,
};
