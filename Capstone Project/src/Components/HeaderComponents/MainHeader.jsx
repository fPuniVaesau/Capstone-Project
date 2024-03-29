import NavBarLogo from "./NavBarLogoComp/NavBarLogo"
import NavBarList from "./NavBarList/NavBarList"
export default function MainHeader(){
    return(
        <header>
            <NavBarLogo imgUrl={'https://www.pngall.com/wp-content/uploads/15/Snorlax-PNG-Cutout.png'} altDiscription={'Snorlax Placeholder Logo'} />
            <NavBarList liOne={'About'} liTwo={'Projects'} liThree={'About'} />
        </header>
    )
}