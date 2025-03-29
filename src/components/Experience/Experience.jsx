import { motion } from 'framer-motion';
import experienceData from '../../assets/data/experience';

import './Experience.scss';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>My <span className="gold-text">Journey</span></h2>
      
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <h3>{exp.position}</h3>
              <h4 className="gold-text">{exp.company}</h4>
              <span className="date">{exp.date}</span>
              <p>{exp.description}</p>
              <div className="tech-used">
                {exp.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
