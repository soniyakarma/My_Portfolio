import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: portfolioData.personal.email,
      link: `mailto:${portfolioData.personal.email}`,
      description: 'Send me an email anytime'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: portfolioData.personal.phone,
      link: `tel:${portfolioData.personal.phone}`,
      description: 'Call me during business hours'
    },
    {
      icon: '📍',
      label: 'Location',
      value: portfolioData.personal.location,
      link: '#',
      description: 'Based in'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect with me',
      link: portfolioData.personal.socialLinks.linkedin,
      description: 'Professional networking'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call - replace with actual submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll just show success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const ContactMethod = ({ method, index }) => (
    <div 
      className="contact-method"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="contact-icon">{method.icon}</div>
      <div className="contact-details">
        <h4>{method.label}</h4>
        <p className="contact-description">{method.description}</p>
        {method.link !== '#' ? (
          <a 
            href={method.link}
            target={method.label === 'LinkedIn' ? '_blank' : '_self'}
            rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : ''}
            className="contact-link"
          >
            {method.value}
          </a>
        ) : (
          <span className="contact-value">{method.value}</span>
        )}
      </div>
    </div>
  );

  return (
    <section 
      id="contact" 
      className={`section contact ${isVisible ? 'contact-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        
        <div className="contact-intro">
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question, want to collaborate, or just say hello, 
            I'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Ready to start your next project? Let's discuss how we can bring 
              your ideas to life with modern web technologies.
            </p>

            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <ContactMethod 
                  key={method.label} 
                  method={method} 
                  index={index}
                />
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-buttons">
                <a 
                  href={portfolioData.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn github"
                >
                  GitHub
                </a>
                <a 
                  href={portfolioData.personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'error' : ''}
                placeholder="What's this about?"
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                placeholder="Tell me about your project or idea..."
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
              <div className="char-count">
                {formData.message.length} characters
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="status-message success">
                <span className="status-icon">✅</span>
                Thank you! Your message has been sent successfully. I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                <span className="status-icon">❌</span>
                Sorry, there was an error sending your message. Please try again or contact me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;