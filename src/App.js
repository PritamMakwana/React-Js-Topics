import { Component, useState } from 'react';
import './App.css';
import Student from './Student';
import User from './User';

//Props with Class component 

class App extends Component {

  constructor() {
    super();
    this.state = { name: "Admin" }
  }

  render() {
    return (
      <div className="App">
        <h1>Props with Class</h1>
        <h1 >EX - 1</h1>
        <User name="gopal" email="gopal@gmail.com" />
        <User name="pritam" email="pritam@gmail.com" />
        <h1 >EX - 2</h1>
        <Student name={this.state.name} />
        <button onClick={() => { this.setState({name :"User"}) }}>Update Name</button>
      </div>
    );
  }
}


export default App;
