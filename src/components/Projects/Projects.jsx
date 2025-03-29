import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import bitikaImage from '../../assets/images/bitika.png'; // Import the image
import atimImage from '../../assets/images/atim-art.png'; // Import the image
import './Projects.scss';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Bitika",
      description: "Responsive business landing page built with pure HTML, CSS, and JavaScript. Features smooth animations and mobile-first design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/Poot-bs/bitika",
      demo: "https://bitika.me",
      image: bitikaImage // Use the imported image
    },
    {
      id: 2,
      title: "Atim Art Gallery",
      description: "Interactive art showcase using vanilla JavaScript for image filtering and lightbox features. Fully responsive across all devices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Mobile-Friendly"],
      github: "https://github.com/walidbassouri/atim-art-gallery",
      demo: "https://atim-art.demo",
      image: atimImage // Use the imported image
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-content"
        >
          <h2>My <span className="highlight-text">Projects</span></h2>
          <p className="projects-description">
            Handcrafted with vanilla HTML, CSS, and JavaScript
          </p>
          
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="project-image">
                  <img 
                    src={project.image} // Use the imported image directly
                    alt={project.title}
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect fill='%23f5f5f5' width='400' height='250'/%3E%3Crect fill='%23ddd' x='20' y='20' width='360' height='210'/%3E%3Ctext fill='%23666' font-family='Arial' font-size='24' dy='.3em' text-anchor='middle' x='200' y='125'%3EProject Preview%3C/text%3E%3C/svg%3E"
                    }}
                  />
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;  