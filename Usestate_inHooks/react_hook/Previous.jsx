import React,{useState} from "react";

export default function Previous(){
    const sample = 0;
    const[count,setcount] = useState(sample)
    
     const Increment = () =>{
        setcount(preCount => preCount + 1)
    }

     const Decrement =()=>{
        setcount(preCount => preCount -1)
    }
    const Reset = () =>{
        setcount(sample)
    }
    return(
        <>
        count is :{count}
        <button onClick={Reset}>Reset</button>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        </>
    )
} 