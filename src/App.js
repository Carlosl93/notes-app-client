import React, { useState, useCallback, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Auth } from "aws-amplify";

import Routes from "./Routes";
import { colors as c } from "./styles/color";
import { AppContext } from "./libs/contextLib";
import { onError } from "./libs/errorLib";

const AppContainer = styled.div`
  height: 100%;
  margin: 60px 60px 0 60px;
`;

const Navbar = styled.div`
  align-items: center;
  border: 1px solid ${c.gray.medium};
  border-radius: 5px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
`;

const LinksContainer = styled.div`
  align-item: flex-end;

  a {
    margin-left: 10px;
  }
`;

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const history = useHistory();

  useEffect(() => {
    console.log("yo");
    onLoad();
  }, []);

  const onLoad = async () => {
    try {
      const currentSession = await Auth.currentSession();
      console.log("hey", currentSession);
      userHasAuthenticated(true);
    } catch (e) {
      console.log("e", e);
      if (e !== "No current user") {
        onError(e);
      }
    }

    setIsAuthenticating(true);
  };

  const handleLogout = useCallback(async () => {
    await Auth.signOut();

    userHasAuthenticated(false);
    history.push("/login");
  }, [userHasAuthenticated, history]);

  return (
    isAuthenticating && (
      <AppContainer>
        <Navbar>
          <Link to="/">Scratch</Link>
          {isAuthenticated ? (
            <LinksContainer>
              <button onClick={handleLogout}>Logout</button>
            </LinksContainer>
          ) : (
            <LinksContainer>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </LinksContainer>
          )}
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </AppContainer>
    )
  );
}

export default App;
