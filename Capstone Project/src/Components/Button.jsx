export default function Button({content}) {
    function handleClick(){
        console.log('This is a test!')
    }
    return(
        <div>
            <p>This is a button</p>
            <button onClick={handleClick}></button>
        </div>
    );
}