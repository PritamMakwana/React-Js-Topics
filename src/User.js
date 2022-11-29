const { useState } = require("react");

export default function User(props){
    return(
        <div>
          <h3>User component</h3>  
          {/* <button onClick={()=>props.data()}>call function</button> */}
          <button onClick={()=>props.data()}>call function</button>
        </div>
    )
}