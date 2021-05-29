import { FC } from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import Home from "firebase/Home";
import SignUp from "firebase/signup";
import SignIn from "firebase/signin";

const App: FC = () => (
  <div className="App">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/singup">
        <SignUp />
      </Route>
      <Route path="/singin">
        <SignIn />
      </Route>
      <Route>not found</Route>
    </Switch>
  </div>
);

export default App;
