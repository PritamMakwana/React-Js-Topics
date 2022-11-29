import { Component, useState } from 'react';
import './App.css';
import Student from './Student';
import User from './User';

function App(){
 const [print,setPrint] = useState(false);

  return(
    <div className='App'>
      {
        print?<h1>Hello</h1>:null
      }

      <button onClick={()=>setPrint(true)}>Show</button>

      <button onClick={()=>setPrint(false)}>hide</button>

      <button onClick={()=>setPrint(!print)}>Toggle </button>


    </div>
  )
}

export default App;
