import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const TypeformEmbed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const openTypeformPopup = () => {
    window.open(
      'https://form.typeform.com/to/rV7BmHiw', 
      'typeform', 
      'width=800,height=600,scrollbars=yes,resizable=yes'
    );
  };

  return (
    <div className="typeform-container">
      {isLoading && (
        <div className="flex items-center justify-center h-[500px] bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading contact form...</p>
          </div>
        </div>
      )}
      
      {hasError ? (
        <div className="flex items-center justify-center h-[500px] bg-gray-50 rounded-lg">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">
              Contact Form
            </h4>
            <p className="text-gray-600 mb-6">
              Click the button below to open our contact form in a new window.
            </p>
            <button
              onClick={openTypeformPopup}
              className="btn btn-primary flex items-center justify-center gap-2 mx-auto"
            >
              <FiExternalLink />
              Open Contact Form
            </button>
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
            height: '500px',
            display: isLoading ? 'none' : 'block'
          }}
          title="Contact Form - CF Gutters"
          allowFullScreen
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      )}
    </div>
  );
};

export default TypeformEmbed;