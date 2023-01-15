import React from 'react'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { authContext } from '../App'
import { signOut } from 'firebase/auth'
import {auth} from '../firebase-config'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const {isAuth,setIsAuth}=useContext(authContext)
  const navigate=useNavigate()

  const logout=()=>{
    signOut(auth)
    .then((res)=>{
      localStorage.setItem('isAuth',false)
      setIsAuth(false)
      navigate('/')
    })
  }

  const link_style={
    textDecoration:"none",
    marginLeft:"20px",
    marginRight:"20px",
    fontSize:"25px",
    color:"white"
  }

  return (
    <div style={{backgroundColor:"rgb(80,40,80)"}}>
      <ul style={{listStyle:"none",display:"flex",justifyContent:"center",margin:"0px",padding:"10px"}}>
        <Link to='/' style={link_style}>Home</Link>
        {!isAuth&&<Link to='/login' style={link_style}>Login</Link>}
        {isAuth&&
        (<><Link to='/createPost' style={link_style}>Create Post</Link>
        <div style={link_style} onClick={logout}>Logout</div></>)}
      </ul>
    </div>
  )
}

export default Navbar
