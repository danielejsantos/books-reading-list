import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(92, 151, 191, 1);
`;

const Title = styled.p`
  font-size: 30px;
  font-family: "Courier New", Courier, monospace;
  color: white;
`;

const Header = () => (
  <Container>
    <Title>Books Reading List 2020</Title>
  </Container>
);

export default Header;
