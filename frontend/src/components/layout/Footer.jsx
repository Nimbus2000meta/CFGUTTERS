import React from 'react';
import { FiFacebook, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Mobile Contact Info Bar */}
      <div className="lg:hidden bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
            <a href="tel:+18458793864" className="flex items-center gap-2 text-gray-300 hover:text-white">
              <FiPhone className="text-primary-400" size={16} />
              <span>(845) 879-3864</span>
            </a>
            <span className="text-gray-600">|</span>
            <a href="mailto:connor@cfgutters.com" className="flex items-center gap-2 text-gray-300 hover:text-white">
              <FiMail className="text-primary-400" size={16} />
              <span>connor@cfgutters.com</span>
            </a>
            <span className="text-gray-600">|</span>
            <a href="/#service-area" className="flex items-center gap-2 text-gray-300 hover:text-white">
              <FiMapPin className="text-primary-400" size={16} />
              <span>Mahopac NY - Westport CT</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/Gutter-Cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link to="/Gutter-Guard-Installation" className="text-gray-400 hover:text-white transition-colors">
                  Gutter Guard Installation
                </Link>
              </li>
              <li>
                <Link to="/Gutter-Downspout-Repairs" className="text-gray-400 hover:text-white transition-colors">
                  Gutter & Downspout Repairs
                </Link>
              </li>
              <li>
                <Link to="/Roof-Cleaning-Moss-Treatment" className="text-gray-400 hover:text-white transition-colors">
                  Roof Cleaning & Moss Treatment
                </Link>
              </li>
              <li>
                <Link to="/Soft-Wash-Roof-Cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Soft Wash Roof Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="mailto:connor@cfgutters.com" className="text-gray-400 hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <a href="/#service-area" className="text-gray-400 hover:text-white transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Policy Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Policy</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/Terms-of-Service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/Refund-Policy" className="text-gray-400 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/Privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2">
                <strong>Mahopac NY to Westport CT</strong>
              </p>
              <p className="text-gray-500 text-sm">
                Copyright 2024 © All rights Reserved. CF Gutters
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61567485513010" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;