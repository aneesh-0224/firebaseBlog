import React from 'react'
import { useState } from 'react'
import { addDoc } from 'firebase/firestore'

function CreatePost() {
  const [title,setTitle]=useState("")
  const [article,setArticle]=useState("")

  const inputStyle={
    marginLeft:"20px"
  }
  const labelStyle={
    fontSize:"20px"
  }

  const createPost=async()=>{

  }

  return (
    <div style={{textAlign:"center"}}>
      <h2>Create a post</h2>

      <div style={{marginTop:"100px",display:"flex",justifyContent:"center"}}>
        <form action="" style={{backgroundColor:"rgba(230,230,230,0.3)",borderRadius:"0.5em",boxShadow:"5px 5px 5px black"}}>
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
          <button onClick={createPost} style={{marginBottom:"15px",
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
