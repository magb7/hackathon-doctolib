import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";
import SidebarPractician from "./components/SidebarPractician";
import "./App.css";

const App = () => (
  <div className="App">
    <Router>
      <div className="aside">
        <SidebarPractician />
      </div>
      <div className="content">
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
      </div>
    </Router>
  </div>
);
export default App;
