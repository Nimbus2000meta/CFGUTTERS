import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
              <div className="flex items-center text-white">
                <div className="mr-3 w-10 h-10 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center">
                  <div className="text-blue-600 font-bold text-xs">CF</div>
                </div>
                <div>
                  <div className="text-xl font-bold">CF GUTTERS</div>
                  <div className="text-xs opacity-75">Professional Cleaning</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white font-medium text-sm tracking-wide cursor-pointer transition-colors hover:text-blue-300"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+18458793864" 
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <FiPhone /> (845) 879-3864
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden text-white text-2xl p-2"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-blue-800 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-white font-medium transition-colors hover:text-blue-300"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="tel:+18458793864" 
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
              >
                <FiPhone /> (845) 879-3864
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;