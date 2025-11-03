import React from 'react';
import { FiCheckCircle, FiArrowLeft, FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const GutterRepairs = () => {
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
            Gutter & Downspout Repairs
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Expert repairs to keep your gutter system functioning properly
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Y13juaD58zAYXRBJ4Yz1/media/67c0cf6328abdddf649dc3f3.png" 
              alt="Gutter and Downspout Repairs"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Gutter Repair Services</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Damaged gutters can lead to water damage, foundation issues, and costly repairs. Our expert team identifies and fixes all gutter problems quickly and efficiently, ensuring your system works perfectly.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Repairs:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiTool className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Leak Sealing</strong>
                    <p className="text-gray-700 mt-1">Fix leaks and prevent water damage to your home.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiTool className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Gutter Realignment</strong>
                    <p className="text-gray-700 mt-1">Correct sagging or misaligned gutters for proper drainage.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiTool className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Downspout Repairs</strong>
                    <p className="text-gray-700 mt-1">Fix or replace damaged downspouts and extensions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiTool className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Joint & Seam Repairs</strong>
                    <p className="text-gray-700 mt-1">Secure loose connections and prevent future leaks.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700">
                Homeowners experiencing water overflow, sagging gutters, or visible damage to their gutter system.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need Gutter Repairs?</h2>
          <p className="text-xl mb-8">Contact us today for a free inspection and repair quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+18458793864" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call (845) 879-3864
            </a>
            <Link 
              to="/contact-us" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GutterRepairs;