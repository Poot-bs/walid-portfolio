import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaPalette, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './Header.scss';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaCode /> },
    { id: 'about', label: 'About', icon: <FaShieldAlt /> },
    { id: 'projects', label: 'Projects', icon: <FaPalette /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gold-text">W</span>EB
        </motion.div>

        <nav className="nav-desktop">
          <ul className="nav-links">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <motion.div 
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            x: isMobileMenuOpen ? '0%' : '100%'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;