import React from 'react';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const BasicRoofCleaning = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Basic Roof Cleaning & Moss Treatment
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Budget-friendly solution to remove moss and debris with preventative treatment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/images2/house-ladder.png" 
              alt="Basic Roof Cleaning"
              className="w-full h-96 object-cover"
            />
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Affordable Roof Maintenance</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you need a simple, budget-friendly solution to remove moss and debris, our <strong>Basic Roof Cleaning & Moss Treatment</strong> is the perfect choice.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Process:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">We gently brush off moss and remove debris from your roof.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">A thorough leaf-blowing clears your roof and gutters.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">We apply a moss-preventative treatment (such as zinc Moss Out) to slow regrowth and keep your roof clean longer.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700">
                Homeowners looking for an affordable way to maintain their roof and prevent future moss buildup.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Affordable Roof Maintenance</h2>
          <p className="text-xl mb-8">Get a free quote on basic roof cleaning and moss treatment</p>
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

export default BasicRoofCleaning;