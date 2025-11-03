import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import GutterCleaning from "./pages/GutterCleaning";
import GutterGuards from "./pages/GutterGuards";
import GutterRepairs from "./pages/GutterRepairs";
import BasicRoofCleaning from "./pages/BasicRoofCleaning";
import SoftWashCleaning from "./pages/SoftWashCleaning";

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
              <Route path="/gutter-cleaning" element={<GutterCleaning />} />
              <Route path="/gutter-guards" element={<GutterGuards />} />
              <Route path="/gutter-repairs" element={<GutterRepairs />} />
              <Route path="/basic-roof-cleaning" element={<BasicRoofCleaning />} />
              <Route path="/soft-wash-cleaning" element={<SoftWashCleaning />} />
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