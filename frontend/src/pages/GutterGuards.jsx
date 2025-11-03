import React from 'react';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const GutterGuards = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gutter Guard Installation
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Protect your gutters with high-quality guards that prevent debris buildup
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/images2/house-ladder.png" 
              alt="Gutter Guard Installation"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Install Gutter Guards?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Protect your gutters with high-quality gutter guards that prevent debris buildup and reduce maintenance needs. Our professional installation ensures long-term protection for your home.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">High-Quality Materials</strong>
                    <p className="text-gray-700 mt-1">Durable guards designed to last for years.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Custom Fitting</strong>
                    <p className="text-gray-700 mt-1">Perfectly sized to your home's gutter system.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Long-Term Protection</strong>
                    <p className="text-gray-700 mt-1">Prevents clogs and extends gutter lifespan.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Reduced Maintenance</strong>
                    <p className="text-gray-700 mt-1">Less frequent cleaning required.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700">
                Homeowners who want to minimize gutter maintenance and protect their investment long-term.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Protect Your Gutters Today</h2>
          <p className="text-xl mb-8">Get a free quote on professional gutter guard installation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+18458793864" 
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call (845) 879-3864
            </a>
            <Link 
              to="/#contact" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GutterGuards;