import React, { useState} from 'react';

export default function Button() {
   let [number, setNumber] = useState(0)

    return(
        <div>
            <p>Choose a color!</p>
            <button onClick={()=>setNumber(number)}>Set Number</button>
            <p>Your favoiite # is: {number}</p>
        </div>
    );
}