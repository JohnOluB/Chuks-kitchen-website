import OnBoarding from "./Components/Onboarding/onboarding"
// import Footer from "./Components/Footer/Footer"
import SignIn from "./Components/SignIn/signIn"
// import SignUp from "./Components/Sign Up/signUp"
// import Hero from "./Components/Hero/Hero"
// import Explore from "./Components/Explore/Explore"
import { Routes, Route } from 'react-router-dom'
// import SignIn from "./Components/Sign In/signIn.jsx"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/SignIn/signIn" element={<SignIn />} />
    </Routes>
  )
}
