import React, { useState } from 'react';

export default function Form2(){

    let [value, setValue] = useState({FirstName:'', LastName:''});

    const handleFirstName = (e) => {
        setValue({FirstName:e.target.value})
    }

    return(
        <>
            <form>
                <input type="text" onChange={(e)=>{handleFirstName(e)}}/>
            </form>
        </>
    )
}