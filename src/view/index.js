import React from "react";
import styled from "styled-components";

import Header from "../view/header";
import Body from "../view/body";

const Container = styled.div`
  height: 100vh;
`;

const Main = () => (
  <Container>
    <Header />
    <Body />
  </Container>
);

export default Main;
