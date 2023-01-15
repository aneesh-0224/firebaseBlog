import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { addDoc,collection } from 'firebase/firestore'
import { db,auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import {authContext} from '../App'

function CreatePost() {
  const [title,setTitle]=useState("")
  const [article,setArticle]=useState("")
  const navigate=useNavigate()
  const {isAuth}=useContext(authContext)

  const inputStyle={
    marginLeft:"20px"
  }
  const labelStyle={
    fontSize:"20px"
  }

  const postCollectionRef=collection(db,'posts')
  const createPost=async(e)=>{
    e.preventDefault()
    console.log(auth.currentUser.displayName,auth.currentUser.uid)
    addDoc(postCollectionRef,{title,article,
      author:{name:auth.currentUser.displayName ,id:auth.currentUser.uid}})
      .then((res)=>{
        navigate('/')
      })
      .catch((err)=>{
        console.log(err)
      })

  }

  useEffect(()=>{

    if(!isAuth){
      navigate('/login')
    }
    
  },[])


  return (
    <div style={{textAlign:"center"}}>
      <h2>Create a post</h2>

      <div style={{marginTop:"100px",display:"flex",justifyContent:"center"}}>
        <form onSubmit={createPost}  action="" style={{backgroundColor:"rgba(230,230,230,0.3)",borderRadius:"0.5em",boxShadow:"5px 5px 5px black"}}>
          <div style={{margin:"40px"}}>
            <label htmlFor="title" style={labelStyle} >Title</label>
            <input type="text" id="title" placeholder="title..." style={inputStyle} name="title" value={title}
            onChange={(e)=> setTitle(e.target.value)} />
          </div>
          <div style={{margin:"40px"}}>
            <label htmlFor="artcile" style={labelStyle} >Article</label>
            <textarea type="" id="article" placeholder="article..." style={inputStyle} name="article" value={article}
            onChange={(e)=> setArticle(e.target.value)} />
          </div>
          <button style={{marginBottom:"15px",
          backgroundColor:"green",
          color:"white",
          fontSize:"20px",
          borderRadius:"0.5em",
          padding:"5px 15px 5px 15px"
        }}>
          Submit
        </button>
        </form>
      </div>


    </div>
  )
}

export default CreatePost
