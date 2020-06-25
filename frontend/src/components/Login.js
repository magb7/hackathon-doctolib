import React from "react";
import { Link } from "react-router-dom";

import "./styles/Login.css";

const Login = () => {
  return (
    <div className="welcome">
      <img src="/icons/LogotchatCare.png" alt="logo" />
      <h1>Tchat Care</h1>
      <div className="link">
        <Link className="patient" to="/patient">
          Êtes-vous patient ?
        </Link>
        <Link className="patient" to="/practician">
          Êtes vous médecin ?
        </Link>
      </div>
    </div>
  );
};
export default Login;
