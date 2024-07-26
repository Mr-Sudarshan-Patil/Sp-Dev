import React, { useEffect, useRef } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Home({homeRef}) {

let text1 = useRef([]);
let text2 = useRef([]);
let text3 = useRef([]);
let text4 = useRef([]);
let imageRef = useRef([]);
let SocialRef = useRef([]);

useGSAP(() => {
  let tl = gsap.timeline();
  tl.from(text1.current, {
    y: 50,
    opacity: 0,
    duration: 1,
  })
   .from(text2.current, {
    y: 50,
    opacity: 0,
    duration: 1,
  })
   .from(text3.current, {
    y: 50,
    opacity: 0,
    duration: 1,
  })
   .from(imageRef.current, {
    x: 50,
    opacity: 0,
    duration: 1,
  })
   .from(text4.current, {
    y: 50,
    opacity: 0,
    duration: 1,
  })

  
const socialIcon = SocialRef.current.children;

  tl.fromTo(
    socialIcon,
    { opacity: 0, y: 50},
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.5,
    }
  );

}, []);

let circle = useRef(null);

useEffect(()=>{

  gsap.to(circle.current,
    { x: 0, y: 0, rotate: 360,
      repeat: -1,
      duration: 7,
      ease: "linear",
      transformOrigin: "center center"
     }
    );

}, []);



  return (
    <>
    <div ref={homeRef} style={{ paddingTop: '50px' , position: " relative"}} className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 flex flex-row-reverse'>
      <div className='z-13' >
        <img ref={circle} src="./reactLogo.svg" alt="Logo react0" style={{opacity: 0.2}} className='absolute top-[5%] left-[-14%] md:w-[370px] md:h-[auto] mt:25 w-[250px] h-[auto]'/>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center'>
         <div className='md:w-1/2 mt-10 md:mt-0 space-y-2 '>
          <div ref={text1} className='text-xl font-medium'>Welcome In My Feed</div>
           <div ref={text2} className='flex space-x-1 text-2xl md:text-4xl flex-wrap'>
            <h1 >Hello, I'm a</h1>
            <ReactTyped className='text-pink-500 font-semibold bg-transparent'
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
            <input type="text" className='bg-transparent'/>
            </ReactTyped>
    
            </div> 
            <br/>
            <p ref={text3} className='text-1xl md:text-md text-justify '>Greetings! I'm Sudarshan Patil, an accomplished frontend developer based in India. With a meticulous eye for design and expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind, React, NodeJs, ExpressJS and SQL, I specialize in crafting seamless and engaging user interfaces. Currently, I'm actively pursuing new frontend opportunities to apply my skills and contribute to innovative projects.

</p>
            <br />
            {/* Social media icons */}
            <div className='space-y-2'>
                <h1 ref={text4} className='text-1xl font-medium '>Available on</h1>
                <div className='flex space-x-3 text-2xl'>
                  <ul ref={SocialRef} className='flex space-x-3 text-2xl'>
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
         <div ref={imageRef} className='md:w-1/2 md:pl-48 mt-12 md:mt-8'>
              <img src="./main.jpg" alt="main image" className='rounded-full md:w-[370px] md:h-[auto] mt:25 w-[250px] h-[auto]' />
         </div>
      </div>
    </div>
    <hr/>
    </>
  
  )
}

export default Home