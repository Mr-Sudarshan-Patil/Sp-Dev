import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

function Navbar({ scrollToExperience, scrollToAbout, scrollToHome, scrollToTech, scrollToProject, scrollToContact}) {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home", onClick: scrollToHome},
    { id: 2, text: "About", onClick: scrollToAbout },
    { id: 3, text: "Experience", onClick: scrollToExperience},
    { id: 4, text: "Tech Stack", onClick: scrollToTech },
    { id: 5, text: "Projects", onClick: scrollToProject},
    { id: 6, text: "Contact", onClick: scrollToContact},
  ];
  
  const toggleMenu = () => {
    setMenu(!menu); // Toggle menu state
  };

  const handleItemClick = (onClick) => {
    if (onClick) {
      onClick(); // Call the provided onClick function
    }
    setMenu(false); // Close the mobile menu after clicking a menu item
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-14 shadow-md fixed top-0 left-0 w-full z-50 bg-white'>
        <div className='flex justify-between h-full items-center'>
          <div className='md:text-xl font-medium'>
            <span className='text-pink-500 font-semibold'>&lt;</span> Sp.Dev <span className='text-pink-500 font-semibold'>&#47;&gt;</span>
          </div>
          {/* Desktop Navbar items */}
          <div className='hidden md:flex gap-6'>
            {navItems.map(({ id, text, onClick}) => (
              <div key={id} onClick={() => handleItemClick(onClick)} className={`hover:scale-105 duration-200 cursor-pointer hover:text-pink-500`}>
                {text}
              </div>
            ))}
          </div>
          {/* Hamburger icon to toggle mobile menu */}
          <div className='md:hidden' onClick={toggleMenu}>
            {menu ? <RxCross2 /> : <FiMenu />}
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      <div className={menu ? 'fixed top-0 left-0 w-full h-full bg-white z-40' : 'hidden'}>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 pt-40'>
          <ul className='md:hidden flex flex-col items-center justify-center gap-3 font-medium'>
            {navItems.map(({ id, text, onClick, active }) => (
              <li key={id} onClick={() => handleItemClick(onClick)} className={`hover:scale-105 duration-200 cursor-pointer hover:text-pink-500`}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
