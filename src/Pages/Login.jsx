import React from "react";
import "./CSS/Login.css";
import { Link } from "react-router-dom";
// import LoginSignup from "./LoginSignup";

const Login = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          {/* <input type="text" placeholder="Your name"/> */}
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Create an Account
          <Link to="/signup">
            <span>Signup</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
