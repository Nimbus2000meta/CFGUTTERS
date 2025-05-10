import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiInfo } from 'react-icons/fi';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    
    if (!hasConsented) {
      // Show the banner after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'false');
    setIsVisible(false);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      y: 100, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const detailsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 'auto', 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      height: 0, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-primary-50 rounded-full p-4 text-primary-500 flex-shrink-0">
                  <FiInfo className="text-xl" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold mb-2">We use cookies</h3>
                    <button 
                      onClick={() => setIsVisible(false)}
                      className="text-gray-400 hover:text-gray-600"
                      aria-label="Close"
                    >
                      <FiX />
                    </button>
                  </div>
                  
                  <p className="text-neutral-600 mb-4">
                    We use cookies to improve your experience on our website, analyze site traffic, and remember your preferences.
                  </p>
                  
                  <button
                    onClick={toggleDetails}
                    className="text-primary-500 font-medium mb-4 inline-flex items-center"
                  >
                    {showDetails ? 'Hide details' : 'Show details'}
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-neutral-600"
                        variants={detailsVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <h4 className="font-semibold mb-2">Types of cookies we use:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Essential cookies: Necessary for the website to function properly</li>
                          <li>Functional cookies: Remember your preferences</li>
                          <li>Analytics cookies: Help us understand how you use our website</li>
                          <li>Marketing cookies: Allow us to provide relevant advertising</li>
                        </ul>
                        <p className="mt-2">
                          You can change your preferences at any time by visiting our Privacy Policy.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDecline}
                      className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      Decline
                    </button>
                    <button
                      onClick={handleAccept}
                      className="px-6 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                    >
                      Accept All Cookies
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;