import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import { getSearchId, getTickets } from "./actions/ticket.actions";

import Filters from "./components/filters/filters";
import Tickets from "./components/tickets/tickets";
import SortingBar from "./components/sortingBar/sortingBar";
import LogoIcon from "./assets/icons/logoIcon";

import { Wrapper, Main, Aside, Section } from "./app.styles";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state: RootStore) => state.data);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (store.searchId) dispatch(getTickets(store.searchId));
  }, [store.searchId, dispatch]);

  return (
    <Wrapper>
      <LogoIcon width="50" height="50" />
      <Main>
        <Aside>
          <Filters />
        </Aside>
        <Section>
          <SortingBar />
          <Tickets />
        </Section>
      </Main>
    </Wrapper>
  );
}

export default App;
