import React from "react";
import { Route, Switch } from "react-router-dom";
import SidebarPractician from "./SidebarPractician";
import PatientCard from "./PatientCard";
import Chat from "./Chat";

import "./styles/Page.css";

const PracticianPage = () => {
  return (
    <div className="App">
      <div className="aside">
        <SidebarPractician />
      </div>
      <Switch>
        <div className="content">
          <Route exact path="/practician" component={PatientCard} />
          <Route path="/practician/chat" component={Chat} />
        </div>
      </Switch>
    </div>
  );
};
export default PracticianPage;
