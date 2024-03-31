import React from "react";
import "./Login.css";
import email_icon from "../Assets/email-icon.svg";
import password_icon from "../Assets/password-icon.svg";

const Login = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Login</div>
            </div>
        </div>
    )
};

export default Login;