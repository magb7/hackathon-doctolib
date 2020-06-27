import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./styles/Login.css";

const Login = () => {
  return (
    <div className="welcome">
      <img src="/icons/logotchatCare.png" alt="logo" />
      <h1>Tchat Care</h1>
      <div>
        <Link className="link" to="/patient">
          Connect with your practician
        </Link>
      </div>
      <LoginForm />
    </div>
  );
};
export default Login;
