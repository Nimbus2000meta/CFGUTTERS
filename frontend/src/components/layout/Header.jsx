import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone, FiChevronDown, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
    setCloseTimeout(timeout);
  };

  const services = [
    { name: 'Professional Gutter Cleaning', href: '/Gutter-Cleaning' },
    { name: 'Gutter Installation', href: '/Gutter-Installation' },
    { name: 'Gutter Guard Installation', href: '/Gutter-Guard-Installation' },
    { name: 'Gutter and Downspout Repairs', href: '/Gutter-Downspout-Repairs' },
    { name: 'Roof Cleaning & Moss Treatment', href: '/Roof-Cleaning-Moss-Treatment' },
    { name: 'Soft Wash Roof Cleaning', href: '/Soft-Wash-Roof-Cleaning' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Combined Header */}
      <div className="bg-primary-600 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="/images3/cf-gutters-logo.jpg" 
                alt="CF Gutters Logo"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-lg"
              />
              <div className="text-white">
                <div className="font-bold text-lg md:text-xl">CF GUTTERS</div>
                <div className="hidden md:block text-xs text-white/80">Mahopac NY to Westport CT</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link 
                to="/" 
                className="text-white hover:text-gray-200 transition-colors font-medium"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Home
              </Link>
              <a href="/#about" className="text-white hover:text-gray-200 transition-colors font-medium">
                About
              </a>
              <Link 
                to="/contact-us" 
                className="text-white hover:text-gray-200 transition-colors font-medium"
              >
                Contact
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-white hover:text-gray-200 transition-colors font-medium flex items-center gap-1">
                  Services
                  <FiChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/gallery" 
                className="text-white hover:text-gray-200 transition-colors font-medium"
              >
                Gallery
              </Link>
              <a href="/#faq" className="text-white hover:text-gray-200 transition-colors font-medium">
                FAQs
              </a>
            </nav>

            {/* Contact Info & CTA - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+18458793864" className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
                <FiPhone size={16} />
                <span className="font-semibold text-sm">(845) 879-3864</span>
              </a>
              <a 
                href="tel:+18458793864" 
                className="bg-white hover:bg-gray-100 text-primary-600 px-6 py-2 rounded-full font-semibold transition-colors text-sm"
              >
                Get Started
              </a>
            </div>

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
            <div className="lg:hidden bg-primary-700 border-t border-primary-500 py-4">
              <div className="space-y-1">
                <Link 
                  to="/" 
                  className="block px-4 py-3 text-white hover:bg-primary-500 rounded transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Home
                </Link>
                <a 
                  href="/#about" 
                  className="block px-4 py-3 text-white hover:bg-primary-500 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <Link 
                  to="/contact-us" 
                  className="block px-4 py-3 text-white hover:bg-primary-500 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full text-left px-4 py-3 text-white hover:bg-primary-500 rounded transition-colors flex items-center justify-between"
                  >
                    Services
                    <FiChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="block px-4 py-2 text-sm text-white/90 hover:bg-primary-500 rounded"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  to="/gallery" 
                  className="block px-4 py-3 text-white hover:bg-primary-500 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
                <a 
                  href="/#faq" 
                  className="block px-4 py-3 text-white hover:bg-primary-500 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  FAQs
                </a>
                
                {/* Mobile Contact Info */}
                <div className="px-4 py-3 border-t border-primary-500 mt-2 pt-4 space-y-2">
                  <a href="tel:+18458793864" className="flex items-center gap-2 text-white">
                    <FiPhone size={16} />
                    <span>+1 (845) 879-3864</span>
                  </a>
                  <a href="mailto:cfgutters02@gmail.com" className="flex items-center gap-2 text-white">
                    <FiMail size={16} />
                    <span>cfgutters02@gmail.com</span>
                  </a>
                  <a href="/#service-area" className="flex items-center gap-2 text-white" onClick={() => setIsOpen(false)}>
                    <FiMapPin size={16} />
                    <span>Mahopac NY to Westport CT</span>
                  </a>
                </div>
                
                {/* Mobile Phone Button */}
                <a 
                  href="tel:+18458793864" 
                  className="block mx-4 mt-4 bg-white hover:bg-gray-100 text-primary-600 px-4 py-3 rounded-full font-semibold text-center transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
