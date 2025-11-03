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
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Y13juaD58zAYXRBJ4Yz1/media/67c0cf6328abdd31ec9dc3f2.png" 
              alt="Gutter Guard Installation"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Install Gutter Guards?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Gutter guards are a smart investment that prevents leaves, debris, and pests from clogging your gutters. Our professional installation ensures long-lasting protection and significantly reduces the need for frequent gutter cleaning.
              </p>
            </div>

            <div className="bg-secondary-50 p-8 rounded-xl mb-6">
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

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700">
                Homeowners with lots of trees nearby or those who want to minimize gutter maintenance and protect their investment.
              </p>
            </div>
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