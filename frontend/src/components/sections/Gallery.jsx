import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary-500 font-semibold uppercase tracking-wider mb-2">
            Our Work
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Gallery Working - Step by Step
          </h2>
        </div>

        {/* Simple Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-100">
              <img
                src="/images/gallery1.jpg"
                alt="Professional gutter repair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                Repairs
              </div>
              <p className="text-sm text-gray-600">Expert gutter repair and restoration services</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-100">
              <img
                src="/images/gallery2.jpg"
                alt="Gutter maintenance service"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                Maintenance
              </div>
              <p className="text-sm text-gray-600">Expert gutter maintenance and repair work</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-100">
              <img
                src="/images/gallery3.png"
                alt="Professional roof cleaning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                Roof Cleaning
              </div>
              <p className="text-sm text-gray-600">Professional roof cleaning and moss treatment</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;