import React, { useState } from 'react';

export default function Form(){
    let [name, setName] = useState('');
    let [guestList, setGuestList] = useState([]);

    let listenForChange = (e) =>{
        setName(e.target.value);
    }
    let handleSubmit = (e) =>{
        e.preventDefault();
        setGuestList([...guestList, name]);
        setName('');
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h2>Grandpas 100th Birthday</h2>
                <label htmlFor="">Guest Name: </label>
                <input type="text" value={name} onChange={listenForChange} />
                <button>Add</button>
            </form>
            <div>
                {guestList.map(item => (<h3 key={item}>{item}</h3>))}
            </div>
        </div>
    )
}