import { Component } from "react"


export default class Student extends Component{
   
    render(){
        console.log(this.props)
    return (
        <div>
            <h1>Hello {this.props.name} </h1>
        </div>
    )
}
}