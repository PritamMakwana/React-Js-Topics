import { Component, useState } from 'react';
import './App.css';
import Profile from './Profile';
import Student from './Student';
import User from './User';

function App(){

  function getData(){
    alert("Hello from app");
  }  
  return(
    <div className='App'>
       <h1>Pass function as props</h1>
      <User data={getData}/>
      <Student data={getData}/>
      <Profile data={getData}/>
    </div>
  )
}

export default App;
