import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <FiArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Satisfaction Guarantee</h2>
              <p>
                At CF Gutters, we are committed to providing high-quality service and ensuring customer satisfaction. If you are not completely satisfied with our work, please let us know within 7 days of service completion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Eligibility</h2>
              <p className="mb-3">
                Refunds may be issued in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Services were not performed as agreed</li>
                <li>Quality of work does not meet professional standards</li>
                <li>Services were cancelled by CF Gutters</li>
                <li>Weather conditions prevented service completion and rescheduling is not possible</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
              <p className="mb-3">
                To request a refund:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Contact us within 7 days of service completion</li>
                <li>Provide details about the issue or concern</li>
                <li>Allow us the opportunity to resolve the issue first</li>
                <li>If the issue cannot be resolved, we will process your refund request</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Timeline</h2>
              <p>
                Approved refunds will be processed within 5-7 business days. Refunds will be issued to the original payment method used for the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Situations</h2>
              <p className="mb-3">
                Refunds will not be issued in the following cases:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Customer cancellations with less than 24 hours notice</li>
                <li>Issues related to pre-existing property damage</li>
                <li>Requests made more than 7 days after service completion</li>
                <li>Normal wear and tear or maintenance issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about our refund policy or need to request a refund, please contact us:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Phone: <a href="tel:+18458793864" className="text-primary-600 hover:underline">(845) 879-3864</a></li>
                <li>Email: <a href="mailto:cfgutters02@gmail.com" className="text-primary-600 hover:underline">cfgutters02@gmail.com</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;