import Button from "./Components/Button.jsx"
import Navigation from "./Components/Navigation.jsx"
import ProfileCard from "./Components/ProfileCard.jsx"
import Conditionals from "./Components/Conditionals.jsx"


function App() {

  return(
    <div>
      <Navigation elOne="About" elTwo="Projects" elThree='Contact' ></Navigation>
      <Button content="Subscribe"></Button>
      <ProfileCard ></ProfileCard>
      <Conditionals />
    </div>
  )
}

export default App
