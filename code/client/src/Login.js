import React from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import {useCookies, withCookies} from 'react-cookie';

function FormLogin(props) {
    return (
        <form onSubmit={props.onSignin}>
            <div>
                <label>Email:</label>
                <input type="text" id="email" autoComplete="off" ref={props.emailRef}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" autoComplete="off" ref={props.passwordRef}/>
            </div>
            <div>
                <button type="submit" name="login">Login</button>
                <button type="button" name="signup" onClick={props.onSignup}>
                    Sign up
                </button>
            </div>
        </form>
    );
}

function Login() {
    const [cookies, setCookie, removeCookie] = useCookies(['login']);
    const emailRef = React.createRef();
    const passwordRef = React.createRef();

    function disconnect() {
        removeCookie('login');
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

    async function onSignin(e) {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        try {
            const p = (await axios.post('http://localhost:8000/signin', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('login', user, '/');
            }
        } catch (err) {
            console.error(err)
        }
    }

    if (cookies.login && cookies.login.token) {
        return <button id="disconnect" onClick={disconnect}>disconnect</button>;
    }
    return <FormLogin onSignin={onSignin} onSignup={onSignup} emailRef={emailRef} passwordRef={passwordRef}/>
}

function LocalProtectedRoute({children, ...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.email && rest.allCookies.login.token) {
        return (
            React.cloneElement(children, {email: rest.allCookies.login.email, token: rest.allCookies.login.token})
        )
    }
    return <></>
}


/**
 * @return {null}
 */
function LocalProtectedLink({...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.email && rest.allCookies.login.token) {
        return <Link className={rest.className} to={rest.to}>cities</Link>
    } else {
        return null;
    }
}

const ProtectedRoute = withCookies(LocalProtectedRoute);
const ProtectedLink = withCookies(LocalProtectedLink);

export {ProtectedRoute, ProtectedLink};
export default Login;