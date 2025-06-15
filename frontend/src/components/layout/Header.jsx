import React, { useState } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-primary-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            {/* Logo Image - Replace src with your logo image URL */}
            <img 
              src="/images/cf-gutters-logo.jpg" 
              alt="CF Gutters Logo"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-white"
              onError={(e) => {
                // Fallback to default logo if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            
            {/* Fallback Logo - Shows if image fails to load */}
            <div 
              className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full border-2 border-primary-600 flex items-center justify-center"
              style={{display: 'none'}}
            >
              <span className="text-primary-600 font-bold text-xs">CF</span>
            </div>
            
            <div className="text-white">
              <div className="font-bold text-sm md:text-lg">CF GUTTERS</div>
              <div className="text-xs opacity-75 hidden md:block">Professional Cleaning</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-white">
            <a href="#home" className="hover:text-primary-200 transition-colors">Home</a>
            <a href="#services" className="hover:text-primary-200 transition-colors">Services</a>
            <a href="#service-area" className="hover:text-primary-200 transition-colors">Service Area</a>
            <a href="#about" className="hover:text-primary-200 transition-colors">About</a>
            <a href="#gallery" className="hover:text-primary-200 transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-primary-200 transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-primary-200 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary-200 transition-colors">Contact</a>
          </div>

          {/* Phone Number - Desktop */}
          <a 
            href="tel:+18458793864" 
            className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold items-center gap-2 transition-colors"
          >
            <FiPhone size={16} />
            <span className="hidden lg:inline">(845) 879-3864</span>
            <span className="lg:hidden">Call</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-primary-900 border-t border-primary-800">
            <div className="px-4 py-2 space-y-1">
              <a 
                href="#home" 
                className="block px-3 py-2 text-white hover:bg-primary-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="block px-3 py-2 text-white hover:bg-primary-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#service-area" 
                className="block px-3 py-2 text-white hover:bg-primary-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Service Area
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 text-white hover:bg-primary-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#gallery" 
                className="block px-3 py-2 text-white hover:bg-primary-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#testimonials" 
                className="block px-3 py-2 text-white hover:bg-primary-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className="block px-3 py-2 text-white hover:bg-primary-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-white hover:bg-primary-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile Phone Button */}
              <a 
                href="tel:+18458793864" 
                className="block mx-3 mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <FiPhone className="inline mr-2" />
                Call (845) 879-3864
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;