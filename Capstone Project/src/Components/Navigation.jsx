export default function Navigation({elOne, elTwo, elThree}){
    
    return(
        <div>
            <p>This is a navigation component</p>
            <nav>
            <ul>
                <li>{elOne}</li>
                <li>{elTwo}</li>
                <li>{elThree}</li>
            </ul>
        </nav>
        </div>
    )
}