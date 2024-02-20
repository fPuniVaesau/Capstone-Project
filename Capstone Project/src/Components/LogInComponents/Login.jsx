import { useState } from "react"


export default function Login(){
    let [credentials, setCredentials] = useState({UserName:"", PassWord:""});

    let setUserName = (e) => {
        setCredentials({...credentials, UserName:e.target.value})
    }

    let setPass

    return(
        <>
            <h3>Login</h3>
            <form>
                <label htmlFor="">Username</label>
                <input type="text" onChange={(e)=>{setUserName(e)}}/>
                <br></br>
                <label htmlFor="">Password</label>
                <input type="text" />
            </form>
        </>
    )
}