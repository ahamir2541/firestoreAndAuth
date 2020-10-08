import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBSCfsj9SIt68Fma37Xds95uO-rjDMWibM",
  authDomain: "burger-app-bb453.firebaseapp.com",
  databaseURL: "https://burger-app-bb453.firebaseio.com",
  projectId: "burger-app-bb453",
  storageBucket: "burger-app-bb453.appspot.com",
  messagingSenderId: "648899680418",
  appId: "1:648899680418:web:c0f850853522044d6b5ffb",
  measurementId: "G-0KR93CXKPJ"
};

// cloude firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // user informations
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const { displayName, email, password } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        password,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log('error message user', error.message)
    }

  }

  return userRef

}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export default firebase
