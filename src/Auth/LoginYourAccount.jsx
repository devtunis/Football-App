import React from "react";
import "./LoginYourAccount.css";
import { Mail, Lock, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
const LoginYourAccount = () => {
    const Nav = useNavigate()
    const HandelLogin = ()=>{
        Nav("/MyTeam")

    }
  return (
    <div className="container_login">

      <div className="login_card">

        <div className="login_header">

          <div className="login_icon">
            <LogIn size={30} />
          </div>

          <h1>Welcome Back</h1>

          <p>
            Login to continue your football journey.
          </p>

        </div>

        <div className="input_box">
          <Mail size={20} />
          <input
            type="email"
            placeholder="Email Address"
          />
        </div>

        <div className="input_box">
          <Lock size={20} />
          <input
            type="password"
            placeholder="Password"
          />
        </div>

        <button className="login_btn" onClick={()=>HandelLogin()}>
          Login
        </button>

      </div>

    </div>
  );
};

export default LoginYourAccount;