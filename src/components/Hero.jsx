import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import resumeFile from '../assets/resume.pdf';

const Hero = ({ isMobile }) => {
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullName = 'Priyanka Gaikwad';
  const roles = ['Full Stack Developer', 'Java & Spring Boot Developer'];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.setAttribute('download', 'Priyanka_Gaikwad_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullName.length) {
        setTypedText(fullName.substring(0, i + 1));
        i += 1;
      } else {
        clearInterval(typingInterval);
        setInterval(() => setShowCursor((prev) => !prev), 500);
      }
    }, isMobile ? 90 : 130);

    return () => clearInterval(typingInterval);
  }, [isMobile]);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 sm:pt-24 pb-10 sm:pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="inline-flex items-center px-3 py-1 rounded-full border border-blue-400/40 bg-blue-500/10 text-blue-200 text-sm mb-5">
              Open to Internship & Full-Time Roles
            </p>

            <p className="text-base sm:text-lg text-slate-300 mb-3">Hello, I am</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight mb-4">
              {typedText}
              {!isMobile && (
                <span className={`inline-block w-1 h-14 align-middle bg-blue-300 ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
              )}
            </h1>

            <motion.p
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-lg sm:text-xl md:text-2xl text-blue-300 mb-5 min-h-7"
            >
              {roles[currentRoleIndex]}
            </motion.p>

            <p className="text-slate-300 max-w-2xl leading-relaxed mb-8">
              I build practical, production-ready web applications with clean UI, scalable backend logic, and reliable user experiences.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
              <a href="#projects" className="w-full sm:w-auto text-center px-5 sm:px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="w-full sm:w-auto text-center px-5 sm:px-6 py-3 border border-blue-400 text-blue-300 font-medium rounded-lg hover:bg-blue-400/10 transition-colors">
                Contact Me
              </a>
              <button onClick={downloadResume} className="w-full sm:w-auto justify-center px-5 sm:px-6 py-3 bg-slate-800 text-slate-100 font-medium rounded-lg hover:bg-slate-700 transition-colors inline-flex items-center gap-2">
                <FiDownload className="h-4 w-4" />
                Download CV
              </button>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <a href="https://github.com/PriyankaUG" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-300 transition-colors text-xl p-3 bg-slate-800 rounded-lg" aria-label="GitHub"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/gaikwad-priyanka/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-300 transition-colors text-xl p-3 bg-slate-800 rounded-lg" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="https://x.com/PriyankaGa95614" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-300 transition-colors text-xl p-3 bg-slate-800 rounded-lg" aria-label="Twitter"><FiTwitter /></a>
              <a href="mailto:priya937027@gmail.com" className="text-slate-300 hover:text-blue-300 transition-colors text-xl p-3 bg-slate-800 rounded-lg" aria-label="Email"><FiMail /></a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass-card p-5 sm:p-7"
          >
            <h2 className="text-lg uppercase tracking-wider text-blue-300 mb-5">Quick Snapshot</h2>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                <p className="text-2xl font-bold text-white">9.85</p>
                <p className="text-xs text-slate-400 mt-1">CGPA</p>
              </div>
              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                <p className="text-2xl font-bold text-white">4+</p>
                <p className="text-xs text-slate-400 mt-1">Projects</p>
              </div>
              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                <p className="text-2xl font-bold text-white">2022-26</p>
                <p className="text-xs text-slate-400 mt-1">B.E. Duration</p>
              </div>
              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                <p className="text-xl font-bold text-white leading-tight">Farmer Advisory</p>
                <p className="text-xs text-slate-400 mt-1">Core Project</p>
              </div>
            </div>
            <div className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-4">
              <p className="text-sm text-slate-200 leading-relaxed">
                Building secure and scalable applications with Java, Spring Boot, React, PostgreSQL, and JWT authentication.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
