import React from "react";
import SidebarPractician from "./SidebarPractician";
import PatientCard from "./PatientCard";
import SearchBar from "./SearchBar";
import "./styles/Page.css";

const PracticianPage = () => {
  return (
    <div className="App">
      <div className="aside">
        <SidebarPractician />
      </div>
      <div className="content">
        <SearchBar />
        <PatientCard />
      </div>
    </div>
  );
};
export default PracticianPage;
