import { combineReducers } from "redux";
import ticketReducer from "./ticketReducer";

const rootReducer = combineReducers({
  data: ticketReducer,
});

export default rootReducer;
