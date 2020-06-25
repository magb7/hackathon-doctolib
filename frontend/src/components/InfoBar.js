import React from "react";
import { Link } from "react-router-dom";

import "./styles/InfoBar.css";

const InfoBar = ({ room, type }) => (
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
      {type === "practician" ? (
        <Link to="/practician">
          <img src="/icons/closeIcon.png" alt="close icon" />
        </Link>
      ) : (
        <Link to="/">
          <img src="/icons/closeIcon.png" alt="close icon" />
        </Link>
      )}
    </div>
  </div>
);

export default InfoBar;
