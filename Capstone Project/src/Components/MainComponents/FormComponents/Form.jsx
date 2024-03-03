import React, { useState } from 'react';

export default function Form(){
    let [name, setName] = useState('');
    
    return(
        <div>
            <form action="">
                <h2>Grandpas 100th Birthday</h2>
                <label htmlFor="">Guest Name: </label>
                <input type="text" />
                <button>Add</button>
            </form>
            <div>
                {}
            </div>
        </div>
    )
}