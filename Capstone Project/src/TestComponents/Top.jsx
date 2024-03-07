import TestForm from "./TestForm"
import { useState } from "react"
export default function Top(){
    const [name, setName] = useState('')

    let handleInput = (e) => {
        setName(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
      <>
        <TestForm />

        <div>
            <p>Welcome! {name}</p>
        </div>
      </>
    )
}