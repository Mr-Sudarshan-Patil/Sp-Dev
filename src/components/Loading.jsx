import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Loading({ onComplete }) {
  const textContainer = useRef(null);
  const mainContainer = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      },
    });
    const elements = textContainer.current.children;

    // Animate each element one by one
    for (let i = 0; i < elements.length; i++) {
      tl.fromTo(elements[i],
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      ).to(elements[i],
        { opacity: 0, duration: 0.5, delay: 1 }
      );
    }

    tl.to(mainContainer.current, {
      top: "-100%",
      duration: 1,
      delay: 1,
    });
  }, [onComplete]);

  return (
    <div ref={mainContainer} className='overflow-hidden max-w-screen-2xl container h-full max-w-full bg-black z-50 fixed top-0 left-0'>
      <div className='h-full flex justify-center items-center'>
        <div ref={textContainer} className='text-white text-2xl md:text-4xl flex flex-col items-center'>
          <h1 className='absolute'>Hi, I'm <span style={{ color: "#be185d" }}>Sudarshan Patil!</span></h1>
          <h1 className='absolute'>WELCOME</h1>
          <h1 className='absolute'>TO</h1>
          <h1 className='absolute'>MY</h1>
          <h1 className='absolute'>ONLINE PORTFOLIO</h1>
        </div>
      </div>
    </div>
  );
}

export default Loading;
