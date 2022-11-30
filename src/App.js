import React, { Component, useState } from 'react';
import './App.css';
import Profile from './Profile';
import Student from './Student';
import User from './User';

// React Life cycle three phrash :
// Loaded
// Update
// Removed

//render life cycle method 

function App(){

  const [name,setName] = React.useState("Admin")


  return(
    <div className='App'>
       <h1>Component ready - EX 1</h1>
       <Profile />
       <h1>Component of Props update - EX 2</h1>
       <User name = {name} />
       <button onClick={()=>setName("User")}>Update Name</button>
       <h1>Component of State update - EX 3</h1>
       <Student />
    </div>
  )

}

export default App;
