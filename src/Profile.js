const { useState } = require("react");

//Incorrent way
export default function Profile() {
    const [login, setLogin] = useState(true)

    if (login) {
        return (
            <div>
                <h5>You are Login</h5>
            </div>
        )
    } else {
        return (
            <div>
                <h5>You are not Login</h5>
            </div>
        )
    }

}