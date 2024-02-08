import Button from "./Button"

function Header(){

    return(
        <header>
            <div>
            <nav>
                <ul>
                    <li>About Us</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <Button subscribe='subscribe'></Button>  
            <Button subscribe='Add'></Button>
            </div>

            <h1>Demo Website</h1>
        </header>
    )
}

export default Header