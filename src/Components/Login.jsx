import React from 'react'
import {auth,provider} from '../firebase-config.js'
import {signInWithPopup} from 'firebase/auth'
import { useContext } from 'react'
import { authContext } from '../App.js'
import { useNavigate } from "react-router-dom";
function Login() {

  const {isAuth,setIsAuth}=useContext(authContext)
  const navigate=useNavigate()

  const signInWithGoogle=()=>{
    signInWithPopup(auth,provider)
    .then((response)=>{
      localStorage.setItem('isAuth',true)
      setIsAuth(true)
      navigate('/')
    })
    .catch((error)=>{

    })
  }

  return (
    <div style={{textAlign:"center"}}>

    <h2>{isAuth&&"You are already signed in"}</h2>
    
    {!isAuth&&<div>
        <h2>SignIn with Google</h2>
        <button onClick={()=>{signInWithGoogle()}} style={{backgroundColor:"green",
        color:"white",
        fontSize:"20px",
        borderRadius:"0.5em",
        padding:"10px 30px 10px 30px"}}>
          Google
        </button>
      </div>}
    </div>
  )
}

export default Login
