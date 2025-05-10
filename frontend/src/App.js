import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Section Components
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import CTA from "./components/sections/CTA";
import CTAHorizontal from "./components/sections/CTAHorizontal";
import Process from "./components/sections/Process";
import Benefits from "./components/sections/Benefits";

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
          <CookieConsent />
          <WhatsAppChat />
          <Header />
          <main>
            <Hero />
            <Services />
            <CTAHorizontal />
            <Process />
            <About />
            <Benefits />
            <Gallery />
            <Testimonials />
            <CTA />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </div>
      </PageTransition>
    </BrowserRouter>
  );
}

export default App;
