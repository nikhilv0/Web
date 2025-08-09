import React from 'react';
import './Skills.css';

export default function SkillsTech() {
  const skillsTech = [
    { name: 'Java', img: '/images/java-original.svg' },
    { name: 'HTML5', img: '/images/html5-original.svg' },
    { name: 'CSS3', img: '/images/css3-original.svg' },
    { name: 'JavaScript', img: '/images/javascript-original.svg' },
    { name: 'SQL', img: '/images/mysql-original.svg' },
    { name: 'GitHub', img: '/images/github-original.svg' },
    { name: 'Git', img: '/images/git-original.svg' },
    { name: 'Servlet', img: '/public/images/servlet.png' },
    { name: 'JDBC', img: '/public/images/database.png' },
    { name: 'Maven', img: '/images/maven-original.svg' },
  ];

  return (
    <section id='skillTech' className="skills-section"  >
      <h2>Skills & Technologies</h2>
      <p>Technologies I use regularly.</p>
      <div className="skills-container">
        {skillsTech.map((skill, idx) => (
          <div className="skill-item" key={idx}>
            <img src={skill.img} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
