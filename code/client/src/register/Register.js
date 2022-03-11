import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useCookies, withCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import './Register.css'

function FormSignup(props) {


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
                        <button className='btn' type="button" name="signup" onClick={props.onSignup}>Sign up</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

function Signup() {
    const [cookies, setCookie, removeCookie] = useCookies(['login']);
    const usernameRef = React.createRef();
    const passwordRef = React.createRef();
    const emailRef = React.createRef();
    let navigate = useNavigate();
    function disconnect() {
        removeCookie('signup');
    }

    async function onSignup(e) {
        e.preventDefault();
        console.log("error");
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,

        };
        try {
            console.log("signup");
            const p = (await axios.post('http://localhost:8000/signup', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('signup', user, '/');
                navigate("/");

            }
        } catch (err) {
            console.error(err)
        }
    }

    return <FormSignup onSignup={onSignup} usernameRef={usernameRef} passwordRef={passwordRef} emailRef={emailRef} />
}
export default Signup;