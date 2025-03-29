import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h4>FRONTEND WEB DEVELOPER</h4>
        <h1>
          WALID <span className="gold-text">EL BASSOURI</span>
        </h1>
        <h3>
          Crafting <span>beautiful interfaces</span> with <span>React</span>, <span>JavaScript</span>, and <span>modern CSS</span>
        </h3>
        
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a href="#projects" className="btn btn-secondary">
            View My Work
          </a>
        </div>
        
        <div className="hero-socials">
          <a href="https://github.com/Poot-bs" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/walid-el-bassouri-654257273/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        
          <a href="mailto:walidwalis131@gmail.com">
            <HiOutlineMail />
          </a>
        </div>
      </div>
      
      <div className="tech-decoration">
        <div className="code-animation">
          {/* This will be animated code snippets */}
        </div>
      </div>
    </section>
  );
};

export default Hero;