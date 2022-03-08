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
    const usernameRef = React.createRef();
    const imageRef = React.createRef();

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
                setCookie('register', user, '/');
            }
        } catch (err) {
            console.error(err)
        }
    }
    if (cookies.register && cookies.register.token) {
        return <button id="disconnect" onClick={disconnect}>disconnect</button>;
    }
    return <FormRegister onSignup={onSignup} emailRef={emailRef} passwordRef={passwordRef}/>
}

function LocalProtectedRoute({children, ...rest}) {
    if (rest.allCookies && rest.allCookies.register && rest.allCookies.register.email && rest.allCookies.register.token) {
        return (
            React.cloneElement(children, {email: rest.allCookies.register.email, token: rest.allCookies.register.token})
        )
    }
    return <></>
}


/**
 * @return {null}
 */
function LocalProtectedLink({...rest}) {
    if (rest.allCookies && rest.allCookies.register && rest.allCookies.register.email && rest.allCookies.register.token) {
        return <Link className={rest.className} to={rest.to}>Home</Link>
    } else {
        return null;
    }
}

const ProtectedRoute = withCookies(LocalProtectedRoute);
const ProtectedLink = withCookies(LocalProtectedLink);

export {ProtectedRoute, ProtectedLink};
export default Register;