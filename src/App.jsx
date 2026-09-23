import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Project from './Pages/Projects'
import About from './Pages/About'
import Capabilities from './Pages/Capabilities'
import Writing from './Pages/Writing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/capabilities' element={<Capabilities />} />
        <Route path='/writing' element={<Writing />} />
      </Routes>
    </BrowserRouter>



  )
}

export default App
