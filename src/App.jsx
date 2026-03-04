import OnBoarding from "./Components/Onboarding/onboarding"
// import Footer from "./Components/Footer/Footer"
import SignIn from "./Components/SignIn/signIn"
import SignUp from "./Components/SignUp/signUp"
import Hero from "./Components/Hero/Hero"
// import Explore from "./Components/Explore/Explore"
import { Routes, Route } from 'react-router-dom'



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/hero" element={<Hero />} />
    </Routes>
  )
}
