import React from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css";

const Login = () => {
  return (
    <div className="welcome">
      <h1>Bienvenue sur BistouTchat</h1>
      <div className="link">
        <Link className="patient" to="/patient">
          Êtes-vous patient ?
        </Link>
        <Link className="patient" to="/login">
          Êtes vous médecin ?
        </Link>
      </div>
    </div>
  );
};
export default Login;
