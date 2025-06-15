import React, { useEffect, useRef } from 'react';

const TypeformEmbed = () => {
  const typeformRef = useRef(null);

  useEffect(() => {
    // Method 1: Try direct iframe if no script method works
    const loadTypeform = () => {
      if (typeformRef.current) {
        // Clear any existing content
        typeformRef.current.innerHTML = '';
        
        // Create iframe
        const iframe = document.createElement('iframe');
        iframe.src = 'https://form.typeform.com/to/rV7BmHiw?typeform-medium=embed-snippet';
        iframe.width = '100%';
        iframe.height = '600';
        iframe.frameBorder = '0';
        iframe.style.borderRadius = '8px';
        iframe.title = 'Contact Form';
        
        typeformRef.current.appendChild(iframe);
      }
    };

    // Load the typeform
    loadTypeform();
  }, []);

  return (
    <div className="typeform-container">
      <div 
        ref={typeformRef}
        style={{ 
          width: '100%', 
          height: '600px',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        {/* Fallback loading message */}
        <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading contact form...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeformEmbed;