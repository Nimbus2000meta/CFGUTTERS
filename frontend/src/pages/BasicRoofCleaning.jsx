import React from 'react';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BasicRoofCleaning = () => {
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
            Basic Roof Cleaning & Moss Treatment
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Affordable roof maintenance to prevent moss buildup and extend your roof's life
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Y13juaD58zAYXRBJ4Yz1/media/67bdffbcf5a96f29ddd02b19.png" 
                alt="Roof Cleaning"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Y13juaD58zAYXRBJ4Yz1/media/67be017f963eccdde021734b.png" 
                alt="Moss Treatment"
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Basic Roof Cleaning?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you need a simple, budget-friendly solution to remove moss and debris, our <strong>Basic Roof Cleaning & Moss Treatment</strong> is the perfect choice. This service helps maintain your roof and prevent future moss buildup.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700">
                Homeowners looking for an affordable way to maintain their roof and prevent future moss buildup.
              </p>
            </div>
          </div>

          {/* Right - Process */}
          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Process:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Moss Removal</strong>
                  <p className="text-gray-700 mt-1">We gently brush off moss and remove debris from your roof.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Thorough Leaf-Blowing</strong>
                  <p className="text-gray-700 mt-1">Clears your roof and gutters of all loose debris.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Moss-Preventative Treatment</strong>
                  <p className="text-gray-700 mt-1">Apply zinc Moss Out or similar treatment to slow regrowth and keep your roof clean longer.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Cleaner Roof?</h2>
          <p className="text-xl mb-8">Contact us today for a free quote on basic roof cleaning services</p>
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

export default BasicRoofCleaning;