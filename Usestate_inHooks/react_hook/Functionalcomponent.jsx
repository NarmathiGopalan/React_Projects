import React,{useState} from "react";

export default function Functionalcomponent(){

    const[count,setCount] = useState(0)

 

    return(
       <>
       total functional count is:{count}<br></br>
       <button onClick={()=>setCount(count + 1)}>Click me!</button>
       </>
    )
    
}