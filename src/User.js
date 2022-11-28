import React,{Component} from "react";

export default class User extends Component{
//State class component code 

    constructor(){
        super();
        this.state = {data : "Admin"}
    }

    Apple(){
        
    if(this.state.data==="Admin")
    this.setState({data : "User"});
    else
    this.setState({data : "Admin"});
    }

    render(){
        return(
           <div>
             <h1>State in Class Componet</h1>
            <h2>{this.state.data}</h2>
            <button onClick={()=>this.Apple()}>Update Name</button>
           </div>
        )
    }
}