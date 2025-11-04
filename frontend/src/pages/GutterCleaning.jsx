import React from 'react';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const GutterCleaning = () => {
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
            Professional Gutter Cleaning Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Keep your gutters clear and functional year-round with our expert cleaning services
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Y13juaD58zAYXRBJ4Yz1/media/67c8b25739ce95f028b8feca.png" 
              alt="Professional Gutter Cleaning"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Gutter Cleaning?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Clogged gutters can cause serious damage to your home, leading to water overflow, foundation issues, and roof leaks. At <strong>CF Gutters</strong>, we provide <strong>expert gutter cleaning</strong> services to keep your <strong>gutters clear</strong> and functional year-round.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Process:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Debris Removal</strong>
                    <p className="text-gray-700 mt-1">We remove leaves, twigs, and buildup from your gutters.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Downspout Flushing</strong>
                    <p className="text-gray-700 mt-1">Ensures proper drainage and prevents blockages.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Gutter Guard Installation</strong>
                    <p className="text-gray-700 mt-1">Helps keep gutters clean for longer.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Gutter Inspection</strong>
                    <p className="text-gray-700 mt-1">We check for leaks, damage, or misalignment.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Best For:</h3>
              <p className="text-gray-700">
                Homeowners looking for an affordable way to maintain their gutters and prevent water damage to their property.
              </p>
            </div>
          </div>
        </div>

        {/* Before/After Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Y13juaD58zAYXRBJ4Yz1/media/67c0cf6328abdd31ec9dc3f2.png" 
                alt="Gutter Cleaning Before"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Y13juaD58zAYXRBJ4Yz1/media/67c0cf6328abdddf649dc3f3.png" 
                alt="Gutter Cleaning After"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a free quote on professional gutter cleaning services</p>
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

export default GutterCleaning;