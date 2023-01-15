import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider}  from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB7vNVVyL86iKjjvz8BOVWYkTX5Z_ZTT3c",
    authDomain: "blog-tut-f904d.firebaseapp.com",
    projectId: "blog-tut-f904d",
    storageBucket: "blog-tut-f904d.appspot.com",
    messagingSenderId: "673093390761",
    appId: "1:673093390761:web:3699ab5f31e6e9813074b8"
  };

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db=getFirestore(app)
export const provider=new GoogleAuthProvider()
