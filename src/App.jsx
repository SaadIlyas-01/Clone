import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Project from './Pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />

      </Routes>
    </BrowserRouter>



  )
}

export default App
