import { motion } from 'framer-motion';
import { 
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaAccessibleIcon
} from 'react-icons/fa';
import {
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3
} from 'react-icons/di';
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiFigma
} from 'react-icons/si';
import './Skills.scss';

const Skills = () => {
  const skillsData = [
    { name: 'React', icon: <DiReact />, level: 90, color: '#61DAFB' },
    { name: 'JavaScript', icon: <SiJavascript />, level: 92, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 25, color: '#3178C6' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 35, color: '#000000' },
    { name: 'HTML5', icon: <DiHtml5 />, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: <DiCss3 />, level: 90, color: '#1572B6' },
    { name: 'Sass', icon: <SiSass />, level: 85, color: '#CC6699' },
    { name: 'Tailwind', icon: <SiTailwindcss />, level: 40, color: '#06B6D4' },
    { name: 'UI/UX Design', icon: <FaPalette />, level: 40, color: '#D4AF37' },
    { name: 'Responsive Design', icon: <FaMobileAlt />, level: 90, color: '#25D366' },
    { name: 'Redux', icon: <SiRedux />, level: 75, color: '#764ABC' },
    { name: 'GraphQL', icon: <SiGraphql />, level: 70, color: '#E10098' },
    { name: 'Figma', icon: <SiFigma />, level: 60, color: '#F24E1E' },
    { name: 'Accessibility', icon: <FaAccessibleIcon />, level: 80, color: '#007ACC' }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="skills-content"
        >
          <h2>Frontend <span className="gold-text">Skills</span></h2>
          <p className="skills-description">
            My expertise in modern frontend technologies and web development best practices
          </p>
          
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-header">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3>{skill.name}</h3>
                </div>
                
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                    }}
                  />
                  <span className="skill-percent">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;