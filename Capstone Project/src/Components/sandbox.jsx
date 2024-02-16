export default function Sandbox(){
    
    let handleClick = () => {
        console.log('This is a test!');
    }
    
    return(
        <>
            <button onClick={handleClick}> CLick me</button>
        </>
    )
}