import React from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import SocialIcons from './Components/SocialIcons/SocialIcons';
import Projects from './Components/Projects/Projects';

const App = () => {
  console.log("App component loaded");
  return (
    <div>
      <Navbar />
      <Hero />
      <SocialIcons /> 
       <About />
      <Services />
      <Projects />
    </div>
  );
};


export default App;
