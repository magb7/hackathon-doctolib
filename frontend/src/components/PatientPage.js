import React from "react";
import SidebarPatient from "./SidebarPatient";
import "./styles/Page.css";

const PatientPage = () => (
  <div className="App">
    <div className="aside">
      <SidebarPatient />
    </div>
    <div className="content"></div>
  </div>
);
export default PatientPage;
