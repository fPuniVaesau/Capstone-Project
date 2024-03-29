import styles from "./NavBarLogo.module.css"

export default function NavBarLogo({imgUrl, altDiscription}){

    return(
        <div>
            <img src={imgUrl} alt={altDiscription} />
        </div>
    )
}