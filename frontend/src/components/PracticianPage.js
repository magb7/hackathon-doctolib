import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import SidebarPractician from "./SidebarPractician";
import PatientCard from "./PatientCard";
import Chat from "./Chat";
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
        <Switch>
          <div className="content">
            <Route exact path="/login" component={PatientCard} />
            <Route path="/login/chat" component={Chat} />
          </div>
        </Switch>
      </div>
    </PatientsContext.Provider>
  );
};
export default PracticianPage;
