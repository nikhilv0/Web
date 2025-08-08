import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Blood Bank Web Application',
    type: 'Full Stack (Java | JSP | Servlets | MySQL)',
    desc: 'Developed a dynamic web application with user & donor registration, blood request handling, OTP-based email verification using Jakarta Mail API, and CRUD operations using JDBC and MySQL.',
    img: '/images/bloodbank.png',
    link: '#'
  },
  {
    title: 'BloodBank Management Website',
    type: 'Frontend (HTML/CSS/JavaScript)',
    desc: 'Designed a static website for managing donor and recipient information with user-friendly interfaces for patients, doctors, and administrators.',
    img: '/images/bloodbank-static.png',
    link: '#'
  },
  {
    title: 'E-commerce Mini Project',
    type: 'SQL/DBMS',
    desc: 'Designed a basic e-commerce system with product, user, and order management using SQL, implementing relational database structure and CRUD operations.',
    img: '/images/ecommerce.png',
    link: '#'
  },
  {
    title: 'Volume Control with Hand Detection',
    type: 'Python/OpenCV | MediaPipe',
    desc: 'Built a real-time computer vision application to control system volume using hand gestures, detecting landmarks with MediaPipe and measuring finger distances via OpenCV.',
    img: '/images/volumecontrol.png',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <p>Here are some of the projects I have worked on, showcasing my development skills.</p>
      <div className="projects-container">
        {projects.map((p, i) => (
          <a key={i} href={p.link} className="project-card"  rel="noopener noreferrer">
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <span className="tag">{p.type}</span>
            <p>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
