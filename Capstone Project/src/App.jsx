import Navigation from "./Components/Navigation"
import ProfileCard from "./Components/ProfileCard"
import Button from "./Components/Button"

function App() {

  return(
    <>
      <Navigation elOne="About" elTwo='Projects' elThree="Contact Me"/>
      <ProfileCard />
      <Button />
    </>
  )
}

export default App
