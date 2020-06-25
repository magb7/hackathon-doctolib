import React from "react";
import { Switch, Route } from "react-router-dom";
import SidebarPractician from "./SidebarPractician";
import PatientCard from "./PatientCard";
import Chat from "./Chat";
import "./styles/Page.css";

const PracticianPage = () => (
  <div className="App">
    <div className="aside">
      <SidebarPractician />
    </div>
    <div className="content">
      <Switch>
        <Route exact path="/login" component={PatientCard} />
        <Route path="/login/chat" component={Chat} />
      </Switch>
    </div>
  </div>
);
export default PracticianPage;
