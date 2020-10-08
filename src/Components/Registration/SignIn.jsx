import React, { useState } from 'react';
import {createUserProfileDocument, auth} from '../../Firebase/firebase'

const SignIn = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const signUpHandler = async e => {
        e.preventDefault()

        if(password !== confirmPassword){
            alert('password not matching')
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName, password})
        }catch(error){
            console.log(error)
        }

    }

    return (
        <div className="mt-3" >
            <h2>Sign Up page</h2>
            <form onSubmit={signUpHandler} >
                <input
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    type="text"
                    placeholder="DisplayName"
                    className="form-control mt-2" />
                    
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="form-control mt-2" />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    className="form-control mt-2" />
                    
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="confirmPassword"
                    className="form-control mt-2" />

                <button className="btn btn-danger mt-2 mr-2 btn-block " >Sign up</button>
            </form>
        </div>
    );
};

export default SignIn;