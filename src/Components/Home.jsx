import React, { useState, useEffect } from 'react'
import {getDocs, collection, doc,deleteDoc,} from 'firebase/firestore'
import {db} from '../firebase-config'
function Home() {

  const [posts,setPosts]=useState([])
  const collectionReference=collection(db,'posts')

  useEffect(()=>{
    getDocs(collectionReference)
    .then((res)=>{
      setPosts(res.docs.map((doc_)=>{
        return {...doc_.data(),id:doc_.id}
      }))
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const deletePost=async(id)=>{
    const postsDoc=doc(db,"posts",id)
    await deleteDoc(postsDoc)
  }

  return (
    <div style={{textAlign:"center"}}>
        {posts.map((post)=>{
          return(
          <div key={post.id} style={{backgroundColor:"rgba(230,230,230,0.3)",borderRadius:"0.5em",boxShadow:"5px 5px 5px black"}}>
          <h3>{post.title}</h3>
          <p>{post.article}</p>
          <span>Article by {post.author.name}</span>
          <div>
          <button onClick={()=>{deletePost(post.id)}}>Delete</button>
          </div>
          </div>
        )})}
    </div>
  )
}

export default Home
