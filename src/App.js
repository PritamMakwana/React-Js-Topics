import { Component, useState } from 'react';
import './App.css';
import Student from './Student';
import User from './User';

function App(){
 const [name,setName] = useState("");
 const [tnc,setTnc] = useState(false);
 const [interest,setInterest] = useState("");

 function getFormData(e){
  e.preventDefault();
  console.log(name,tnc,interest);
 }

  return(
    <div className='App'>
      <h1>Handle form in react</h1>
      <form onSubmit={getFormData}>
      <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
      <br/>
      <select onChange={(e)=>setInterest(e.target.value)} >
        <option>Marvel</option>
        <option>DC</option>
      </select>
      <br/>
      <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} />
      <span>Accept Terms</span>
      <br/>
      <button type="submit">submit</button>
      </form>


    </div>
  )
}

export default App;
