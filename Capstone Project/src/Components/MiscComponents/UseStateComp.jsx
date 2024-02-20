import React, { useState } from 'react';

export default function UseStateComp() {
    let [value, setValue] = useState(0);



    return (
        <>
        <h1>This is an example using useState</h1>
        <button onClick={()=>{setValue(value+1)}}>Add+</button>
        <button onClick={()=>{setValue(value-1)}}>SubTract-</button>
        <button onClick={()=>{setValue(0)}}>Reset</button>
        <h3>The Current Count is: {value}</h3>
        </>
    );
}

