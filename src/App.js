import { useState } from 'react';
import './App.css';
import User from './User';

//State function component code

function App() {

  const [data,setData] = useState("Admin");

  function updateData(){
    if(data==="Admin")
    setData("User");
    else
    setData("Admin");
  }

  return (
    <div className="App">
    <h1>State in Function Componet</h1>
      <h2>{data}</h2>
      <button onClick={updateData}>Update Data</button>
     
      <User/>

    </div>
  );
}


export default App;
