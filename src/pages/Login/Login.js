import React, { useState } from 'react';

import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Login.css"

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { signInUsingGoogle, setUser, email, password, setError, toggleLogin, processLogin, handleRegistration, handleEmailChange, handlePasswordChange, error } = useAuth();
    const [logViaEmail, setLogViaEmail] = useState(false);

    const redirect_url = location.state?.from || '/home';

    const handleBtnEmail = () => {

        setLogViaEmail(true);

        // history.push('/register')
    }
    const handleBtnGoogle = () => {

        setLogViaEmail(false);
        signInUsingGoogle()
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                history.push(redirect_url);
            })

    }
    const signViaEmail = () => {
        processLogin(email, password)
            .then(result => {
                // const user = result.user;
                setUser(result.user)
                setError('');
                history.push(redirect_url);
            })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('ligin clicked');
        toggleLogin(true);
        signViaEmail();
    }
    return (
        <div className="mx-5 mb-3 container mx-auto w-50">
            <h1>Please Login Here</h1>

            <button className="btn btn-danger" onClick={handleBtnGoogle} >Login Using Google Account</button><br /><br />

            <button className="btn btn-danger mb-5" onClick={handleBtnEmail}>Login Using Email</button>
            <Link className="link-user" to="/registration">New user?</Link>
            {/* //onSubmit={handleRegistration} */}
            {logViaEmail &&
                <form onSubmit={handleLogin}>
                    <h3 className="text-primary"> Login form </h3>

                    <div className="row mb-3">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Your Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail" placeholder="Enter your email" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Your Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword" placeholder="Enter your password" required />
                        </div>
                    </div>

                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>



                </form>

            }




        </div>
    );
};

export default Login;