import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 814px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const Aside = styled.aside`
  width: 100%;
  max-width: 232px;
  background-color: var(--color-white);
  margin-right: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px 0px;
`;

export const Section = styled.section`
  width: 100%;
`;
