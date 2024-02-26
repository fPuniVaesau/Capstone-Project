
export default function Time(){
    let date = new Date();
    let showTime = date.getHours()%12 + " | " + date.getMinutes() + " | " + date.getSeconds();

    return(
        <>
            <h3>testing the time</h3>
            <p>{showTime}</p>
        </>
    )
}

