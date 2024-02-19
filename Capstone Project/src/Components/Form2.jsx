import React, { useState } from 'react';

export default function Form2(){

    let [value, setValue] = useState({FirstName:'', LastName:''});

    const handleFirstName = (e) => {
        setValue({...value, FirstName: e.target.value})
    }

    const handleLastName = (e) => {
        setValue({...value, LastName: e.target.value})
    }

    return(
        <>
            <form>
                <input type="text" onChange={(e)=>{handleFirstName(e)}}/>
                <input type="text" onChange={(e)=>{handleLastName(e)}}/>
            </form>
        </>
    )
}