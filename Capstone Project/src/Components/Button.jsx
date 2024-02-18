import React, { useState} from 'react';

export default function Button() {
   
    return(
        <div>
            <p>This is a button</p>
            <button onClick={handleClick}>Click Here to run test!</button>
        </div>
    );
}