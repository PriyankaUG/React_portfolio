import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificate';
import Experience from './components/Experience';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkIsMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add resize listener for responsiveness
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
        <div className="absolute -top-40 -left-28 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-36 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Header isMobile={isMobile} />
        <Hero isMobile={isMobile} />
        <About />
        <Projects isMobile={isMobile} />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
