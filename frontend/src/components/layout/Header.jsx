import React, { useState } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-blue-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">CF</span>
            </div>
            <div className="text-white">
              <div className="font-bold text-lg">CF GUTTERS</div>
              <div className="text-xs opacity-75">Professional Cleaning</div>
            </div>
          </div>

          {/* Navigation Menu - Always visible */}
          <div className="flex items-center space-x-6 text-white">
            <a href="#home" className="hover:text-blue-300">Home</a>
            <a href="#services" className="hover:text-blue-300">Services</a>
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#service-area" className="hover:text-blue-300">Service Area</a>
            <a href="#gallery" className="hover:text-blue-300">Gallery</a>
            <a href="#testimonials" className="hover:text-blue-300">Testimonials</a>
            <a href="#faq" className="hover:text-blue-300">FAQ</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </div>

          {/* Phone Number */}
          <a 
            href="tel:+18458793864" 
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
          >
            <FiPhone size={16} />
            (845) 879-3864
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;