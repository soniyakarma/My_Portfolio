import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
  const sectionRef = useRef(null);

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

  const ExperienceCard = ({ experience, index }) => (
    <div 
      className="experience-card"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="experience-timeline-dot"></div>
      <div className="experience-content">
        <div className="experience-header">
          <h3>{experience.position}</h3>
          <span className="experience-duration">{experience.duration}</span>
        </div>
        <h4>{experience.company}</h4>
        <p className="experience-description">{experience.description}</p>
        
        <div className="experience-achievements">
          <h5>Key Achievements:</h5>
          <ul>
            {experience.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const EducationCard = ({ education, index }) => (
    <div 
      className="education-card"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="education-content">
        <div className="education-header">
          <h3>{education.degree}</h3>
          <span className="education-duration">{education.duration}</span>
        </div>
        <h4>{education.institution}</h4>
        {education.gpa && (
          <p className="education-gpa">GPA: {education.gpa}</p>
        )}
        
        {education.relevantCourses && (
          <div className="relevant-courses">
            <h5>Relevant Coursework:</h5>
            <div className="courses-grid">
              {education.relevantCourses.map((course, idx) => (
                <span key={idx} className="course-tag">{course}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const CertificationCard = ({ certification, index }) => (
    <div 
      className="certification-card"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="certification-content">
        <div className="certification-header">
          <h3>{certification.name}</h3>
          <span className="certification-date">{certification.date}</span>
        </div>
        <h4>{certification.issuer}</h4>
        {certification.credentialId && (
          <p className="credential-id">Credential ID: {certification.credentialId}</p>
        )}
      </div>
    </div>
  );

  const TabContent = () => {
    switch (activeTab) {
      
      case 'education':
        return (
          <div className="education-section">
            {portfolioData.education.map((edu, index) => (
              <EducationCard key={edu.id} education={edu} index={index} />
            ))}
          </div>
        );
      case 'certifications':
        return (
          <div className="certifications-section">
            {portfolioData.certifications.map((cert, index) => (
              <CertificationCard key={cert.id} certification={cert} index={index} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="experience" 
      className={`section experience ${isVisible ? 'experience-visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="experience-intro">
          <p>
            My journey in software development includes hands-on experience, continuous learning, 
            and professional growth through various roles and educational opportunities.
          </p>
        </div>

        <div className="experience-tabs">
          <button 
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Education
            <span className="tab-count">{portfolioData.education.length}</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
            <span className="tab-count">{portfolioData.certifications.length}</span>
          </button>
        </div>

        <div className="tab-content">
          <TabContent />
        </div>

        <div className="experience-summary">
          <div className="summary-stats">
            <div className="summary-item">
              <div className="summary-number">
                {portfolioData.experience.length}
              </div>
              <div className="summary-label">Work Experiences</div>
            </div>
            <div className="summary-item">
              <div className="summary-number">
                {portfolioData.education.length}
              </div>
              <div className="summary-label">Educational Background</div>
            </div>
            <div className="summary-item">
              <div className="summary-number">
                {portfolioData.certifications.length}
              </div>
              <div className="summary-label">Certifications Earned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;