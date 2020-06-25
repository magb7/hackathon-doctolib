import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import PracticianPage from "./components/PracticianPage";
import Login from "./components/Login";
import SignIn from "./components/Join";
import SignUp from "./components/Signup";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/patient" exact component={SignIn} />
          <Route path="/chat/:type/:name/:room" component={Chat} />
          <Route exact path="/" component={Login} />
          <Route path="/practician" exact component={PracticianPage} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
