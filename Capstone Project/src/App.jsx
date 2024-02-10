import Button from "./Components/Button.jsx"
import Navigation from "./Components/Navigation.jsx"
import Profiles from "./Components/Profiles.jsx"
import ProfileCard from "./Components/ProfileCard.jsx"

function App() {

  return(
    <div>
      <Navigation elOne="About" elTwo="Projects" elThree='Contact' ></Navigation>
      <Button content="Subscribe"></Button>
      {/* <Profiles></Profiles> */}
      <ProfileCard ></ProfileCard>
    </div>
  )
}

export default App
