import React, { Component, useState } from 'react';
import './App.css';
import Profile from './Profile';
import Student from './Student';
import User from './User';

// React Life cycle three phrash :
// Loaded
// Update
// Removed

//constuctor life cycle method 

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      name : "admin"
    }
  }

  render(){
  return(
    <div className='App'>
       <h1>Name {this.state.name}</h1>
    </div>
  )
  }
}

export default App;
