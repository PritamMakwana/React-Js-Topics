const { useState } = require("react");

export default function Profile(props){
    return(
        <div>
          <h3>Profile component</h3>  
          <button onClick={()=>props.data()}>call function</button>
        </div>
    )
}