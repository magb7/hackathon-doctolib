import React from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css";

const Login = () => {
  return (
    <div className="welcome">
      <h1>Bienvenue sur BistouTchat</h1>
      <Link to="/join">Êtes-vous patient ?</Link>
      <Link to="/login">Êtes vous médecin ?</Link>
    </div>
  );
};
export default Login;
