import React, { Component, useState } from 'react';
import './App.css';
import Profile from './Profile';
import Student from './Student';
import User from './User';

// React Life cycle three phrash :
// Loaded
// Update
// Removed

//componentDidMount life cycle method 
//this function call only ready component 

export default class App extends React.Component{

  constructor(){
    super();
    this.state = {name : "admin"}
  } 

  componentDidMount(){
    console.log("componentDidMount")
  }

  render(){
    console.log("render")

  return(
    <div className='App'>
      <h1>componentDidMount</h1>
       <h3>name : {this.state.name}</h3>
       <button onClick={()=>this.setState({name : "User"})}>Update Name</button>
    </div>
  )
  }

}

