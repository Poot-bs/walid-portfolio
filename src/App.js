import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './assets/styles/main.scss';import emailjs from '@emailjs/browser';
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      {/* Animated Cursor */}
      <motion.div 
        className="cursor"
        animate={{
          x: cursorPosition.x - 15,
          y: cursorPosition.y - 15,
          transition: { type: 'spring', damping: 30 }
        }}
      />
      
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <Skills setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </main>
      
      <Footer />

    </div>
  );
}

export default App;