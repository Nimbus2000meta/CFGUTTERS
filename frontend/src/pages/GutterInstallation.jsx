import React from 'react';
import { FiCheckCircle, FiArrowLeft, FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const GutterInstallation = () => {
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
            Gutter Installation
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional gutter installation services to protect your home from water damage
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1632923057155-dd35366480d0?w=800&q=80" 
              alt="Gutter Installation"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Gutter Installation</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our expert team provides top-quality gutter installation services for residential and commercial properties. We use premium materials and proven techniques to ensure your gutters effectively channel water away from your foundation, protecting your home for years to come.
              </p>
            </div>

            <div className="bg-secondary-50 p-8 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiTool className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Custom Fit</strong>
                    <p className="text-gray-700 mt-1">Gutters precisely measured and cut for your home's exact specifications.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiTool className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Premium Materials</strong>
                    <p className="text-gray-700 mt-1">High-quality aluminum, copper, or steel gutters built to last.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiTool className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Foundation Protection</strong>
                    <p className="text-gray-700 mt-1">Properly installed gutters prevent water damage to your foundation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiTool className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Expert Installation</strong>
                    <p className="text-gray-700 mt-1">Professional installation with proper slope and secure mounting.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700">
                New construction, home renovations, replacing old or damaged gutters, or upgrading to seamless gutters for better performance and curb appeal.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for New Gutters?</h2>
          <p className="text-xl mb-8">Contact us today for a free estimate on gutter installation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+18458793864" 
              className="inline-block bg-white text-secondary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call (845) 879-3864
            </a>
            <Link 
              to="/contact-us" 
              className="inline-block bg-white text-secondary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GutterInstallation;
