import { useState } from "react"

export default function SignUp(){
    let[credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        
        userName: '',
        password: '',
    })

    return(
        <>
            <h3>Sign Up</h3>
            <form action="">
                <label htmlFor="">First Name</label>
                <input type="text" />
            </form>
        </>
    )
}