import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import PatientPage from "./components/PatientPage";
import PracticianPage from "./components/PracticianPage";
//import Chat from "./components/Chat";
import Login from "./components/Login";
import Join from "./components/Join";
import "./App.css";

const App = () => {
  let { name, room } = useParams();
  useEffect(() => {
    getName();
  }, [name]);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/join" exact component={Join} />
          <Route path="/login" component={PracticianPage} />
          <Route path="/chat/name=${name}/:room" component={PatientPage} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
