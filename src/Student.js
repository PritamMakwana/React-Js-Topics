const { useState } = require("react");

export default function Student(props){
    return(
        <div>
          <h3>Student component</h3>  
          <button onClick={()=>props.data()}>call function</button>
        </div>
    )
}