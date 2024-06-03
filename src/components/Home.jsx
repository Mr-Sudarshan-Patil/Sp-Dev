import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ReactTyped } from "react-typed";


function Home({homeRef}) {
  return (
    <>
    <div ref={homeRef} style={{ paddingTop: '50px' }} className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 flex flex-row-reverse'>
      <div className='flex flex-col md:flex-row justify-center items-center'>
         <div className='md:w-1/2 mt-10 md:mt-0 space-y-2 '>
            <span className='text-xl font-medium'>Welcome In My Feed</span>
           <div className='flex space-x-1 text-2xl md:text-4xl flex-wrap'>
            <h1 >Hello, I'm a</h1>
            <ReactTyped className='text-pink-500 font-semibold '
            strings={[
                    "Web Developer",
                    "Survey Programmer",
                    "Front-End Developer",
                    ]}
            typeSpeed={50}
            backSpeed={50}
            // attr="placeholder"
            loop={true}
            >
            <input type="text" />
            </ReactTyped>
    
            </div> 
            <br/>
            <p className='text-1xl md:text-md text-justify '>Greetings! I'm Sudarshan Patil, an accomplished frontend developer based in India. With a meticulous eye for design and expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind, React, NodeJs, ExpressJS and SQL, I specialize in crafting seamless and engaging user interfaces. Currently, I'm actively pursuing new frontend opportunities to apply my skills and contribute to innovative projects.

</p>
            <br />
            {/* Social media icons */}
            <div className='space-y-2'>
                <h1 className='text-1xl font-medium '>Available on</h1>
                <div className='flex space-x-3 text-2xl'>
                  <ul className='flex space-x-3 text-2xl'>
                    <li>
                      <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/sudarshan-patil-b9501a196/" target='_blank'>
                      <FaLinkedin className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                      </a>
                    </li>
                    <li>
                     <a href="https://github.com/Mr-Sudarshan-Patil" target='_blank'>
                      <FaGithub className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                      </a>
                    </li>
                    <li>
                     <a href="https://www.instagram.com/__sudarshan.patil__/" target='_blank'>
                      <FaInstagram className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/MrSudarshan?mx=2" target='_blank'>
                      <FaXTwitter className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                      </a>
                    </li>
                  </ul>
                
      
                </div>
            </div>
         </div>
         <div className='md:w-1/2 md:pl-48 mt-12 md:mt-8'>
              <img src="./main.jpg" alt="main image" className='rounded-full md:w-[370px] md:h-[auto] mt:25 w-[250px] h-[auto]' />
         </div>
      </div>
    </div>
    <hr/>
    </>
  
  )
}

export default Home