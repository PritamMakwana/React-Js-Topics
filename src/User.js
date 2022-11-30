import React from "react";

class User extends React.Component{

  render(){
    console.log("Props - User Render component ",this.props)
  return(
    <div>
       <h3>User Component {this.props.name}</h3>
    </div>
  )
  }
}

export default User;