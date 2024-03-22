import React, { useRef } from 'react';
import { IoMdContact } from "react-icons/io";
import  coffeeology  from "../img/coffeeology.jpeg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import coffeeologyvid from "../img/coffeeologyvid.mp4";
import  { Navbar } from '../components/Navbar'






export const Projects = React.forwardRef((props,ref) => {
    
   
    const newLocal = 'cafe-description';
  return (
    <>
    

    
        <div ref={ref} className='project-section'>


            

            
            <h1>Projects</h1>
            <div className='projects'>
    
                <div className='cafe'>

                    <div className='name-description'>

                        <div className='name-and-react'>
                            <p className='cafe-name'>Cafe Website</p>
                            <p className='react-icon'>React.js</p>
                        </div>

                        <hr className='horizontal-line-2'></hr>

                        <div className='cafe-description'>
                            <p>Website for award-winning Cafe located in Halifax, Nova Scotia. Coffeeology Espresso Co.</p>
                        
                            <div className='cafe-icons'>                            
                                <a href="https://coffeeologyespresso.co/" className="external-icon">
                                    <FaExternalLinkAlt className='external-icon'/>
                                </a>

                                <a href="https://github.com/orkunsel?tab=repositories" className="github-icon">
                                    <FaGithub className='github-icon'/>
                                </a>
                            </div>

                            <div className='date'>
                                <p>December 23'</p>
                            </div>
                            
                        </div>
                    </div> 

                
                
                    <div>
                        <video className='cafe-image' autoPlay loop muted playsInline>
                            <source className='cafe-image' src= {coffeeologyvid} type="video/mp4" />
                        </video>
                    </div>
                    
                </div>

                <div className='earthquake'>

                    <div className='name-description'>

                        <div className='name-and-react'>
                            <p className='proj-name'>Turkey Earthquake Map</p>
                            <p className='react-icon'>React.js</p>
                        </div>

                        <hr className='horizontal-line-2'></hr>

                        <div className='proj-description'>
                            <p>Website highlighting natural disaster activity in Turkey.</p>
                        
                            <div className='proj-icons'>                            
                                

                                
                            </div>

                            <div className='date'>
                                <p>March 24'</p>
                            </div>
                            
                        </div>
                    </div> 
                </div>
                   
               

            </div>




        </div>

    </>
    
  )
});
