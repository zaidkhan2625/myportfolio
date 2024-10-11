import React from 'react';
import Home from './Home';
import About from './About';
import Technologies from './Technologies';
import Project from '../Components/Project';
import Contact from './Contact';
import { projectDetails } from "../Details";

  const LandingPage = () =>  {
	return (
	  <div>
      <Home/>
      <About/>
      <Technologies/>
      <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
      <Contact/>
	  </div>
	);
  }
  
  export default LandingPage;
  