import React from "react";
import SidebarPractician from "./SidebarPractician";
import "./styles/Page.css";

const PracticianPage = () => (
  <div className="App">
    <div className="aside">
      <SidebarPractician />
    </div>
    <div className="content"></div>
  </div>
);
export default PracticianPage;
