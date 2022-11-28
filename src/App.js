import { useState } from 'react';
import './App.css';
import Student from './Student';
import User from './User';

//Props with function component 

function App() {

  const [name,setName] = useState("Admin");

  return (
    <div className="App">
    <h1>Props with function</h1>
    <h1 >EX - 1</h1>
    <User name ="gopal" email ="gopal@gmail.com" other = {{address : "delhi",mob :"000"}} />
    <User name ="pritam" email ="pritam@gmail.com" other = {{address : "noida",mob :"101"}} />
    <h1 >EX - 2</h1>
    <Student name = {name} />
    <button onClick={()=> {setName("User")}}>Update Name</button>
    </div>
  );
}


export default App;
