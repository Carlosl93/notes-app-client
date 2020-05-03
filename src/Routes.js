import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup.js";
import NewNote from "./containers/NewNote/NewNote.js";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/notes/new">
        <NewNote />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
