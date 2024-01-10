import Footer from "./layouts/Footer"
import Navbar from "./layouts/Navbar"
import Home from "./pages/home/Home"


function App() {


  return (
    <div className="h-full">
      <Navbar />      
      <Home />
      <Footer/>
    </div>
  )
}

export default App
