import React from "react";
import SidebarPractician from "./SidebarPractician";
import PatientCard from "./PatientCard";

import "./styles/Page.css";

const PracticianPage = () => {
  return (
    <div className="App">
      <div className="aside">
        <SidebarPractician />
      </div>
      <div className="content">
        <PatientCard />
      </div>
    </div>
  );
};
export default PracticianPage;
