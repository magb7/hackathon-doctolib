import React from "react";
import SidebarPatient from "./SidebarPatient";
import Chat from "./Chat";
import "./styles/Page.css";

const PatientPage = () => (
  <div className="App">
    <div className="aside">
      <SidebarPatient />
    </div>
    <div className="content">
      <Chat location="/chat/:name/:room}" />
    </div>
  </div>
);
export default PatientPage;
