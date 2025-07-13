import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Hero.css';
import Soiya_K from './img/Soniya_K.jpg';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const typingTexts = [
    'Frontend Developer',
    'React Developer', 
    'Problem Solver'
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeText = () => {
      const currentFullText = typingTexts[textIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setCurrentText(currentFullText.substring(0, charIndex + 1));
        charIndex++;
      }
      
      let typeSpeed = isDeleting ? 50 : 100;
      
      if (!isDeleting && charIndex === currentFullText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typeSpeed = 500;
      }
      
      setTimeout(typeText, typeSpeed);
    };
    
    const startTyping = setTimeout(() => {
      setIsTyping(true);
      typeText();
    }, 1000);
    
    return () => clearTimeout(startTyping);
  },[]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Soniya_Karma.pdf';
    link.download = 'Soniya_Karma.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section className={`hero ${isVisible ? 'hero-visible' : ''}`}>
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-title">
              <span className="highlight">{portfolioData.personal.name}</span>
            </h1>
            <h2 className="hero-subtitle">
              {isTyping ? (
                <>
                  {currentText}
                  <span className="cursor">|</span>
                </>
              ) : (
                portfolioData.personal.title
              )}
            </h2>
            <p className="hero-description">
              {portfolioData.personal.bio}
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <button 
                className="btn btn-outline"
                onClick={downloadResume}
              >
                Download Resume
              </button>

            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="avatar">
                <img 
                  src={Soiya_K} 
                  alt={portfolioData.personal.name}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-social">
          <a 
            href={portfolioData.personal.socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <span>GitHub</span>
          </a>
          <a 
            href={portfolioData.personal.socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <span>LinkedIn</span>
          </a>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow" onClick={() => scrollToSection('about')}>
            <span>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;