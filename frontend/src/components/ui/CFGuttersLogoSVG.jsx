import React from 'react';

const CFGuttersLogoSVG = ({ width = 50, height = 50, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle border */}
      <circle 
        cx="100" 
        cy="100" 
        r="95" 
        stroke="currentColor" 
        strokeWidth="8" 
        fill="white"
      />
      
      {/* Inner circle border */}
      <circle 
        cx="100" 
        cy="100" 
        r="85" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="white"
      />
      
      {/* Main house/roof structure */}
      <path 
        d="M30 110 L60 75 L90 75 L140 75 L170 110 L165 120 L35 120 Z" 
        fill="currentColor"
      />
      
      {/* Roof peak triangle */}
      <path 
        d="M70 75 L100 45 L130 75 L125 72 L100 52 L75 72 Z" 
        fill="currentColor"
      />
      
      {/* Inner roof detail */}
      <path 
        d="M80 75 L100 58 L120 75 L115 73 L100 63 L85 73 Z" 
        fill="white"
      />
      
      {/* Gutter system */}
      <rect x="30" y="110" width="140" height="8" fill="currentColor"/>
      
      {/* Water flow lines */}
      <path d="M35 125 L50 125" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M55 128 L70 128" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M75 131 L90 131" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M110 128 L125 128" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M130 131 L145 131" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M150 125 L165 125" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      
      {/* Downspout */}
      <rect x="167" y="110" width="6" height="25" fill="currentColor"/>
      <rect x="165" y="133" width="10" height="4" fill="currentColor"/>
    </svg>
  );
};

export default CFGuttersLogoSVG;