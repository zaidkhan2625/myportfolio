import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  
  // Refs for text and image
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  // Refs for sections
  const aboutRef = useRef();
  const contactRef = useRef();
  const projectsRef = useRef();
  const technologiesRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(h11.current, {
      x: "-100%",
      delay: 0.8,
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut",
    }, "<")
    .from(h12.current, {
      x: "-100%",
      delay: 0.5,
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut",
    }, "<")
    .from(h13.current, {
      x: "-100%",
      delay: 0.1,
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut",
    }, "<")
    .from(myimageref.current, {
      x: "200%",
      delay: 0.5,
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut",
    }, "<");
    
    // Optionally animate sections
    gsap.from(aboutRef.current, { opacity: 0, duration: 1, delay: 1 });
    gsap.from(contactRef.current, { opacity: 0, duration: 1, delay: 1.5 });
    gsap.from(projectsRef.current, { opacity: 0, duration: 1, delay: 2 });
    gsap.from(technologiesRef.current, { opacity: 0, duration: 1, delay: 2.5 });
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img
          ref={myimageref}
          className="md:h-auto md:w-1/2 md:ml-auto rounded-full"
          style={{ width: 180, height: 180 }}
          src={img}
          alt="Pavan MG"
        />
      </div>

      {/* Section for About */}
      <section ref={aboutRef} className="mt-10">
        <h2 className="text-3xl font-bold">About</h2>
        <p>Your about content goes here.</p>
      </section>

      {/* Section for Contact */}
      <section ref={contactRef} className="mt-10">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p>Your contact information goes here.</p>
      </section>

      {/* Section for Projects */}
      <section ref={projectsRef} className="mt-10">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p>Your projects information goes here.</p>
      </section>

      {/* Section for Technologies */}
      <section ref={technologiesRef} className="mt-10">
        <h2 className="text-3xl font-bold">Technologies</h2>
        <p>Your technologies information goes here.</p>
      </section>
    </main>
  );
}

export default Home;
