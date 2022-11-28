import React from "react"
export default class User extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: "skyblue" }}>
                <h3>User Info</h3>
                <h6>Hello : {this.props.name}</h6>
                <h6>Email : {this.props.email}</h6>
            </div>
        )
    }
}