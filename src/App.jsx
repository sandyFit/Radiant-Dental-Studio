import { Outlet } from "react-router-dom"
import Footer from "./layouts/Footer"
import Navbar from "./layouts/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"


function App() {


  return (
    <div className="h-full">
      <Navbar />      
      <Outlet />
      <Footer/>
    </div>
    
  )
}

export default App
