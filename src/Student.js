import React from "react";

class Student extends React.Component{

  constructor(){
    super();
    this.state = {
      email : "admin@gmail.com"
    }
  }

  render(){
    console.log("State -Render Call ",this.state.email)
  return(
    <div>
       <h3>Student Email : {this.state.email}</h3>
       <button onClick={()=>this.setState({email : "User@gmail.com"})}>update email</button>
    </div>
  )
  }
}

export default Student;