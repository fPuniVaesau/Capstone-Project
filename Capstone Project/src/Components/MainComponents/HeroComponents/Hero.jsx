
export default function Hero({title, imgUrl}){

    return(
        <div>
            <h1>{title}</h1>
            <img src={imgUrl} alt="Hero Image" />
        </div>
    )
}