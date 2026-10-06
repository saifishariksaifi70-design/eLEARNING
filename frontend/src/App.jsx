import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Course from './pages/Course'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
