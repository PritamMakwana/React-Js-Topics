import './App.css';
import React,{Component} from "react";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <User/>
      <User></User>
    </div>
  );
}


 class User extends Component{
    render(){
        return(
            <h1>only one file in use</h1>
        )
    }
}

export default App;
