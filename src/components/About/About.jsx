import { motion } from 'framer-motion';
import { FaReact, FaCode, FaPalette } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiCss3 } from 'react-icons/si';
import profileImage from '../../assets/images/profile.jpg';
import './About.scss';

const About = () => {
  const aboutItems = [
    {
      icon: <FaReact />,
      title: "React Development",
      description: "Building interactive UIs with React and Next.js"
    },
    {
      icon: <SiJavascript />,
      title: "JavaScript",
      description: "Building dynamic and interactive web applications"
    },
    {
      icon: <SiCss3 />,
      title: "Modern CSS",
      description: "Crafting beautiful designs with CSS3, Sass and animations"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About <span className="gold-text">Me</span></h2>
          
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm Walid El Bassouri, a passionate frontend developer specializing in creating beautiful, 
                responsive web experiences. I focus on writing clean, efficient code and building intuitive 
                user interfaces.
              </p>
              <p>
                My journey in web development began with a love for design and functionality, which evolved 
                into expertise in modern JavaScript frameworks, responsive design principles, and creating 
                accessible web applications.
              </p>
              <div className="skills-tags">
                <span><SiJavascript /> JavaScript</span>
                <span><FaReact /> React</span>
                <span><SiTypescript /> TypeScript</span>
                <span>Next.js</span>
                <span>Responsive Design</span>
                <span>UI/UX</span>
              </div>
            </div>
            
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="image-wrapper">
                <div className="glow-effect"></div>
                <img 
                  src={profileImage} 
                  alt="Walid El Bassouri" 
                  className="profile-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23D4AF37' width='200' height='200'/%3E%3Ctext fill='%23000' font-family='Arial' font-size='24' dy='.3em' text-anchor='middle' x='100' y='100'%3EYour Photo%3C/text%3E%3C/svg%3E"
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          <div className="about-features">
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;