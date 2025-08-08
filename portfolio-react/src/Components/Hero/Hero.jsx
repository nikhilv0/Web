import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';

const Hero = () => {
    return (
       <div className="hero">
            <img src={profile} alt="My profile" />
            <h1><span>I'm Nikhil V</span>, Java Full Stack Developer.</h1>
            <p>I am a passionate Java Full Stack Developer with a keen interest in creating dynamic and responsive web applications. Explore my work and connect with me!</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My resume</div>
            </div>
       </div>
    );
};

export default Hero;
