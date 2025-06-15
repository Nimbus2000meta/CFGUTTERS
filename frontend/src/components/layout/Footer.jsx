import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px'}}>
          
          {/* Company Info - Logo and Details */}
          <div style={{gridColumn: '1 / -1'}} className="md:col-span-1 text-center">
            <div style={{marginBottom: '16px'}} className="flex flex-col items-center">
              {/* Logo Image - Replace src with your logo image URL */}
              <img 
                src="/images/cf-gutters-logo.jpg" 
                alt="CF Gutters Logo"
                style={{
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  border: '2px solid white',
                  marginBottom: '12px'
                }}
                className="md:w-20 md:h-20"
                onError={(e) => {
                  // Fallback to default SVG logo if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              
              {/* Fallback SVG Logo - Shows if image fails to load */}
              <svg
                width="60"
                height="60"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{marginBottom: '12px', display: 'none'}}
                className="md:w-20 md:h-20"
              >
                <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="8" fill="#1e40af"/>
                <circle cx="100" cy="100" r="85" stroke="white" strokeWidth="2" fill="#1e40af"/>
                <path d="M30 110 L60 75 L90 75 L140 75 L170 110 L165 120 L35 120 Z" fill="white"/>
                <path d="M70 75 L100 45 L130 75 L125 72 L100 52 L75 72 Z" fill="white"/>
                <path d="M80 75 L100 58 L120 75 L115 73 L100 63 L85 73 Z" fill="#93c5fd"/>
                <rect x="30" y="110" width="140" height="8" fill="white"/>
                <path d="M35 125 L50 125" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M55 128 L70 128" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M75 131 L90 131" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M110 128 L125 128" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M130 131 L145 131" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M150 125 L165 125" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <rect x="167" y="110" width="6" height="25" fill="white"/>
                <rect x="165" y="133" width="10" height="4" fill="white"/>
                <text x="100" y="155" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">CF GUTTERS</text>
              </svg>
            </div>
            
            {/* Social Media Links - Centered */}
            <div className="flex justify-center flex-wrap gap-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61567485513010"
                target="_blank"
                rel="noopener noreferrer"
                style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', textDecoration: 'none'}}
                className="hover:text-white transition-colors"
              >
                <FiFacebook style={{fontSize: '18px'}} />
                <span style={{fontSize: '14px'}}>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/cfgutters"
                target="_blank"
                rel="noopener noreferrer"
                style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', textDecoration: 'none'}}
                className="hover:text-white transition-colors"
              >
                <FaInstagram style={{fontSize: '18px'}} />
                <span style={{fontSize: '14px'}}>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@cfgutters"
                target="_blank"
                rel="noopener noreferrer"
                style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', textDecoration: 'none'}}
                className="hover:text-white transition-colors"
              >
                <FaTiktok style={{fontSize: '18px'}} />
                <span style={{fontSize: '14px'}}>TikTok</span>
              </a>
            </div>
            
            {/* Copyright and Location - Centered */}
            <div style={{fontSize: '14px', color: '#cbd5e1'}} className="text-center">
              <p style={{marginBottom: '8px'}}>Copyright {currentYear} © All rights Reserved. CF Gutters</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}} className="justify-center">
                <FiMapPin style={{color: '#00af80'}} />
                <span>Mahopac NY to Westport CT</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', color: 'white'}} className="md:text-xl">Services</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  Gutter Cleaning
                </Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  Gutter Guard Installation
                </Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  Gutter Downspout Repairs
                </Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  Roof Cleaning & Moss Treatment
                </Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  Soft Wash Roof Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div className="text-center md:text-left">
            <h4 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', color: 'white'}} className="md:text-xl">Get Started</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <a
                  href="mailto:cfgutters02@gmail.com"
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none'}}
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="text-center md:text-left">
            <h4 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', color: 'white'}} className="md:text-xl">About</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  Contact us
                </Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="service-area"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  Service Areas
                </Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Policy */}
          <div className="text-center md:text-left">
            <h4 style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', color: 'white'}} className="md:text-xl">Our Policy</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: '8px'}}>
                <a href="#" style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none'}} className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li style={{marginBottom: '8px'}}>
                <a href="#" style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none'}} className="hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
              <li style={{marginBottom: '8px'}}>
                <a href="#" style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none'}} className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{color: '#cbd5e1', fontSize: '14px', textDecoration: 'none', cursor: 'pointer'}}
                  className="hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;