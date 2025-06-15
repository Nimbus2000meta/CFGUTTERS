import React, { useState, useRef, useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const TypeformEmbed = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
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
      'width=800,height=600,scrollbars=yes,resizable=yes'
    );
  };

  const loadFormManually = () => {
    setShowForm(true);
    setIsLoaded(true);
  };

  return (
    <div ref={containerRef} className="typeform-container">
      {!showForm ? (
        <div className="flex items-center justify-center h-[500px] bg-gray-50 rounded-lg">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              Contact Form
            </h4>
            <p className="text-gray-600 mb-6">
              Click to load our interactive contact form, or open it in a new tab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={loadFormManually}
                className="btn btn-primary flex items-center justify-center gap-2"
              >
                Load Contact Form
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
        <iframe 
          src="https://form.typeform.com/to/rV7BmHiw?typeform-medium=embed-snippet"
          width="100%" 
          height="500" 
          frameBorder="0"
          style={{
            borderRadius: '8px',
            border: 'none',
            width: '100%',
            height: '500px'
          }}
          title="Contact Form - CF Gutters"
          allowFullScreen
          scrolling="no"
        />
      )}
    </div>
  );
};

export default TypeformEmbed;