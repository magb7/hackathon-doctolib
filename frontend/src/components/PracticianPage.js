import React from "react";
import SidebarPractician from "./SidebarPractician";
import PatientCard from "./PatientCard";
import Chat from "./Chat";
import "./styles/Page.css";
import { Route, Switch } from "react-router-dom";

const PracticianPage = () => (
  <div className="App">
    <div className="aside">
      <SidebarPractician />
    </div>

    <Switch>
      <div className="content">
        <Route exact path="/login" component={PatientCard} />
      </div>
      <Route path="/login/chat" component={Chat} />
    </Switch>
  </div>
);
export default PracticianPage;
