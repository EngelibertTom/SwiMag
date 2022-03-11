import React from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import {useCookies, withCookies} from 'react-cookie';
import './login/Login.css'
import './Register.css'

function FormRegister(props) {
    return (
        <section className="login container">
            <h1>Register</h1>
            <div className="login_form">
                <form onSubmit={props.onSignup}>
                    <div>
                        <label>Email:</label>
                        <input className="input" type="text" id="email" autoComplete="off" ref={props.emailRef} required/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input className="input" type="password" name="password" autoComplete="off" ref={props.passwordRef} required/>
                    </div>
                    <div>
                        <label>Username:</label>
                        <input className="input" type="text" name="username" autoComplete="off" ref={props.usernameRef} required/>
                    </div>
                    <div>
                        <label>Photo:</label>
                        <div className="btn_photo"> <input className='btn' type="file" name="image" autoComplete="off" ref={props.imageRef} required/> </div>
                    </div>
                    <div className="div_btn">
                        <button className='btn' type="button" name="signup" onClick={props.onSignup}>Sign up</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

function Register() {
    const [cookies, setCookie, removeCookie] = useCookies(['register']);
    const emailRef = React.createRef();
    const passwordRef = React.createRef();
    const usernameRef = React.createRef();
    const photoRef = React.createRef();

    async function onSignup() {
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            username: usernameRef.current.value,
            photo: photoRef.current.value
        };
        try {
            const p = (await axios.post('http://localhost:8000/signup', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('register', user, '/');
            }
        } catch (err) {
            console.error(err)
        }
    }
    return <FormRegister onSignup={onSignup} emailRef={emailRef} passwordRef={passwordRef} usernameRef={usernameRef} photoRef={photoRef}/>
}

export default Register;