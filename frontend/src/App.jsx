import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import PracticianPage from "./components/PracticianPage";
import Login from "./components/Login";
import SignIn from "./components/Join";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/patient" exact component={SignIn} />
          <Route path="/practician" exact component={PracticianPage} />
          <Route path="/chat/:type/:name/:room" component={Chat} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
