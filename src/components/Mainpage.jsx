import React from 'react'
import Typewriter from 'typewriter-effect';
import  orkun  from "../img/orkun.jpeg";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const Mainpage = () => {

  

  return (
    
    
    

    <div className="mainpage">


      <img className='orkun-image' src= { orkun } alt="orkun-image" />


      
      <div className='portrait-section'>
        
        <div className="typewriter-intro">

        <Typewriter className="type-writer"
          onInit={(typewriter) => {``
            typewriter.typeString("Hi I'm")
              .callFunction(() => {
                console.log('String typed out!');
              })
              .start();
          }}
          options={{
            cursor: "",
            blink: false,
            delay: 200
          }}
        />
        </div>

        <div className="typewriter-name">

        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Orkun Selçuk")
              .callFunction(() => {
                console.log('String typed out!');
              })
              .start();
          }}
          options={{
            delay: 300
          }}

        />
        </div>

        <div className='about-section'>
          <p className=''>Third year computer science major at Dalhousie University in Halifax, NS.</p>
        </div>

      </div>
    
      <div className='contact-info'>

          <a href="https://www.instagram.com/yorkunslck/" className="insta-box" target="_blank">
                                <SlSocialInstagram className='insta-icon'/>
          </a>

          <a href="https://www.linkedin.com/in/yasin-orkun-selçuk-7a7a502ba" className="linkedin-box" target="_blank">
              <FaLinkedinIn className='linkedin-icon'/>
          </a>

          <a href="mailto:yasinoselcuk@gmail.com" className='mail-box' target="_blank">
            <IoIosMail className='mail-icon' />
          </a>
      </div>

    </div>
  )

}
