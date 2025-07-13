import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isVisible, setIsVisible] = useState(false);
    const [animatedSkills, setAnimatedSkills] = useState(new Set());
    const sectionRef = useRef(null);

    const categories = ['all', 'Frontend', 'Backend', 'Tools'];

    const filteredSkills = selectedCategory === 'all'
        ? portfolioData.skills
        : portfolioData.skills.filter(skill => skill.category === selectedCategory);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Animate skill bars with staggered delay
                    filteredSkills.forEach((skill, index) => {
                        setTimeout(() => {
                            setAnimatedSkills(prev => new Set([...prev, skill.name]));
                        }, index * 100);
                    });
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

    // Reset animation when category changes
    useEffect(() => {
        setAnimatedSkills(new Set());
        if (isVisible) {
            filteredSkills.forEach((skill, index) => {
                setTimeout(() => {
                    setAnimatedSkills(prev => new Set([...prev, skill.name]));
                }, index * 100);
            });
        }
    }, [isVisible]);

    const getSkillColor = (level) => {
        if (level >= 90) return '#10b981'; // Green
        if (level >= 80) return '#3b82f6'; // Blue
        if (level >= 70) return '#f59e0b'; // Yellow
        if (level >= 60) return '#ef4444'; // Red
        return '#6b7280'; // Gray
    };

    const SkillCard = ({ skill, index }) => (
        <div
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="skill-header">
                <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                </div>
                <span className="skill-level">{skill.level}%</span>
            </div>

            <div className="skill-bar">
                <div
                    className="skill-progress"
                    style={{
                        width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                        backgroundColor: getSkillColor(skill.level)
                    }}
                >
                    <div className="skill-glow"></div>
                </div>
            </div>

            <div className="skill-description">
                {getSkillDescription(skill.name, skill.level)}
            </div>
        </div>
    );

    const getSkillDescription = (skillName, level) => {
        const descriptions = {
            'React': 'Building modern, interactive user interfaces with hooks and state management',
            'JavaScript': 'ES6+ features, async programming, and modern JavaScript development',
            'HTML/CSS': 'Semantic markup, CSS Grid, Flexbox, and responsive design principles',
            'Node.js': 'Server-side JavaScript development and API creation',
            'MongoDB': 'NoSQL database design, queries, and data modeling',
            'Git': 'Version control, branching strategies, and collaborative development',
            'Responsive Design': 'Mobile-first approach and cross-device compatibility',
        };

        return descriptions[skillName] || 'Proficient in modern development practices and methodologies';
    };

    const CategoryStats = () => {
        const categorySkills = categories.slice(1).map(category => ({
            name: category,
            count: portfolioData.skills.filter(skill => skill.category === category).length,
            avgLevel: Math.round(
                portfolioData.skills
                    .filter(skill => skill.category === category)
                    .reduce((sum, skill) => sum + skill.level, 0) /
                portfolioData.skills.filter(skill => skill.category === category).length
            )
        }));

        return (
            <div className="category-stats">
                <h3>Skills Overview</h3>
                <div className="stats-grid">
                    {categorySkills.map(category => (
                        <div key={category.name} className="stat-item">
                            <div className="stat-number">{category.count}</div>
                            <div className="stat-label">{category.name} Skills</div>
                            <div className="stat-avg">{category.avgLevel}% Avg</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section id="skills" className={`section skills ${isVisible ? 'skills-visible' : ''}`} ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>

                <div className="skills-intro">
                    <p>
                        I'm constantly learning and improving my skills. Here's my current
                        proficiency level in various technologies and tools I work with.
                    </p>
                </div>

                <CategoryStats />

                <div className="skills-categories">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category === 'all' ? 'All Skills' : category}
                            <span className="category-count">
                                {category === 'all'
                                    ? portfolioData.skills.length
                                    : portfolioData.skills.filter(skill => skill.category === category).length
                                }
                            </span>
                        </button>
                    ))}
                </div>

                <div className="skills-grid">
                    {filteredSkills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            index={index}
                        />
                    ))}
                </div>

                <div className="skills-note">
                    <p>
                        <strong>Note:</strong> Skill levels are self-assessed and represent my comfort
                        level with each technology. I'm always eager to learn and take on new challenges!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;