import React, { useState } from "react";

export default function Sandbox(){
    
    let toggle = () => {
        const [currentState, setCurrentState] = useState();

        
    }
    
    return(
        <>
            <button onClick={()=>setCurrentState('On')}>On</button>
            <button onClick={()=>setCurrentState('off')}>Off</button>
        </>
    )
}