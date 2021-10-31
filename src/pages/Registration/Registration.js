import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Register = () => {
    const { toggleLogin, handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration, isLogin, error } = useAuth();
    const history = useHistory();
    const handletoggleLogin = () => {
        history.push('/login');
    }
    return (
        <div className="mx-5 container mx-auto w-50">
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary">  Registration Form</h3>
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Your Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Enter your Name" />
                    </div>
                </div>
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
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={handletoggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered..?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">Register </button>


            </form>
            <br /><br /><br />
            <div>--------------------------------</div>
            <br /><br /><br />

        </div>
    );
};

export default Register;