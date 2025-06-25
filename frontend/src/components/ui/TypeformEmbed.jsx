import React, { useState, useRef, useEffect } from 'react';
import { FiExternalLink, FiMaximize2 } from 'react-icons/fi';

const TypeformEmbed = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  // Check if the component is in viewport before loading the iframe
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoaded) {
          // Small delay to ensure no auto-scroll occurs
          setTimeout(() => {
            setShowForm(true);
            setIsLoaded(true);
          }, 100);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isLoaded]);

  const openTypeformPopup = () => {
    window.open(
      'https://form.typeform.com/to/rV7BmHiw', 
      'typeform', 
      'width=1000,height=800,scrollbars=yes,resizable=yes'
    );
  };

  const loadFormManually = () => {
    setShowForm(true);
    setIsLoaded(true);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div ref={containerRef} className="typeform-container">
      {!showForm ? (
        <div className="flex items-center justify-center h-[600px] bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border-2 border-primary-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-primary-700 mb-2">
              Get Your Free Quote
            </h4>
            <p className="text-primary-600 mb-6 max-w-md mx-auto">
              Fill out our detailed form to receive a personalized quote for your gutter cleaning needs. The form is interactive and easy to complete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={loadFormManually}
                className="btn btn-primary flex items-center justify-center gap-2"
              >
                Load Quote Form
              </button>
              <button
                onClick={openTypeformPopup}
                className="btn bg-white text-primary-600 hover:bg-gray-100 border-2 border-primary-600 flex items-center justify-center gap-2"
              >
                <FiExternalLink />
                Open in New Tab
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
          {/* Form Controls */}
          <div className="flex justify-between items-center mb-4 p-2 bg-primary-50 rounded-t-lg">
            <h4 className="font-semibold text-primary-700">Free Quote Request Form</h4>
            <div className="flex gap-2">
              <button
                onClick={toggleFullscreen}
                className="p-2 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                <FiMaximize2 />
              </button>
              <button
                onClick={openTypeformPopup}
                className="p-2 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors"
                title="Open in New Tab"
              >
                <FiExternalLink />
              </button>
            </div>
          </div>

          {/* Form Iframe */}
          <iframe 
            src="https://form.typeform.com/to/rV7BmHiw?typeform-medium=embed-snippet"
            width="100%" 
            height={isFullscreen ? "calc(100vh - 80px)" : "700px"}
            frameBorder="0"
            style={{
              borderRadius: isFullscreen ? '0' : '8px',
              border: 'none',
              width: '100%',
              height: isFullscreen ? 'calc(100vh - 80px)' : '700px',
              minHeight: '600px'
            }}
            title="Contact Form - CF Gutters"
            allowFullScreen
            scrolling="yes"
            allow="camera; microphone; autoplay; encrypted-media;"
          />

          {/* Fullscreen Close Button */}
          {isFullscreen && (
            <button
              onClick={toggleFullscreen}
              className="fixed top-4 right-4 z-60 bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TypeformEmbed;