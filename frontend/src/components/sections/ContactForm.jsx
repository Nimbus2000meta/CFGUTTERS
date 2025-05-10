import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheck, FiX } from 'react-icons/fi';

const MessageAlert = ({ type, message, onClose }) => {
  return (
    <motion.div 
      className={`p-4 rounded-lg flex items-center justify-between ${
        type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center">
        {type === 'success' ? <FiCheck className="mr-2" /> : <FiX className="mr-2" />}
        <span>{message}</span>
      </div>
      <button onClick={onClose} className="text-lg">
        <FiX />
      </button>
    </motion.div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ''
    });
    
    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Thank you! Your message has been sent. We\'ll get back to you shortly.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false, message: '' }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "An error occurred. Please try again."
      });
    }
  };

  const closeAlert = () => {
    setFormStatus(prev => ({ ...prev, isSubmitted: false, isError: false, message: '' }));
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Get a Free Quote</h3>
      
      <AnimatePresence>
        {(formStatus.isSubmitted || formStatus.isError) && formStatus.message && (
          <MessageAlert 
            type={formStatus.isError ? 'error' : 'success'} 
            message={formStatus.message}
            onClose={closeAlert}
          />
        )}
      </AnimatePresence>
      
      {!formStatus.isSubmitted && (
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-neutral-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-neutral-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-neutral-700 mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-neutral-700 mb-2">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              >
                <option value="">Select a service</option>
                <option value="installation">Gutter Installation</option>
                <option value="repair">Gutter Repair</option>
                <option value="cleaning">Gutter Cleaning</option>
                <option value="guards">Gutter Guards</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-neutral-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              placeholder="Please tell us about your project..."
            ></textarea>
          </div>
          <motion.button 
            type="submit"
            className="btn btn-primary w-full flex justify-center items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={formStatus.isSubmitting}
          >
            {formStatus.isSubmitting ? (
              <>Processing...</>
            ) : (
              <>Submit Request <FiSend /></>
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;