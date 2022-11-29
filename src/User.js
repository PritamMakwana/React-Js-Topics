const { useState } = require("react");

//corrent way
export default function User(){
    const [login,setLogin] = useState(false)

    return(
        <div>
          {login? <h5>You are Login</h5> :  <h5>You are not Login</h5>} 
        </div>
    )
}