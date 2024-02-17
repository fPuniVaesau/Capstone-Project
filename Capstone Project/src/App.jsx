import Navigation from "./Components/Navigation"
import ProfileCard from "./Components/ProfileCard"

function App() {

  return(
    <>
      <Navigation elOne="About" elTwo='Projects' elThree="Contact Me"/>
      <ProfileCard />
    </>
  )
}

export default App
