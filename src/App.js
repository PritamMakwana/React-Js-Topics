import React, { Component, useState } from 'react';
import './App.css';
import Profile from './Profile';
import Student from './Student';
import User from './User';

// React Life cycle three phrash :
// Loaded
// Update
// Removed

//componentDidUpdate life cycle method 
//this function run after state or props update 

export default class App extends React.Component{

  constructor(){
    super();
    console.log("constructor")
    this.state = {count : 0}
  } 
  

  componentDidUpdate(preProps,preState,snapshort){
    console.log("componentDidUpdate",preState.count,this.state.count)
//ex-1
    if(preState.count === this.state.count){
      alert("data is already same")
    }

//ex 2 error this sol using condition
// this.setState({count : this.state.count + 1})

  }
  componentDidMount(){
    console.log("componentDidMount")
  }

 
  render(){
    console.log("render")

  return(
    <div className='App'>
      <h1>componentDidUpdate</h1>
       <h3>count : {this.state.count}</h3>
       <button onClick={()=>this.setState({count : this.state.count + 1})}>Update Name</button>
     {/* ex- 1 */}
       {/* <button onClick={()=>this.setState({count : 1})}>Update Name</button> */}

    </div>
  )
  }

}

