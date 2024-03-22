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
    const [showParticles, setShowParticles] = useState(true);

   


  return (
    <div className="home">
        <Navbar scrollToProjects={scrollToProjects} />
        <Particles className="tsparticles" />
        <Mainpage setShowParticles={setShowParticles} />
        <Projects ref={projectsRef} />
        
      
        <Footer />
    </div>
  );
}

export default App
