export const portfolioData = {
  personal: {
    name: "Soniya Karma",
    title: "Frontend Developer",
    email: "Soniyakarma138@gmail.com",
    phone: "7879060608",
    location: "Khargone, MP",
    bio: "Passionate frontend developer with a keen eye for creating responsive, user-friendly web applications. Experties in React, JavaScript, and modern web technologies.",
    socialLinks: {
      github: "https://github.com/soniyakarma",
      linkedin: "https://www.linkedin.com/in/soniya-karma-90a844222",
      portfolio: "https://yourportfolio.com"
    }
  },
  projects: [
    {
      id: 1,
      title: "Food Dash",
      description: "A responsive admin dashboard for managing products, orders, and customers with real-time analytics.",
      technologies: ["React", "JavaScript", "TailwindCSS"],
      github: "https://github.com/soniyakarma/Food_App.git",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    // {
    //   id: 2,
    //   title: "Weather App",
    //   description: "Interactive weather application with location-based forecasts and beautiful UI animations.",
    //   technologies: ["React", "API Integration", "CSS Animations", "Geolocation"],
    //   github: "https://github.com/yourusername/weather-app",
    //   // live: "https://weather-app-demo.com",
    //   image: "https://via.placeholder.com/400x250/059669/white?text=Weather+App",
    //   featured: true
    // },
    {
      id: 2,
      title: "Task Manager",
      description: "Collaborative task management tool with drag-and-drop functionality and real-time updates.",
      technologies: ["Html", "CSS", "Javascript"],
      github: "https://github.com/soniyakarma/Project_Task_Manager",
      image: "https://plus.unsplash.com/premium_photo-1661714157227-886b39f87faa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVuJTIwYW5kJTIwcGFwZXJ8ZW58MHx8MHx8fDA%3D",
      featured: false
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website built with React showcasing projects and skills.",
      technologies: ["React", "CSS3", "Responsive Design", "JavaScript"],
      github: "https://github.com/soniyakarma/My_Portfolio ",
      image: "https://marketplace.canva.com/EAFOv0-FKOY/1/0/1131w/canva-black-and-white-monoline-typedriven-portfolio-cover-page--i5sVeUpuMk.jpg",
      featured: true
    },
    {
      id: 4,
      title: "QR Code Generator",
      description: "QR Code generator built with React to generate QR of given input text or link.",
      technologies: ["React","CSS3","tailwindcss"],
      github: "https://github.com/soniyakarma/QR-Code_Generator",
      image: "https://images.ctfassets.net/pt9zoi1ijm0e/6A10jGLZYqmiwZO0GHamsi/1b45942e3d9b513f2d041745e420180e/QR_generator.png",
      featured: false
    }
  ],
  skills: [
    { name: "React", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "HTML/CSS", level: 95, category: "Frontend" },
    { name: "Node.js", level: 65, category: "Backend" },
    { name: "MongoDB", level: 55, category: "Backend" },
    { name: "Git", level: 80, category: "Tools" },
    { name: "Responsive Design", level: 90, category: "Frontend" },
  ],
  education: [
    {
      id: 1,
      institution: "Jawaharlal Institute of Technology Khargone",
      degree: "Bachelor of Technology in Computer Science",
      duration: "2020 - 2024",
      cgpa: "7.51/10",
      relevantCourses: [
        "Web Development",
        "Database Systems",
        "Software Engineering",
      ]
    }
  ],
  certifications: [
    {
      id: 1,
      name: "MERN Stack Certification",
      issuer: "Infoviaan Technologies",
      date: "2024",
      credentialId: "ABC123"
    },

  ]
};
