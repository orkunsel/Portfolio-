import React, {useRef} from 'react';
import { IoMdContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import  {Projects } from '../components/Projects'
import { FaCopyright } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";






export const Footer = () => {
  return (
    

    <div className="footer">

        <div className="footer-left">
            <p className='footer-name'>Yasin Orkun Selçuk</p>
            <FaCopyright />


        </div>

        <div className="footer-right">

          <a href="https://www.linkedin.com/in/yasin-orkun-selçuk-7a7a502ba" div className='footer-linkedin' target="_blank">
            <FaLinkedinIn/>
          </a>

          <a href="https://www.instagram.com/yorkunslck/"  div className='footer-insta' target="_blank">
            <SlSocialInstagram/>
          </a>
          

          <a href="mailto:yasinoselcuk@gmail.com" div className='footer-mail' target="_blank">
            <IoIosMail />
          </a>
        </div>
    </div>

  )
}
export default Footer
