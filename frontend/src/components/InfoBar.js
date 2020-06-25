import React from "react";
import { Link } from "react-router-dom";

import "./style/InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img
        className="onlineIcon"
        src="/icons/onlineIcon.png"
        alt="online icon"
      />
      <h3>Room: {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <Link to="/login">
        <img src="/icons/closeIcon.png" alt="close icon" />
      </Link>
    </div>
  </div>
);

export default InfoBar;
