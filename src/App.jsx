import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Navbar } from './components/Navbar'
import { Mainpage } from './components/Mainpage'
import  {Projects } from './components/Projects'
import {Footer} from './components/Footer'
import Particles from './components/Particles'




function App() {
  const [count, setCount] = useState(0)

  const projectsRef = useRef(null);

    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    };


  return (
    <div>

    
     <div className="home">
        <Navbar scrollToProjects={scrollToProjects} />
        <Mainpage/>
        <Projects ref={projectsRef} />
        <Footer/>
        <Particles className="tsparticles"/>
     </div>
     

     
    
    </div>
  )
}

export default App
