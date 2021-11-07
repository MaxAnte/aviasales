import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchId, getTickets } from "./actions/ticket.actions";
import { RootStore } from "./store";
import styled from "styled-components";

import Filters from "./components/filters/filters";
import Tickets from "./components/tickets/tickets";
import SortingBar from "./components/sortingBar/sortingBar";
import LogoIcon from "./assets/icons/logoIcon";

import "./app.css";

const Wrapper = styled.div`
  max-width: 814px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const Aside = styled.aside`
  width: 100%;
  max-width: 232px;
  background-color: #ffffff;
  margin-right: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px 0px;
`;

const Section = styled.section`
  width: 100%;
`;

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
