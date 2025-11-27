import React, { useState } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Mainpage() {
    const [home,sethome] = useState(true);
    const [about,setabout] = useState(false);
    const [projects,setprojects] = useState(false);
    const [skills,setskills] = useState(false);
    const  handelhomePage=()=>{
        sethome(true)
        setabout(false)
        setprojects(false)
        setskills(false)
    }
    const  handelaboutPage=()=>{
        sethome(false)
        setabout(true)
        setprojects(false)
        setskills(false)
    }
    const  handelskillsPage=()=>{
        sethome(false)
        setabout(false)
        setprojects(false)
        setskills(true)
    }
    const  handelprojectsPage=()=>{
        sethome(false)
        setabout(false)
        setprojects(true)
        setskills(false)
    }
    
  return (
    <>
    <Header handelhomePage={handelhomePage} handelaboutPage={handelaboutPage} handelskillsPage={handelskillsPage}  handelprojectsPage={handelprojectsPage}/>
    {home && <Home/>}
    {about && <About/>}
    {projects && <Projects/>}
    {skills && <Skills/>}
    <Footer/>
    </>
  )
}

export default Mainpage