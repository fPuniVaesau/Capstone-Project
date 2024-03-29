import styles from "./NavBarList.module.css"
export default function NavBarList({liOne, liTwo, liThree}){

    return(
        <nav>
          <ul>
            <li>{liOne}</li>
            <li>{liTwo}</li>
            <li>{liThree}</li>
          </ul>
        </nav>
    )
}