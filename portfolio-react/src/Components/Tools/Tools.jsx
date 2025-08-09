import React from 'react';
import './Tools.css';

// Direct paths (if in public/images)
const tools = [
  { name: "VS Code", icon: "/images/vscode-original.svg" },
  { name: "IntelliJ IDEA", icon: "/images/intellij-original.svg" },
  { name: "MySQL", icon: "/images/mysql-original.svg" },
  { name: "Eclipse", icon: "/images/eclipse-original.svg" },
  { name: "Apache Tomcat", icon: "/images/tomcat-original.svg" },
  { name: "Notepad++", icon: "/public/images/Notepad++_Logo.svg" }
];

export default function Tools() {
  return (
    <section  className="skills-tech-section">
      <div className="tech-section">
        <h2>Tools Used</h2>
        <p>Development tools and environments I work with.</p>
        <div className="icon-grid">
          {tools.map((tool, index) => (
            <div key={index} className="icon-card">
              <img src={tool.icon} alt={tool.name} />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
