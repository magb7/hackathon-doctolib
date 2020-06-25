import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import PatientPage from "./components/PatientPage";
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

          <Route path="/chat/:name/:room" component={PatientPage} />
          <Route path="/join" exact component={SignIn} />
          <Route path="/login" component={PracticianPage} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
