import React, { useState } from 'react';
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'Professional Gutter Cleaning', href: '#gutter-cleaning' },
    { name: 'Gutter Guard Installation', href: '#gutter-guards' },
    { name: 'Gutter and Downspout Repairs', href: '#gutter-repairs' },
    { name: 'Roof Cleaning & Moss Treatment', href: '#basic-roof-cleaning' },
    { name: 'Soft Wash Roof Cleaning', href: '#soft-wash-cleaning' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images3/cf-gutters-logo.jpg" 
              alt="CF Gutters Logo"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-primary-500"
            />
            <div className="text-gray-900">
              <div className="font-bold text-lg md:text-xl">CF GUTTERS</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Contact
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary-600 transition-colors font-medium flex items-center gap-1">
                Services
                <FiChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="block px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#gallery" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Gallery
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              FAQs
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Testimonials
            </a>
          </nav>

          {/* Phone CTA - Desktop */}
          <a 
            href="tel:+18458793864" 
            className="hidden lg:flex bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold items-center gap-2 transition-colors"
          >
            <FiPhone size={18} />
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 p-2"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="space-y-1">
              <a 
                href="#home" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors flex items-center justify-between"
                >
                  Services
                  <FiChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a 
                href="#gallery" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#faq" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </a>
              <a 
                href="#testimonials" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              
              {/* Mobile Phone Button */}
              <a 
                href="tel:+18458793864" 
                className="block mx-4 mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors"
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
