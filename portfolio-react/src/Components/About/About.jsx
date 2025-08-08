import React from 'react';
import './About.css';
// import profileImg from '../../assets/profile.png'; 

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                {/* <img src={profileImg} alt="Profile" /> */}
                <div className="about-section">
                    <div className="about-left">
                        {/* <img src={profileImg} alt="Profile" /> */}
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>
                                I'm Nikhil V, a passionate software trainee specializing in full-stack Java development. I have hands-on
                                experience building responsive and dynamic web applications using Java, JSP, Servlets, JDBC, and MySQL.
                            </p>
                            <p>
                                I've completed internships at X-Workz, Innovaskill, and Sirintel where I worked on real-world frontend and backend projects. I’m enthusiastic about solving problems, learning new technologies, and contributing to impactful software.
                            </p>
                        </div>

                        <div className="about-education">
                            <h2>🎓 Education</h2>
                            <p><strong>B.E. in Computer Science</strong></p>
                            <p>GM Institute of Technology, 2021 - 2025</p>
                            <p>CGPA: 7.9</p>
                        </div>

                        <div className="about-work">
                            <h2>🧑‍💼 Work Experience</h2>
                            <p><strong>Java Full Stack Intern</strong> — X-Workz, Bengaluru (Feb 2025 - Present)</p>
                            <ul>
                                <li>Developed and maintained full-stack modules using JSP, Servlets, and JDBC.</li>
                                <li>Implemented MySQL-based CRUD operations with a layered architecture.</li>
                            </ul>

                        </div>

                        <div className="about-achievements">
                            <h2>🏆 Achievements</h2>
                            <ul>
                                <li>2nd Place - IDEATHON State Level Exhibition 2023 (Blockchain Voting System)</li>
                                <li>NPTEL Certified - Programming in Java (Score: 63%)</li>
                                <li>NPTEL Certified - The Joy of Computing Using Python (Score: 72%)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
