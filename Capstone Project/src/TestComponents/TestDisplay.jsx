import styles from "./TestDisplay.module.css"
export default function TestDisplay({guestList}){
    return(
        <div>
            {guestList.map(person=>(<p>{person}</p>))}
        </div>
    )
}