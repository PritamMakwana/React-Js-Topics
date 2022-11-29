import { Component, useState } from 'react';
import './App.css';
import Profile from './Profile';
import Student from './Student';
import User from './User';

function App(){
  return(
    <div className='App'>
       <h1>Conditional rendering | If condition</h1>
      <h2>If else Ex 1 - not current way</h2>
      <Profile/>
      <h2>If else Ex 2 - current way</h2>
      <User/>
      <h2>If else..if ladder Ex 3 </h2>
      <Student/>
    </div>
  )
}

export default App;
