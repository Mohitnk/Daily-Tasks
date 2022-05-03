import React, { useState } from 'react'
import "./Count.css"

const Count = () => {
    const[num , setNum] = useState(0);

    const incrmNum = () => {
        setNum(num+1);
    }
    const decrmNum = () => {
        if(num > 0){
            setNum(num-1);
        } else{
            alert("so sorry")
            (num=0);
            
        }
       
        
    }
  return (
    <div class="main-he">
     
        <div class="center-div">
        <h1>Counter App</h1>
            <h1>{num}</h1>
            <div class="btn-div">
                <button onClick={incrmNum}>increment</button> 
                <button onClick={decrmNum}>decrement</button>
            </div>
        </div>
    </div>
  )
}

export default Count