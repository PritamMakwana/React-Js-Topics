import { Component, useState } from 'react';
import './App.css';
import Student from './Student';
import User from './User';

function App(){
 const [data,setData] = useState(null);
 const [print,setPrint] = useState(false);

 function getData(val){
  setData(val.target.value);
 }


  return(
    <div className='App'>
      {
        print?<h1>{data}</h1>:null
      }
      <input type='text' onChange={getData} />
    
     
      <button onClick={()=>setPrint(true)} >PrintData</button>


    </div>
  )
}

export default App;
