import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services of CF Gutters, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <p>
                CF Gutters provides professional gutter cleaning, gutter guard installation, gutter repairs, roof cleaning, and moss treatment services. We reserve the right to modify or discontinue services at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Scheduling and Appointments</h2>
              <p>
                All service appointments must be scheduled in advance. We will make every effort to arrive at the scheduled time, but delays may occur due to weather conditions or other circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p>
                Payment is due upon completion of services unless otherwise agreed upon in writing. We accept cash, checks, and major credit cards. Late payments may incur additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation Policy</h2>
              <p>
                Cancellations must be made at least 24 hours in advance. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liability and Insurance</h2>
              <p>
                CF Gutters is fully licensed and insured. We take every precaution to protect your property during service. However, we are not responsible for pre-existing damage or issues not disclosed prior to service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Warranty</h2>
              <p>
                We stand behind the quality of our work. If you experience any issues with our service, please contact us within 7 days of service completion, and we will make it right.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Phone: <a href="tel:+18458793864" className="text-primary-600 hover:underline">(845) 879-3864</a></li>
                <li>Email: <a href="mailto:connor@cfgutters.com" className="text-primary-600 hover:underline">connor@cfgutters.com</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;