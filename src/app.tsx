import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchId, getTickets } from "./actions/ticket.actions";
import { RootStore } from "./store";

import Filters from "./components/filters/filters";
import Tickets from "./components/tickets/tickets";
import SortingBar from "./components/sortingBar/sortingBar";
import LogoIcon from "./assets/icons/logoIcon";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state: RootStore) => state.data);

  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (store.searchId) dispatch(getTickets(store.searchId));
  }, [store.searchId]);

  return (
    <div className="wrapper">
      <LogoIcon width="50" height="50" />
      <main className="main">
        <aside>
          <Filters />
        </aside>
        <section className="tickets-wrapper">
          <SortingBar />
          <Tickets />
        </section>
      </main>
    </div>
  );
}

export default App;
