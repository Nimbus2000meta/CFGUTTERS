import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            GALLERY TEST - THIS SHOULD BE VISIBLE
          </h2>
        </div>
        
        <div className="bg-red-500 text-white p-8 text-center">
          <h3 className="text-2xl font-bold">If you can see this red box, the Gallery component is working!</h3>
        </div>
      </div>
    </section>
  );
};

export default Gallery;