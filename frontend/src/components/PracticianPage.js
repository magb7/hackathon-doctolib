import React from "react";
import SidebarPractician from "./SidebarPractician";
import PatientCard from "./PatientCard";
import PatientsContext from "../contexts/patients-context";
import "./styles/Page.css";

const PracticianPage = () => {
  const value = { patients, setPatients };
  return (
    <PatientsContext.Provider value={value}>
      <div className="App">
        <div className="aside">
          <SidebarPractician />
        </div>
        <div className="content">
          <PatientCard />
        </div>
      </div>
    </PatientsContext.Provider>
  );
};
export default PracticianPage;
