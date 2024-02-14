export default function Button({content}) {
    function handleClick(){
        alert("This should pop up if the code is correct");
    }
    return(
        <div>
            <p>This is a button</p>
            <button onClick={handleClick}>Click Here to run test!</button>
        </div>
    );
}