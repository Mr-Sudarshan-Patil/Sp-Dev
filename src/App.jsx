import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Download from './components/Download';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const TechRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return () => locomotiveScroll.destroy();
  }, []);

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    if (experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTech = () => {
    if (TechRef.current) {
      TechRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProject = () => {
    if (ProjectRef.current) {
      ProjectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (ContactRef.current) {
      ContactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar
            scrollToExperience={scrollToExperience}
            scrollToAbout={scrollToAbout}
            scrollToHome={scrollToHome}
            scrollToTech={scrollToTech}
            scrollToProject={scrollToProject}
            scrollToContact={scrollToContact}
          />
          <Home homeRef={homeRef} />
          <Download />
          <About experienceRef={experienceRef} aboutRef={aboutRef} />
          <TechStack TechRef={TechRef} />
          <Projects ProjectRef={ProjectRef} />
          <Contact ContactRef={ContactRef} />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
