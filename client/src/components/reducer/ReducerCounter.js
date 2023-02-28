import { memo, useState } from "react"

 export const RCounter = memo( function RCounter(){
    console.log("Counter Rendered");
    const[count, setCount] = useState(0);
    return(
      <div className="d-flex">
        <div><h3>{count}</h3></div>
        <button className="btn btn-info ms-4" onClick={()=> setCount(count+1)} >Arttır</button>
      </div>
    )
  });