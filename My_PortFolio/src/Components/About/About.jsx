import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [counters, setCounters] = useState({
  //   // projects: 0,
  //   // experience: 0,
  //   // satisfaction: 0
  // });
  const sectionRef = useRef(null);

  // const stats = [
  //   { key: 'projects', label: 'Projects Completed', target: 15, suffix: '+' },
  //   { key: 'experience', label: 'Years Experience', target: 2, suffix: '+' },
  //   { key: 'satisfaction', label: 'Client Satisfaction', target: 100, suffix: '%' }
  // ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // startCounters();
        }
      },
      // { threshold: 0.3 }
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

  // const startCounters = () => {
  //   stats.forEach(stat => {
  //     let start = 0;
  //     const end = stat.target;
  //     const duration = 2000;
  //     const increment = end / (duration / 16);

  //     const timer = setInterval(() => {
  //       start += increment;
  //       if (start >= end) {
  //         start = end;
  //         clearInterval(timer);
  //       }

  //       setCounters(prev => ({
  //         ...prev,
  //         [stat.key]: Math.floor(start)
  //       }));
  //     }, 16);
  //   });
  // };

  return (
    <section id="about" className={`section about ${isVisible ? 'about-visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <p className="intro-text">
                Hello! I'm a passionate frontend developer who loves creating beautiful,
                functional web applications that provide exceptional user experiences.
              </p>
            </div>

            <div className="about-details">
              <p>
                My journey in web development started with curiosity about how websites work,
                and has evolved into a career focused on creating intuitive, responsive, and
                accessible web applications. I specialize in React and modern JavaScript,
                with a strong foundation in HTML, CSS.
              </p>

              <p>
                I believe in writing clean, maintainable code and staying up-to-date with
                the latest web technologies and best practices.
                I have expertise in tools and librartes like React, Redux, Tailwind CSS, Bootstrap, Git, REST APIs,
                and always exploring new technologies to improve my development workflow.
              </p> <br />
            </div>

            <div className="about-highlights">
              <h3>What I Bring:</h3>
              <div className="highlights-grid">
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <div>
                    <h4>Performance Focus</h4>
                    <p>Optimized applications with fast load times and smooth interactions</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">📱</div>
                  <div>
                    <h4>Responsive Design</h4>
                    <p>Mobile-first approach ensuring great experiences across all devices</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">♿</div>
                  <div>
                    <h4>Accessibility</h4>
                    <p>Inclusive design that works for users of all abilities</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">🔧</div>
                  <div>
                    <h4>Problem Solving</h4>
                    <p>Analytical thinking to tackle complex challenges with simple solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {/* <div className="stats-container"> */}
              {/* {stats.map((stat, index) => (
                <div key={stat.key} className="stat" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="stat-number">
                    {counters[stat.key]}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))} */}
            {/* </div> */}

            <div className="about-personal">
              <h3>Quick Facts</h3>
              <div className="personal-info">
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">{portfolioData.personal.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{portfolioData.personal.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Languages:</span>
                  <span className="info-value">English, JavaScript 😄</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Interests:</span>
                  <span className="info-value">Web Development, UI/UX, Open Source</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <p>Interested in working together?</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;