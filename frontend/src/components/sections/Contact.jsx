import React, { useState } from 'react';
import { FiCheck, FiAlertCircle, FiUser, FiPhone, FiMail, FiCalendar, FiMapPin, FiEdit } from 'react-icons/fi';

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
      console.log('[Form Submit] Backend URL:', backendUrl);
      console.log('[Form Submit] Submitting data:', formData);
      
      // Add a small delay to appear more human-like (helps with bot detection)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(formData),
        credentials: 'same-origin',
        mode: 'cors',
      });

      console.log('[Form Submit] Response status:', response.status);
      console.log('[Form Submit] Response ok:', response.ok);
      
      let responseData;
      try {
        const responseText = await response.text();
        console.log('[Form Submit] Raw response text:', responseText);
        responseData = responseText ? JSON.parse(responseText) : {};
        console.log('[Form Submit] Response data:', responseData);
      } catch (parseError) {
        console.error('[Form Submit] Failed to parse response:', parseError);
        responseData = {};
      }

      if (response.ok) {
        console.log('[Form Submit] Success!');
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
        console.error('[Form Submit] Response not ok:', response.status, responseData);
        
        // Handle specific error codes
        if (response.status === 403) {
          // Retry once after a longer delay for 403 errors
          console.log('[Form Submit] Got 403, retrying after delay...');
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          const retryResponse = await fetch(`${backendUrl}/api/contact`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(formData),
            credentials: 'same-origin',
            mode: 'cors',
          });
          
          if (retryResponse.ok) {
            console.log('[Form Submit] Retry successful!');
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
            return;
          }
          
          throw new Error('Request blocked by security policy. Please try again or contact us directly.');
        }
        
        throw new Error(`Failed to submit form: ${responseData.detail || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('[Form Submit] ERROR:', error);
      console.error('[Form Submit] Error type:', error.constructor.name);
      console.error('[Form Submit] Error message:', error.message);
      
      // Provide specific error message for 403
      let errorMessage;
      if (error.message.includes('403') || error.message.includes('security policy')) {
        errorMessage = 'We\'re experiencing a technical issue with our form. Please contact us directly at 845-879-3864 or email cfgutters02@gmail.com. We apologize for the inconvenience.';
      } else {
        errorMessage = 'Something went wrong. Please try again in a moment or call us at 845-879-3864.';
      }
      
      setStatus({ 
        type: 'error', 
        message: errorMessage
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

  const inputClass = (fieldName) => `w-full pl-12 pr-4 py-3.5 border-2 ${
    errors[fieldName] 
      ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
      : 'border-gray-200 focus:border-primary-500 focus:ring-primary-100'
  } rounded-xl focus:ring-4 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-400`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Request a <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Free Quote</span> Today!
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Fill out our online contact form or give us a call to request a free, no-obligation estimate for any of our services. We'll respond promptly to discuss your needs and provide a transparent quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+18458793864" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <FiPhone className="w-5 h-5" />
              845-879-3864
            </a>
            <a href="mailto:cfgutters02@gmail.com" className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg border-2 border-gray-200">
              <FiMail className="w-5 h-5 text-secondary-600" />
              cfgutters02@gmail.com
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          {/* Status Messages */}
          {status.message && (
            <div className={`mb-8 p-5 rounded-2xl flex items-start gap-4 ${
              status.type === 'success' 
                ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800' 
                : 'bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 text-red-800'
            } animate-fade-in shadow-md`}>
              <div className={`p-2 rounded-full ${status.type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
                {status.type === 'success' ? (
                  <FiCheck className="w-6 h-6" />
                ) : (
                  <FiAlertCircle className="w-6 h-6" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg">{status.type === 'success' ? 'Success!' : 'Oops!'}</p>
                <p className="text-sm mt-1">{status.message}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8" data-testid="contact-form">
            {/* Name and Phone Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass('fullName')}
                    placeholder="John Doe"
                    data-testid="full-name-input"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FiAlertCircle className="w-4 h-4" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiPhone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass('phone')}
                    placeholder="(555) 123-4567"
                    data-testid="phone-input"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FiAlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Email and Date Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                    placeholder="john@example.com"
                    data-testid="email-input"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FiAlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Preferred Appointment Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiCalendar className="h-5 w-5 text-gray-400" />
                  </div>
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
                </div>
                {errors.appointmentDate && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FiAlertCircle className="w-4 h-4" />
                    {errors.appointmentDate}
                  </p>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-semibold">Property Information</span>
              </div>
            </div>

            {/* Street Address */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Street Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiMapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="streetAddress"
                  required
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className={inputClass('streetAddress')}
                  placeholder="123 Main Street"
                  data-testid="street-address-input"
                />
              </div>
              {errors.streetAddress && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FiAlertCircle className="w-4 h-4" />
                  {errors.streetAddress}
                </p>
              )}
            </div>

            {/* City and State Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                  placeholder="City"
                  data-testid="city-input"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                  placeholder="State"
                  data-testid="state-input"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-semibold">Service Details</span>
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Service Needed
              </label>
              <select
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 focus:outline-none transition-all duration-200 text-gray-800 bg-white cursor-pointer"
                data-testid="service-needed-select"
              >
                <option value="">Select a service...</option>
                <option value="Gutter Cleaning">🍂 Gutter Cleaning</option>
                <option value="Gutter Guard Installations">🛡️ Gutter Guard Installations</option>
                <option value="Gutter & Downspout Repairs">🔧 Gutter & Downspout Repairs</option>
                <option value="Basic Roof Cleaning & Moss Treatment">🏠 Basic Roof Cleaning & Moss Treatment</option>
                <option value="Complete Soft Wash Roof Cleaning">✨ Complete Soft Wash Roof Cleaning</option>
              </select>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Check all that apply
              </label>
              <div className="space-y-4">
                <label className="flex items-center cursor-pointer group bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-200">
                  <input
                    type="checkbox"
                    name="hasSolarPanels"
                    checked={formData.hasSolarPanels}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                    data-testid="solar-panels-checkbox"
                  />
                  <span className="ml-4 text-gray-700 font-medium group-hover:text-gray-900 transition-colors">☀️ Have solar panels</span>
                </label>
                <label className="flex items-center cursor-pointer group bg-white p-4 rounded-xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-200">
                  <input
                    type="checkbox"
                    name="hasGutterGuards"
                    checked={formData.hasGutterGuards}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                    data-testid="gutter-guards-checkbox"
                  />
                  <span className="ml-4 text-gray-700 font-medium group-hover:text-gray-900 transition-colors">🛡️ Gutter Guards Installed on Gutters</span>
                </label>
              </div>
            </div>

            {/* Property Type Radio Buttons */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Property Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center cursor-pointer group bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-primary-400 transition-all duration-200 has-[:checked]:border-primary-600 has-[:checked]:bg-primary-50">
                  <input
                    type="radio"
                    name="propertyType"
                    value="Residential"
                    checked={formData.propertyType === 'Residential'}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                    data-testid="residential-radio"
                  />
                  <span className="ml-3 text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">🏡 Residential</span>
                </label>
                <label className="flex items-center cursor-pointer group bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-primary-400 transition-all duration-200 has-[:checked]:border-primary-600 has-[:checked]:bg-primary-50">
                  <input
                    type="radio"
                    name="propertyType"
                    value="Commercial"
                    checked={formData.propertyType === 'Commercial'}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                    data-testid="commercial-radio"
                  />
                  <span className="ml-3 text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">🏢 Commercial</span>
                </label>
              </div>
            </div>

            {/* Additional Concerns */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Additional Concerns or Requirements
              </label>
              <div className="relative">
                <div className="absolute top-3 left-4 pointer-events-none">
                  <FiEdit className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  name="additionalConcerns"
                  value={formData.additionalConcerns}
                  onChange={handleChange}
                  rows="5"
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                  placeholder="Tell us about any specific concerns, requirements, or questions you have..."
                  data-testid="additional-concerns-textarea"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-5 px-8 rounded-xl transition-all duration-200 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0 disabled:transform-none"
              data-testid="submit-button"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Your Request...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  📧 Submit Free Quote Request
                </span>
              )}
            </button>

            {/* Trust Badge */}
            <p className="text-center text-sm text-gray-500 mt-4">
              🔒 Your information is secure and will never be shared with third parties
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;