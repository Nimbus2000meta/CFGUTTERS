import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'About', to: 'about' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'FAQ', to: 'faq' },
    { name: 'Contact', to: 'contact' },
  ];

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

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-6">
            <a href="#home" className="text-white hover:text-blue-300 cursor-pointer font-medium">Home</a>
            <a href="#services" className="text-white hover:text-blue-300 cursor-pointer font-medium">Services</a>
            <a href="#about" className="text-white hover:text-blue-300 cursor-pointer font-medium">About</a>
            <a href="#gallery" className="text-white hover:text-blue-300 cursor-pointer font-medium">Gallery</a>
            <a href="#testimonials" className="text-white hover:text-blue-300 cursor-pointer font-medium">Testimonials</a>
            <a href="#faq" className="text-white hover:text-blue-300 cursor-pointer font-medium">FAQ</a>
            <a href="#contact" className="text-white hover:text-blue-300 cursor-pointer font-medium">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-blue-800">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-blue-300 py-2 cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="tel:+18458793864" 
                className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-center"
              >
                <FiPhone className="inline mr-2" />
                (845) 879-3864
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;