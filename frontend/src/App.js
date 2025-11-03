import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import ServiceArea from "./components/sections/ServiceArea";
import Contact from "./components/sections/Contact";
import Services from "./components/sections/Services";
import Certifications from "./components/sections/Certifications";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";

// UI Components
import PageTransition from "./components/ui/PageTransition";
import ScrollToTop from "./components/ui/ScrollToTop";
import WhatsAppChat from "./components/ui/WhatsAppChat";

function App() {
  return (
    <BrowserRouter>
      <PageTransition>
        <div className="App">
          <ScrollToTop />
          <WhatsAppChat />
          <Header />
          <main>
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
          </main>
          <Footer />
        </div>
      </PageTransition>
    </BrowserRouter>
  );
}

export default App;
// Trigger deploy
// Trigger deploy

// Trigger deploy