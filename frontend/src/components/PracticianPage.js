import React, { useState } from "react";
import SidebarPractician from "./SidebarPractician";
import PatientCard from "./PatientCard";
import Patients from "../Patients";
import PatientsContext from "../contexts/patients-context";
import "./styles/Page.css";

const PracticianPage = () => {
  const [patients, setPatients] = useState([...Patients]);
  const value = { patients, setPatients };
  console.log(patients);
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
