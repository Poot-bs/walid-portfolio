import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';
import { useRef, useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwplnbpg", { // Replace with your Formspree ID
        method: "POST",
        body: new FormData(form.current),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.current.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-content"
        >
          <h2>Let's <span className="highlight-text">Connect</span></h2>
          <p className="contact-description">
            Interested in collaborating or have questions about my work? Feel free to reach out!
          </p>
          
          <div className="contact-grid">
            <motion.form
              ref={form}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-form"
            >
              <input type="hidden" name="_subject" value="New message from portfolio!" />
              <input type="text" name="_gotcha" style={{display: 'none'}} />
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="5"
                  placeholder="Tell me about your project or question..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-status success"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-status error"
                >
                  Oops! Something went wrong. Please email me directly at walidwalis131@gmail.com
                </motion.div>
              )}
            </motion.form>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="contact-info"
            >
              <h3>Other Ways to Reach Me</h3>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:walidwalis131@gmail.com">walidwalis131@gmail.com</a>
                </div>
              </div>
              
              <div className="social-links">
                <h4>Find Me Online</h4>
                <div className="social-icons">
                  <a href="https://github.com/Poot-bs" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/walid-el-bassouri-654257273/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div className="dev-seal">
                <div className="seal-icon">
                  <FaCode />
                </div>
                <p>Frontend-focused developer passionate about clean code</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;