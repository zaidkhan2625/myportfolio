import React from 'react';
import Home from './Home';
import About from './About';
import Technologies from './Technologies';
import Project from '../Components/Project';
import Contact from './Contact';
  
  const LandingPage = () =>  {
	return (
	  <div>
      <Home/>
      <About/>
      <Technologies/>
      <Project/>
      <Contact/>
	  </div>
	);
  }
  
  export default LandingPage;
  