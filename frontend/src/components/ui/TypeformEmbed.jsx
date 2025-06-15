import React, { useEffect, useRef } from 'react';

const TypeformEmbed = () => {
  return (
    <div className="typeform-container">
      <iframe 
        src="https://form.typeform.com/to/rV7BmHiw?typeform-medium=embed-snippet"
        width="100%" 
        height="600" 
        frameBorder="0"
        style={{
          borderRadius: '8px',
          border: 'none',
          width: '100%',
          height: '600px'
        }}
        title="Contact Form - CF Gutters"
        allowFullScreen
      />
    </div>
  );
};

export default TypeformEmbed;