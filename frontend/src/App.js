import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import GutterCleaning from "./pages/GutterCleaning";
import GutterInstallation from "./pages/GutterInstallation";
import GutterGuards from "./pages/GutterGuards";
import GutterRepairs from "./pages/GutterRepairs";
import BasicRoofCleaning from "./pages/BasicRoofCleaning";
import SoftWashCleaning from "./pages/SoftWashCleaning";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Gutter-Cleaning" element={<GutterCleaning />} />
              <Route path="/Gutter-Guard-Installation" element={<GutterGuards />} />
              <Route path="/Gutter-Downspout-Repairs" element={<GutterRepairs />} />
              <Route path="/Roof-Cleaning-Moss-Treatment" element={<BasicRoofCleaning />} />
              <Route path="/Soft-Wash-Roof-Cleaning" element={<SoftWashCleaning />} />
              <Route path="/Terms-of-Service" element={<TermsOfService />} />
              <Route path="/Refund-Policy" element={<RefundPolicy />} />
              <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
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