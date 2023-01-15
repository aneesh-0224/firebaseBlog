import {Routes,Route} from 'react-router-dom'
import Home from "./Components/Home";
import Login from './Components/Login';
import CreatePost from './Components/CreatePost';
import React from 'react';
import Navbar from './Components/Navbar';
import { useState } from 'react';
const authContext=React.createContext()
function App() {
  let isAuthLocal=localStorage.getItem('isAuth')
  console.log(isAuthLocal)
  if(!isAuthLocal||isAuthLocal=='false'){
    isAuthLocal=false
  }
  const [isAuth,setIsAuth]=useState(isAuthLocal)

  return (
    <authContext.Provider value={{isAuth,setIsAuth}}>
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/createPost" element={ <CreatePost/> } />
      </Routes>
    </div>
    </authContext.Provider>
  );
}

export {App,authContext}