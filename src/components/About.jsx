import React from 'react'


// Tech icons
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { LiaIndustrySolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import Static from './Static';

function About({ experienceRef , aboutRef}) {
  return (
    <>
        <p className='text-2xl font-semibold mt-9 text-center mb-[-40px]' ref={aboutRef} style={{ paddingTop: '85px' }}>About Me...</p>
        <div className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 flex flex-row-reverse'>
        <div className='flex flex-col'>
         <div className='space-y-2'>
            <p className='text-1xl md:text-md text-justify '>Hi, I'm Sudarshan Patil, a Survey Programmer with a B.Tech in Electronics and Telecommunication and 1.6 years of industrial experience. I specialize in front-end technologies, including HTML, CSS, JavaScript, jQuery, and Python, and have contributed to over 150 web surveys and led more than 48 projects. I have also undertaken numerous personal front-end projects. Currently, I am expanding my skills by learning the MERN stack and seeking front-end developer opportunities. My mission is to leverage my expertise to create user-friendly, efficient web applications while continuing to grow in a dynamic development environment.</p>
            <br />
            {/* Social media icons */}
            <div className='space-y-2 flex flex-col items-center justify-center'>
                <h1 className='text-1xl font-medium '>Currently Working on...</h1>
                <div className='flex space-x-3 text-2xl'>
                  <ul className='flex space-x-3 text-2xl'>
                    <li>
                      {" "}
                      <FaReact className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    <li>
                      {" "}
                      <IoLogoJavascript className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    <li>
                      {" "}
                      <BsFiletypeSql className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    <li>
                      {" "}
                      <FaHtml5 className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    <li>
                      {" "}
                      <FaCss3Alt className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    <li>
                      {" "}
                      <RiTailwindCssFill className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    <li>
                      {" "}
                      <FaBootstrap className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                    <li>
                      {" "}
                      <FaGitAlt className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </li>
                  </ul>
                </div>
                </div>
                <Static/>
           
            <hr className='w-full'/>
            <p className=' text-2xl font-semibold mt-9 mb-4 text-center }' style={{paddingTop: '100px'}} ref={experienceRef}>Experience</p>
            <br/>
            <div className=' border-b-2 mt-9'>
                <div className='flex justify-between'>
                <h1 className='text-md md:text-xl text-[#666666]'>Survey Programmer</h1>
                <span className='text-[0.7rem]  md:text-sm   rounded-full bg-[#D7FFE0] text-[#018C0F] text-center p-1'>Full Time</span>
                </div>
                <div className='flex justify-between mt-5'>
                    <div className='flex  flex-wrap gap-2 md:gap-5 items-center'>
                    <p className=' text-xs md:text-sm flex justify-center items-center' ><LiaIndustrySolid />Course5 Intelligence</p>
                    <p className='text-xs md:text-sm flex justify-center items-center'><CiLocationOn /> Mumbai</p>
                    </div>
                    <div>
                    <p className='text-xs md:text-sm flex justify-center items-center' ><MdDateRange />May 2022 - Dec 2023</p>
                    </div>
                </div>
            </div>
            
            <br/>
            <br/>
            <div className=' border-b-2 mt-9'>
                <div className='flex justify-between'>
                <h1 className='text-md md:text-xl text-[#666666]'>Information Technology, Internship</h1>
                <span className='text-[0.7rem]  md:text-sm   rounded-full bg-[#D7FFE0] text-[#018C0F] text-center p-1'>Full Time</span>
                </div>
                <div className='flex justify-between mt-5'>
                    <div className='flex  flex-wrap gap-2 md:gap-5 items-center'>
                    <p className=' text-xs md:text-sm flex justify-center items-center' ><LiaIndustrySolid />RTTC &#40;BSNL&#41;</p>
                    <p className='text-xs md:text-sm flex justify-center items-center'><CiLocationOn /> Nagpur</p>
                    </div>
                    <div>
                    <p className='text-xs md:text-sm flex justify-center items-center' ><MdDateRange />May 2022 - Dec 2023</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <p className='text-2xl font-semibold mt-12 mb-4 text-center'>Education</p>
            <br/>
            <div className=' border-b-2 mt-9'>
                <div className='flex justify-between'>
                <h1 className='text-md md:text-xl text-[#666666]'>R. C. Patel Institute Of Technology</h1>
                <span className='text-[0.7rem]  md:text-sm   rounded-full bg-[#D7FFE0] text-[#018C0F] text-center p-1'>Full Time</span>
                </div>
                <div className=' text-xs md:text-sm'>B.Tech in Electronics & Telecommunication </div>
                <div className='flex justify-between mt-5'>
                    <div className='flex  flex-wrap gap-2 md:gap-5 items-center'>
                    <p className=' text-xs md:text-sm flex justify-center items-center' ><LiaIndustrySolid />Dr.Babasaheb Ambedkar Technological University</p>
                    <p className='text-xs md:text-sm flex justify-center items-center'><CiLocationOn /> Shirpur</p>
                    </div>
                    <div>
                    <p className='text-xs md:text-sm flex justify-center items-center' ><MdDateRange />2017 - 2021</p>
                    </div>
                </div>
            </div>
         </div>
      </div>
      
    </div>
    <br/>
    <hr/>
    </>
      
    
  )
}

export default About
