import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import Contact from '../components/sections/Contact';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch with CF Gutters for a free quote or to schedule your service
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Phone</h3>
            <a href="tel:+18458793864" className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
              +1 (845) 879-3864
            </a>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md text-center overflow-hidden">
            <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Email</h3>
            <a href="mailto:cfgutters02@gmail.com" className="text-secondary-600 hover:text-secondary-700 text-xs sm:text-sm font-semibold break-all">
              cfgutters02@gmail.com
            </a>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Business Hours</h3>
            <p className="text-gray-700 text-sm">
              Monday-Saturday<br />
              8 AM to 6 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <Contact />
      </div>
    </div>
  );
};

export default ContactUs;