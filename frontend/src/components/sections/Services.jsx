import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-primary-600">CF Gutters?</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At <strong>CF Gutters</strong>, we believe every home deserves <strong>quality care</strong> and reliable service—without breaking the bank. With over <strong>10 years</strong> of experience, we provide top-notch <strong>gutter cleaning</strong>, repairs, and <strong>installations</strong> that protect your home year-round.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Gutter & Roof Cleaning</h3>
            <p className="text-gray-600">Our trained professionals use the safest and most effective cleaning methods.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
            <p className="text-gray-600">We offer cost-effective solutions tailored to your needs.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-secondary-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly Cleaning Solutions</h3>
            <p className="text-gray-600">Our trained professionals use the safest and most effective cleaning methods.</p>
          </div>
        </div>

        {/* Main Services Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Local Experts in <span className="text-primary-600">Gutter Cleaning</span>, Repairs & Guard Installation
          </h2>
          <p className="text-xl text-gray-700 font-semibold">
            Plus Roof Soft Wash & Moss Treatment!
          </p>
        </div>

        {/* Professional Gutter Cleaning Service */}
        <div id="gutter-cleaning" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Gutter Cleaning Services
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Clogged gutters can cause serious damage to your home, leading to water overflow, foundation issues, and roof leaks. At <strong>CF Gutters</strong>, we provide <strong>expert gutter cleaning</strong> services to keep your <strong>gutters clear</strong> and functional year-round.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Process:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Debris Removal</strong> – We remove leaves, twigs, and buildup from your gutters.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Downspout Flushing</strong> – Ensures proper drainage and prevents blockages.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Gutter Guard Installation</strong> – Helps keep gutters clean for longer
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Gutter Inspection</strong> – We check for leaks, damage, or misalignment.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Best For:</h4>
                <p className="text-gray-700">
                  Homeowners looking for an affordable way to maintain their roof and prevent future moss buildup.
                </p>
              </div>

              <Link 
                to="/contact-us" 
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <div className="bg-gray-600 text-white text-center py-2 font-bold text-lg">BEFORE</div>
                  <img 
                    src="https://customer-assets.emergentagent.com/job_gutter-pro-2/artifacts/9vhlf0r7_Screenshot%202025-12-16%20at%201.16.54%E2%80%AFAM.png" 
                    alt="Gutter Before Cleaning"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <div className="bg-green-600 text-white text-center py-2 font-bold text-lg">AFTER</div>
                  <img 
                    src="https://customer-assets.emergentagent.com/job_gutter-pro-2/artifacts/lyvdzl1v_Screenshot%202025-12-16%20at%201.16.36%E2%80%AFAM.png" 
                    alt="Gutter After Cleaning"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gutter Guard Installation */}
        <div id="gutter-guards" className="mb-20 bg-white p-8 rounded-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Gutter Guard Installation
              </h3>
              <p className="text-gray-700 mb-6">
                Protect your gutters with high-quality gutter guards that prevent debris buildup and reduce maintenance needs.
              </p>
              <Link 
                to="/contact-us" 
                className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_gutter-pro-2/artifacts/klmhh4za_Screenshot%202025-12-16%20at%201.30.05%E2%80%AFAM.png" 
                    alt="Gutter Guard Installation"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_gutter-pro-2/artifacts/hhw3yhhx_Screenshot%202025-12-16%20at%201.30.32%E2%80%AFAM.png" 
                    alt="Gutter Guard Installation"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gutter Repairs */}
        <div id="gutter-repairs" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/gutter-repairs.png" 
                alt="Gutter & Downspout Repairs"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Gutter & Downspout Repairs
              </h3>
              <p className="text-gray-700 mb-6">
                Restore your gutter system functionality with our expert repair services for leaks, sagging, and damage.
              </p>
              <Link 
                to="/contact-us" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Basic Roof Cleaning */}
        <div id="basic-roof-cleaning" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Y13juaD58zAYXRBJ4Yz1/media/67bdffbcf5a96f29ddd02b19.png" 
                  alt="Basic Roof Cleaning"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Basic Roof Cleaning & Moss Treatment
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you need a simple, budget-friendly solution to remove moss and debris, our <strong>Basic Roof Cleaning & Moss Treatment</strong> is the perfect choice.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Process:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
                    <div>We gently brush off moss and remove debris from your roof.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
                    <div>A thorough leaf-blowing clears your roof and gutters.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
                    <div>We apply a moss-preventative treatment (such as zinc Moss Out) to slow regrowth and keep your roof clean longer.</div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Best For:</h4>
                <p className="text-gray-700">
                  Homeowners looking for an affordable way to maintain their roof and prevent future moss buildup.
                </p>
              </div>

              <Link 
                to="/contact-us" 
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Soft Wash Roof Cleaning */}
        <div id="soft-wash-cleaning" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Soft Wash Roof Cleaning
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For a more thorough clean that restores your roof to its original condition, we recommend our <strong>Complete Soft Wash Roof Cleaning.</strong>
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-4">Process:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
                    <div>We use a low-pressure soft wash system combined with a specialized cleaning solution (a mix of bleach and surfactant) to remove all moss, algae, and stains.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-600 text-xl mt-0.5 flex-shrink-0" />
                    <div>This method eliminates contaminants without damaging shingles, leaving your roof looking completely refreshed.</div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg text-gray-900 mb-2">Best For:</h4>
                <p className="text-gray-700">
                  Homeowners with roofs suffering from heavy moss, algae, or staining. Ideal for those seeking a more noticeable and long-lasting clean.
                </p>
              </div>

              <Link 
                to="/contact-us" 
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Y13juaD58zAYXRBJ4Yz1/media/67be03c0c8e5a8d1834271f8.png" 
                  alt="Soft Wash Roof Cleaning"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Which Option Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Which <span className="text-yellow-300">Option</span> is Right for You?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <p className="text-center text-lg">
                If you want a budget-friendly way to prevent moss and maintain your roof, go with the <strong>Basic Cleaning & Moss Treatment</strong>.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <p className="text-center text-lg">
                If you prefer a fully restored, deep-cleaned roof, our <strong>Complete Soft Wash</strong> is the best choice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;