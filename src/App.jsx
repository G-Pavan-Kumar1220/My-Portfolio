
import './App.css'
import Header1 from './components/Header'
import Home from './pages/Home'
import './media.css'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

function App() {
  
  return (
    <>
        <Header1/>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      
        <Footer/>
  
    </>
  )
}

export default App
