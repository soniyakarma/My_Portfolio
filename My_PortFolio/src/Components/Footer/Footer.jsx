import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: portfolioData.personal.socialLinks.github,
      icon: '🔗'
    },
    {
      name: 'LinkedIn',
      url: portfolioData.personal.socialLinks.linkedin,
      icon: '💼'
    },
    {
      name: 'Email',
      url: `mailto:${portfolioData.personal.email}`,
      icon: '📧'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3>{portfolioData.personal.name}</h3>
            <p>
              Frontend Developer passionate about creating beautiful, 
              functional web applications with modern technologies.
            </p>
            <div className="footer-social">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-label">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section footer-links">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              {quickLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="footer-link"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="footer-section footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href={`mailto:${portfolioData.personal.email}`}>
                  {portfolioData.personal.email}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href={`tel:${portfolioData.personal.phone}`}>
                  {portfolioData.personal.phone}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>
          </div>

          <div className="footer-section footer-newsletter">
            <h4>Stay Updated</h4>
            <p>
              Interested in my latest projects and blog posts? 
              Follow me on social media for updates!
            </p>
            <button 
              className="btn btn-primary newsletter-btn"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; {currentYear} {portfolioData.personal.name}. All rights reserved.</p>
            <p className="footer-subtitle">
              Built with ❤️ using React, CSS3, and modern web technologies.
            </p>
          </div>

          <div className="footer-bottom-right">
            <div className="footer-actions">
              <button 
                className="back-to-top"
                onClick={scrollToTop}
                aria-label="Back to top"
              >
                <span className="back-to-top-icon">↑</span>
                <span className="back-to-top-text">Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-credits">
          <p>
            This portfolio showcases my skills in React development, 
            responsive design, and modern JavaScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;