import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from 'react'
import './style.css';
import profile from './images/user.jpg';
import email from './images/email.jpg';
import password from './images/password.png';

const Login=()=> {
  
  return (
      <div>
        <div className="container">
          <div className="sign-up">
          <h1 className="heading"><b>LOGIN</b></h1>
            <div className="text">
              <img height="20px" src={profile}/>
              <input placeholder="Mask Id" type="text" />
            </div>
            <div className="text">
              <img height="20px" src={email} />
              <input placeholder=" example@nirmauni.ac.in" type="email" />
            </div>
            <div className="text">
              <img height="30px" src={password} />
              <input placeholder=" Password" type="password" />
            </div>
            <div className="terms">
              <input type="checkbox" />
              <p className="conditions">I agree to <a href="#">Terms &amp; Conditions</a></p>
            </div>
            <button>CREATE ACCOUNT</button>
            <p className="conditions">Don't have an account ? <a href="#">Register</a></p>
          </div>
          <div className="text-container"></div>
        </div>
      </div>
  );
}

export default Login;