import React from 'react';
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import ServiceArea from "../components/sections/ServiceArea";
import Contact from "../components/sections/Contact";
import Services from "../components/sections/Services";
import Certifications from "../components/sections/Certifications";
import Gallery from "../components/sections/Gallery";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ServiceArea />
      <Contact />
      <Services />
      <Gallery />
      <Certifications />
      <Testimonials />
      <Contact />
      <FAQ />
    </>
  );
};

export default Home;
