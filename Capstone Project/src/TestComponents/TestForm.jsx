
export default function TestForm(){
    return(
        <>
         <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" onChange={handleInput} value={name}/>
            <button>Show Name</button>
        </form>
        </>
    )
}