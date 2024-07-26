import React, { useEffect, useRef, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

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

 
  const mobileNav = useRef([]);

  useEffect(() => {
    let nav = mobileNav.current.children;
    if (menu) {
    gsap.fromTo(
      nav,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scale: 1.3,
        marginBottom: 18,
        duration: 0.7,
        stagger: 0.5,
      }
    );
    }
  }, [menu]);

  const handleItemClick = (onClick) => {
    if (onClick) {
      onClick(); // Call the provided onClick function

    }
    setMenu(false); // Close the mobile menu after clicking a menu item
  };


  const navLogo = useRef(null);
  const navOptions = useRef([]);
  

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(navLogo.current, {
      y: -20,
      opacity: 0,
      duration: 1,
    });

    const navItems = navOptions.current.children;

    tl.fromTo(
      navItems,
      { opacity: 0, y:-10, duration: -2},
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.3,
      }
    );

    });

    let circle = useRef(null);

useEffect(()=>{

  gsap.to(circle.current,
    { x: 0, y: 0, rotate: 360,
      repeat: -1,
      duration: 6,
      ease: "linear",
      transformOrigin: "center center"
     }
    );
}, []);

  return (
    <>
      <div className='container mx-auto px-4 md:px-20 h-14 shadow-md fixed top-0 left-0 max-w-full z-40 bg-white'>
        <div className='flex justify-between h-full items-center'>
          <div ref={navLogo} className='md:text-xl font-medium'>
            <span  className='text-pink-500 font-semibold'>&lt;</span> Sp.Dev <span className='text-pink-500 font-semibold'>&#47;&gt;</span>
          </div>
          {/* Desktop Navbar items */}
          <div ref={navOptions} className='hidden md:flex gap-6'>
            {navItems.map(({ id, text, onClick}, index) => (
              <div  key={id} onClick={() => handleItemClick(onClick)} className={`hover:scale-105 duration-200 cursor-pointer hover:text-pink-500`}>
                {text}
              </div>
            ))}
          </div>
          {/* Hamburger icon to toggle mobile menu */}
          <div className='md:hidden' onClick={toggleMenu}>
            {menu ? <RxCross2 size={24}/> : <FiMenu size={24}/>}
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      <div className={menu ? 'fixed top-0 left-0 w-full h-full bg-white z-40' : 'hidden'}>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 pt-40'>
          <ul ref={mobileNav} className='mavMob md:hidden flex flex-col items-center justify-center gap-3 font-medium'>
            {navItems.map(({ id, text, onClick, active }) => (
              <li  key={id} onClick={() => handleItemClick(onClick)} className={`hover:scale-105 duration-200 cursor-pointer hover:text-pink-500`}>
                {text}
              </li>
              
            ))}
          </ul>
        </div>
        <div className='flex justify-center'>
        <img ref={circle} src="./reactLogo.svg" alt="Logo react0" style={{opacity: 0.2}} className='absolute md:w-[370px] md:h-[auto] mt:25 w-[250px] h-[auto]'/>
      </div>
      </div>
    </>
  );
}

export default Navbar;
