import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Routes from "./Routes";
import { colors as c } from "./styles/color";

const AppContainer = styled.div`
  height: 100%;
  margin: 60px 60px 0 60px;
`;

const Navbar = styled.div`
  align-items: center;
  background-color: ${c.gray.light};
  border: 1px solid ${c.gray.medium};
  border-radius: 5px;
  display: flex;
  height: 50px;
  padding: 10px 20px;
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Navbar>
        <Link to="/">Scratch</Link>
      </Navbar>
      <Routes />
    </AppContainer>
  );
}

export default App;
