import React from 'react';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SoftWashCleaning = () => {
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
            Complete Soft Wash Roof Cleaning
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Deep, thorough cleaning that restores your roof to like-new condition
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Y13juaD58zAYXRBJ4Yz1/media/67be03c0c8e5a8d1834271f8.png" 
                alt="Soft Wash Roof Cleaning"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Y13juaD58zAYXRBJ4Yz1/media/67be042441344641a9576f52.png" 
                alt="Soft Wash Results"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left - Content */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Soft Wash Cleaning</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For a more thorough clean that restores your roof to its original condition, we recommend our <strong>Complete Soft Wash Roof Cleaning</strong>. This premium service eliminates all moss, algae, and stains without damaging your shingles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700">
                Homeowners with roofs suffering from heavy moss, algae, or staining. Ideal for those seeking a more noticeable and long-lasting clean.
              </p>
            </div>
          </div>

          {/* Right - Process */}
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Process:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-primary-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Low-Pressure Soft Wash System</strong>
                  <p className="text-gray-700 mt-1">Safe for all roof types - no high pressure that can damage shingles.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-primary-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Specialized Cleaning Solution</strong>
                  <p className="text-gray-700 mt-1">Professional-grade mix of bleach and surfactant removes all contaminants.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-primary-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Complete Restoration</strong>
                  <p className="text-gray-700 mt-1">Eliminates moss, algae, and stains, leaving your roof looking completely refreshed.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-primary-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Long-Lasting Results</strong>
                  <p className="text-gray-700 mt-1">Prevents regrowth and keeps your roof cleaner for years.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Roof?</h2>
          <p className="text-xl mb-8">Contact us today for a free quote on complete soft wash roof cleaning</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+18458793864" 
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call (845) 879-3864
            </a>
            <Link 
              to="/contact-us" 
              className="inline-block bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftWashCleaning;