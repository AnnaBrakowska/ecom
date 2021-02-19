import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBy0q0WHXzLbG1a6eKSvWlAF7E0LAA-TkI",
  authDomain: "ecom-db-19398.firebaseapp.com",
  projectId: "ecom-db-19398",
  storageBucket: "ecom-db-19398.appspot.com",
  messagingSenderId: "1083209490140",
  appId: "1:1083209490140:web:bfc8b211d9bce744631e19",
  measurementId: "G-CHY0S0HMB5"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase