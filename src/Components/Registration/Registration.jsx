import React from 'react';
import Login from './Login'
import SignIn from './SignIn'

const Registration = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <Login/>
                </div>
                <div className="col-lg-6">
                    <SignIn/>
                </div>
            </div>
        </div>
    );
};

export default Registration;