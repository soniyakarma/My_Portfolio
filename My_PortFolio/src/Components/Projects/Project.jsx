import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(portfolioData.projects);
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'featured', label: 'Featured' },
    { value: 'react', label: 'React' },
    { value: 'javascript', label: 'JavaScript' }
  ];

  useEffect(() => {
    filterProjects();
  }, [filter]);

  const filterProjects = () => {
    let filtered = portfolioData.projects;

    switch (filter) {
      case 'featured':
        filtered = portfolioData.projects.filter(project => project.featured);
        break;
      case 'react':
        filtered = portfolioData.projects.filter(project => 
          project.technologies.some(tech => tech.toLowerCase().includes('react'))
        );
        break;
      case 'javascript':
        filtered = portfolioData.projects.filter(project => 
          project.technologies.some(tech => tech.toLowerCase().includes('javascript'))
        );
        break;
      default:
        filtered = portfolioData.projects;
    }

    setFilteredProjects(filtered);
  };

  // openig and closing the project popup 
  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const ProjectCard = ({ project, index }) => (
    <div 
      className="project-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => openProjectModal(project)}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-overlay">
          <div className="project-links">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-small btn-primary"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
           
          </div>
        </div>
        {project.featured && <div className="featured-badge">Featured</div>}
      </div>
      
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>×</button>
          
          <div className="modal-header">
            <img src={project.image} alt={project.title} />
          </div>
          
          <div className="modal-body">
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
            
            <div className="project-details">
              <h3>Technologies Used:</h3>
              <div className="tech-list">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-features">
              <h3>Key Features:</h3>
              <ul>
                <li>Responsive design for all screen sizes</li>
                <li>Modern UI with smooth animations</li>
                <li>Cross-browser compatibility</li>
                <li>Performance optimized</li>
                <li>Clean, maintainable code</li>
              </ul>
            </div>
            
            <div className="modal-actions">
             <a 
            href={portfolioData.personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View on GitHub
          </a>
            
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-intro">
          <p>
            Here are some of the projects I've worked on. Each project represents 
            a unique challenge and showcases different aspects of my development skills.
          </p>
        </div>
        
        <div className="project-filters">
          {filterOptions.map(option => (
            <button
              key={option.value}
              className={`filter-btn ${filter === option.value ? 'active' : ''}`}
              onClick={() => setFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        <div className="projects-count">
          <span>Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}</span>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
        
        <div className="projects-cta">
          <h3>Want to see Projects?</h3>
          <p>Check out my GitHub for more information .</p>
          <a 
            href={portfolioData.personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={closeProjectModal} 
      />
    </section>
  );
};

export default Projects;