import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          <div className="footer-brand">
            <div className="logo">
              <FaCode className="code-icon" />
              <span className="highlight-text"></span>WALID ELBASSOURI
            </div>
            <p className="footer-description">
              Frontend Developer creating beautiful, responsive web experiences
            </p>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Responsive Design</a></li>
                <li><a href="#services">Frontend Consulting</a></li>
              </ul>
            </div>

            <div className="links-column">
              <h3>Connect</h3>
              <div className="social-links">
                <a href="https://github.com/Poot-bs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/walid-el-bassouri-654257273/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="social-icon" />
                </a>
            
                <a href="mailto:walidwalis131@gmail.com" aria-label="Email">
                  <FaEnvelope className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Walid El Bassouri. All rights reserved.
          </div>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <span>|</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;