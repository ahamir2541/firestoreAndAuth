import React, {useEffect, useState} from 'react';
import firebase from '../../Firebase/firebase'
import { createUserProfileDocument } from '../../Firebase/firebase'

const Login = () => {
    const [currentUser, setCurrentUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submitHandler = e => {
        e.preventDefault()

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // google sign up method
    const googleInHandler = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log(result)
          }).catch(function(error) {
            console.log(error)
          });
    }

    // sign out method
    const signOutHandler = () => {
        firebase.auth().signOut().then(function() {
            console.log('Log out successfully.')
          }).catch(function(error) {
            console.log(error)
          });
    }

    // login user check
    let unsubscribeFromAuth = null

    useEffect(() => {
        unsubscribeFromAuth = firebase.auth().onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id : snapShot.id,
                        ...snapShot.data()
                    })
                })
            }else {
                setCurrentUser(userAuth)
            }

        })

        return () => {
            unsubscribeFromAuth()
        }
    }, [])

    return (
        <div>
            <h2 className="mt-3" >Login page</h2>
            {currentUser ? <h3>hello - {currentUser.displayName} </h3> : '' }
            <form onSubmit={submitHandler} >
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value) }
                    type="email"
                    placeholder="Email"
                    className="form-control mt-2" />

                <input
                value={password}
                onChange={(e) => setPassword(e.target.value) }
                    type="password"
                    placeholder="password"
                    className="form-control mt-2" />

                { currentUser ? (
                    <>
                    <h2>Login successfully</h2>
                    <button onClick={signOutHandler} className="btn btn-dark mt-2 mr-2 btn-block " >Log out</button> 
                    </>
                )
                :
                (
                    <>
                    <button className="btn btn-danger mt-2 mr-2 btn-block " >Login</button>

                    <button onClick={googleInHandler} className="btn btn-dark mt-2 mr-2 btn-block " >Sign in with google</button> 
                    </>
                )}
               
            </form>
        </div>
    );
};

export default Login;