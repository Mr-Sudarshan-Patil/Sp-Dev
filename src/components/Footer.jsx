import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
  <>
 
    <div className='w-full bg-white shadow-md z-70 border-t-2'>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md'>
        <div className='flex justify-between h-14 items-center'>
          <div className='md:text-sm font-medium'>
            <span className='text-pink-500 font-semibold'>&lt;</span> Sp.Dev <span className='text-pink-500 font-semibold'>&#47;&gt;</span>
          </div>
          <div>
            <p>+917875412671</p>
          </div>
          <div className='space-y-2'>
            <div className='flex space-x-3 text-2xl'>
              <ul className='flex space-x-3 text-xl'>
                <li>
                  <a href="https://www.linkedin.com/in/sudarshan-patil-b9501a196/" target='_blank'>
                    <FaLinkedin className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Mr-Sudarshan-Patil" target='_blank'>
                    <FaGithub className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_er_sp_?igsh=dzZmajAxZ2czM3d2" target='_blank'>
                    <FaInstagram className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-sm py-2">
          Designed by <span className="text-pink-500 hover:text-pink-300 cursor-pointer">Sudarshan Patil</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer;
