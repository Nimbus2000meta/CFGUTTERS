import React, { useState } from 'react';
import { FiCheck, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    appointmentDate: '',
    streetAddress: '',
    city: '',
    state: '',
    serviceNeeded: '',
    hasSolarPanels: false,
    hasGutterGuards: false,
    propertyType: 'Residential',
    additionalConcerns: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.appointmentDate) newErrors.appointmentDate = 'Date is required';
    if (!formData.streetAddress.trim()) newErrors.streetAddress = 'Address is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields correctly.' });
      return;
    }
    
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '✓ Thank you! Your request has been sent. We\'ll contact you shortly!' 
        });
        // Reset form
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          appointmentDate: '',
          streetAddress: '',
          city: '',
          state: '',
          serviceNeeded: '',
          hasSolarPanels: false,
          hasGutterGuards: false,
          propertyType: 'Residential',
          additionalConcerns: ''
        });
        setErrors({});
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again or call us at 845-879-3864.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const inputClass = (fieldName) => `w-full px-4 py-3 border ${
    errors[fieldName] 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-gray-300 focus:ring-primary-500'
  } rounded-lg focus:ring-2 focus:border-transparent transition-all`;

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Request a <span className="text-primary-600">Free Quote</span> Today!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Fill out our online contact form or give us a call to request a free, no-obligation estimate for any of our services. We'll respond promptly to discuss your needs and provide a transparent quote.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-bold text-gray-900">
              Call Now: <a href="tel:+18458793864" className="text-primary-600 hover:text-primary-700">845-879-3864</a>
            </p>
            <p className="text-lg text-gray-700">
              Email Us: <a href="mailto:cfgutters02@gmail.com" className="text-secondary-600 hover:text-secondary-700">cfgutters02@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Status Messages */}
          {status.message && (
            <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
              status.type === 'success' 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            } animate-fade-in`}>
              {status.type === 'success' ? (
                <FiCheck className="w-5 h-5 mt-0.5 flex-shrink-0" />
              ) : (
                <FiAlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              )}
              <p className="font-medium">{status.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputClass('fullName')}
                  placeholder="Your full name"
                  data-testid="full-name-input"
                />
                {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass('phone')}
                  placeholder="Your phone number"
                  data-testid="phone-input"
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                  placeholder="Your email address"
                  data-testid="email-input"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Appointment Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  name="appointmentDate"
                  required
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={inputClass('appointmentDate')}
                  data-testid="appointment-date-input"
                />
                {errors.appointmentDate && <p className="text-red-600 text-sm mt-1">{errors.appointmentDate}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Street Address <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="streetAddress"
                required
                value={formData.streetAddress}
                onChange={handleChange}
                className={inputClass('streetAddress')}
                placeholder="Street address"
                data-testid="street-address-input"
              />
              {errors.streetAddress && <p className="text-red-600 text-sm mt-1">{errors.streetAddress}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="City"
                  data-testid="city-input"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="State"
                  data-testid="state-input"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Service Needed
              </label>
              <select
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                data-testid="service-needed-select"
              >
                <option value="">Select a service</option>
                <option value="Gutter Cleaning">Gutter Cleaning</option>
                <option value="Gutter Guard Installations">Gutter Guard Installations</option>
                <option value="Gutter & Downspout Repairs">Gutter & Downspout Repairs</option>
                <option value="Basic Roof Cleaning & Moss Treatment">Basic Roof Cleaning & Moss Treatment</option>
                <option value="Complete Soft Wash Roof Cleaning">Complete Soft Wash Roof Cleaning</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Check all that apply
              </label>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    name="hasSolarPanels"
                    checked={formData.hasSolarPanels}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                    data-testid="solar-panels-checkbox"
                  />
                  <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">Have solar panels</span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    name="hasGutterGuards"
                    checked={formData.hasGutterGuards}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                    data-testid="gutter-guards-checkbox"
                  />
                  <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">Gutter Guards Installed on Gutters</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Property Type <span className="text-red-600">*</span>
              </label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="propertyType"
                    value="Residential"
                    checked={formData.propertyType === 'Residential'}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                    data-testid="residential-radio"
                  />
                  <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">Residential</span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="propertyType"
                    value="Commercial"
                    checked={formData.propertyType === 'Commercial'}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                    data-testid="commercial-radio"
                  />
                  <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">Commercial</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Concerns
              </label>
              <textarea
                name="additionalConcerns"
                value={formData.additionalConcerns}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Tell us about any specific concerns or requirements..."
                data-testid="additional-concerns-textarea"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              data-testid="submit-button"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Submit Request'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;