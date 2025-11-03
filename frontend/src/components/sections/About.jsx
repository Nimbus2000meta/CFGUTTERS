import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  const expertise = [
    { title: 'Gutter Cleaning', href: '#gutter-cleaning' },
    { title: 'Gutter Guard Installations', href: '#gutter-guards' },
    { title: 'Gutter & Downspout Repairs', href: '#gutter-repairs' },
    { title: 'Basic Roof Cleaning & Moss Treatment', href: '#basic-roof-cleaning' },
    { title: 'Complete Soft Wash Roof Cleaning', href: '#soft-wash-cleaning' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary-600 font-semibold mb-4 text-lg">
              With over <strong>10 years of experience</strong> working with gutters!
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About CF Gutters
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                CF Gutters began two years ago as a side business, born from the realization that many homeowners were not receiving the quality of service they deserved. What started as a small venture quickly grew into a full-time commitment to delivering top-notch gutter cleaning, gutter guard installations, and gutter and downspout repairs to our community and the surrounding areas.
              </p>
              
              <p>
                At CF Gutters, we believe that every customer deserves exceptional service and results that exceed expectations. Our dedication to quality is at the heart of everything we do, from meticulously cleaning your gutters to expertly installing guards and making reliable repairs. We understand the importance of protecting your home, and we're here to ensure your gutter system is in perfect working order.
              </p>
            </div>
          </div>

          {/* Right Content - Our Expertise */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h3>
            <div className="space-y-3">
              {expertise.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <FiCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-800 font-medium group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;