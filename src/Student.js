const { useState } = require("react");

//corrent way
export default function User(){
    const [login,setLogin] = useState(3)
//1,2,3
    return(
        <div>
          {
          login==1? 
          <h5>User 1</h5> 
          :login==2?
          <h5>User 2</h5>
          :login==3?
          <h5>User 3</h5>
          :<h5>Not User</h5>
        } 
        </div>
    )
}