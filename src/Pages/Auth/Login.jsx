import React, { useState } from "react";
import "../Auth/Login.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
// import LoginSignup from "./LoginSignup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <form onSubmit={signIn}>
          <h1>Login</h1>
          <div className="loginsignup-fields">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <p className="loginsignup-login">
            Create an Account
            <Link to="/">
              <span>Signup</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
