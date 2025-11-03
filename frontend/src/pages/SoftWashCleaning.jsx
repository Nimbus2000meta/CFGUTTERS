import React from 'react';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SoftWashCleaning = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Soft Wash Roof Cleaning
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Thorough clean that restores your roof to its original condition
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/images2/house-ladder.png" 
              alt="Soft Wash Roof Cleaning"
              className="w-full h-96 object-cover"
            />
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Roof Restoration</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For a more thorough clean that restores your roof to its original condition, we recommend our <strong>Complete Soft Wash Roof Cleaning.</strong> This professional service eliminates all moss, algae, and stains.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Process:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Low-Pressure Soft Wash</strong>
                    <p className="text-gray-700 mt-1">We use a low-pressure soft wash system combined with a specialized cleaning solution (a mix of bleach and surfactant) to remove all moss, algae, and stains.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Safe for Shingles</strong>
                    <p className="text-gray-700 mt-1">This method eliminates contaminants without damaging shingles, leaving your roof looking completely refreshed.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Long-Lasting Results</strong>
                    <p className="text-gray-700 mt-1">Professional treatment that keeps your roof clean longer.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700">
                Homeowners with roofs suffering from heavy moss, algae, or staining. Ideal for those seeking a more noticeable and long-lasting clean.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Roof Today</h2>
          <p className="text-xl mb-8">Get a free quote on complete soft wash roof cleaning</p>
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

export default SoftWashCleaning;