import React, {useRef} from 'react';
import { IoMdContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import  {Projects } from '../components/Projects'
import orkunlogo from "../img/orkunlogo.png"





export const Navbar = ({ scrollToProjects }) => {
  return (
    

    <div className="navbar">

        <div className="navbar-left">

            <img className='orkun-logo' src= { orkunlogo } alt="orkun-logo" />
        </div>

        <div className="navbar-right">
            <span>About</span>
            <span className='icon' onClick={scrollToProjects}> Projects <GrProjects className='projects-icon' /> </span>
            <span className='icon'>Contact <IoMdContact className='contact-icon'/></span>
            
        </div>
    </div>

  );
};
export default Navbar
