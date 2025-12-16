import React from 'react';
import { FiCheckCircle, FiArrowLeft, FiShield } from 'react-icons/fi';
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
            Protect your gutters and reduce maintenance with professional gutter guard installation
          </p>
        </div>

        {/* Main Content */}
        {/* Before & After Comparison */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Before & After</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="bg-gray-600 text-white text-center py-2 font-bold text-lg">BEFORE</div>
              <img 
                src="https://customer-assets.emergentagent.com/job_gutter-pro-2/artifacts/i9ujmmyl_Screenshot%202025-12-15%20at%203.24.18%E2%80%AFAM.png" 
                alt="Gutter Before - Dirty and Clogged"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="bg-green-600 text-white text-center py-2 font-bold text-lg">AFTER</div>
              <img 
                src="https://customer-assets.emergentagent.com/job_gutter-pro-2/artifacts/ib31xvjm_Screenshot%202025-12-15%20at%203.24.59%E2%80%AFAM.png" 
                alt="Gutter After - Clean with Guard Installed"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Installation Video */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Watch Our Installation Process</h2>
          <div className="rounded-xl overflow-hidden shadow-lg max-w-lg mx-auto">
            <video 
              src="https://customer-assets.emergentagent.com/job_gutter-pro-2/artifacts/ki49q1ee_4603568939917450955.mov"
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left - Content */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Install Gutter Guards?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Gutter guards are a smart investment that prevents leaves, debris, and pests from clogging your gutters. Our professional installation ensures long-lasting protection and significantly reduces the need for frequent gutter cleaning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700">
                Homeowners with lots of trees nearby or those who want to minimize gutter maintenance and protect their investment.
              </p>
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="bg-secondary-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiShield className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Reduced Maintenance</strong>
                  <p className="text-gray-700 mt-1">Minimize the need for frequent gutter cleaning.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiShield className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Prevent Clogs</strong>
                  <p className="text-gray-700 mt-1">Keep leaves, debris, and pests out of your gutters.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiShield className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Extended Gutter Life</strong>
                  <p className="text-gray-700 mt-1">Protect your gutters from damage and corrosion.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiShield className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Year-Round Protection</strong>
                  <p className="text-gray-700 mt-1">Works in all seasons to keep gutters flowing freely.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Gutters?</h2>
          <p className="text-xl mb-8">Contact us today for a free quote on gutter guard installation</p>
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

export default GutterGuards;