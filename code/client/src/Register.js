import React from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import {useCookies, withCookies} from 'react-cookie';

function FormRegister(props) {
    return (
        <form onSubmit={props.onSignup}>
            <div>
                <label>Email:</label>
                <input type="text" id="email" autoComplete="off" ref={props.emailRef} required/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" autoComplete="off" ref={props.passwordRef} required/>
            </div>
            <div>
                <label>Username:</label>
                <input type="text" name="username" autoComplete="off" ref={props.usernameRef} required/>
            </div>
            <div>
                <label>Photo:</label>
                <input type="file" name="image" autoComplete="off" ref={props.imageRef} required/>
            </div>
            <div>
                <button type="button" name="signup" onClick={props.onSignup}>
                    Sign up
                </button>
            </div>
        </form>
    );
}

function Register() {
    const [cookies, setCookie, removeCookie] = useCookies(['register']);
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    function disconnect() {
        removeCookie('register');
    }

    async function onSignup() {
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        try {
            const p = (await axios.post('http://localhost:8000/signup', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('login', user, '/');
            }
        } catch (err) {
            console.error(err)
        }
    }
    return <FormRegister onSignup={onSignup} emailRef={emailRef} passwordRef={passwordRef}/>
}

export default Register;