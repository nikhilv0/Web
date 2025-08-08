import React from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import SocialIcons from './Components/SocialIcons/SocialIcons';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

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
      <Contact />
      <Footer />
    </div>
  );
};


export default App;
