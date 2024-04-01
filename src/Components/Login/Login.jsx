import React from "react";
import "./Login.css";
import email_icon from "../Assets/email-icon.svg";
import password_icon from "../Assets/password-icon.svg";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useEffect, useState } from 'react';


const Login = ({setLogged, setFullname}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let loginForm = watch('log')
    axios.get('http://localhost:5000/login/' ).then((res) =>{
        setLogin(res.data['login'])
        setPassword(res.data['password'])
        setFullname(res.data['firstName'] + ' ' + res.data['middleName'] + ' ' + res.data['lastName'])})
    const onSubmit = (data) => {
        console.log('hello')}
    return (
        <div className="container">
            <div className="inputs">
                <form className="login-form"  onSubmit={handleSubmit(onSubmit)}>
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="log" {...register("log", { 
                            required: true
                            ,})}
                            />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" {...register("password", { 
                            required: true,
                            validate: (val) => {
                                if (val !== password || loginForm !== login){
                                    setLogged(false)
                                    return 'Incorrect login'
                                }
                                else{

                                    setLogged(true)
                                }
                            }})}/>
                        {/* {errors.password && <span>This field is required</span>} */}
                        {errors.password &&<span>Incorrect login or password</span>}

                    </div>
                    <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
                </form>

            </div>
        </div>
    )
};

export default Login;