import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Counter = () => {
    const [count,setCount]=useState(0);

  return (
    <div>
        <center>
            <h1>Counter Application</h1>
        </center>
        <div style={{display:"flex",justifyContent:"center",gap:"20px",margin:"20px"}}>
            <button className="btn btn-danger" onClick={()=>{setCount(count-1)}}>
                DEC
            </button>

            <h1 style={{color:`${count<0 ? count==0 ? "black":"red":"green"}`}}>{count}</h1>

            <button className="btn btn-primary" onClick={()=>{setCount(count+1)}}>
                INC
            </button>
        </div>
    </div>
  )
}
