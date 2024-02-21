import Navigation from "./Components/Navigation"
import ProfileCard from "./Components/ProfileCard"
import Button from "./Components/Button"
import UseStateComp from "./Components/UseStateComp"
import Form from "./Components/Form"
import Form2 from "./Components/form2"
import Hero from "./Components/Hero"
import Login from "./Components/LogInComponents/Login"
import SignUp from "./Components/LogInComponents/SignUp"
import LoginSignUp from "./Components/LogInComponents/LoginSignUp"

function App() {

  return(
    <>
      {/* <Navigation elOne="About" elTwo='Projects' elThree="Contact Me"/>
      <ProfileCard />
      <Button /> */}

      {/* <UseStateComp />
      <Form />
      <Form2 /> */}

      {/* <Hero title={"What is the Backend?"} subtitle={"Things to learn for backend development"} /> */}

      <Login />
      <SignUp />
      <br />
      <LoginSignUp />
    </>
  )
}

export default App
