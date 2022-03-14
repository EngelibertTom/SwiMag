import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './Register.css'

function Register(props) {


    return (
        <section className="login container">
            <div className="login_form">
                <form onSubmit={props.onSignup}>
                    <div>
                        <label>Email:</label>
                        <input className="input" type="text" id="email" autoComplete="off" ref={props.emailRef} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input className="input" type="password" name="password" autoComplete="off" ref={props.passwordRef} required />
                    </div>
                    <div>
                        <label>Username:</label>
                        <input className="input" type="text" name="username" autoComplete="off" ref={props.usernameRef} required />
                    </div>
                    <div className="div_btn">
                        <a href='/'>Register</a>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Register