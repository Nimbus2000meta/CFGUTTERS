import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Lisa Ferriello',
      date: 'September 7, 2024',
      rating: 5,
      title: 'Highly Recommend',
      text: 'I recently had my gutters cleaned... Highly recommend.'
    },
    {
      name: 'Maria Waltz',
      date: 'September 4, 2024',
      rating: 5,
      title: 'Best Gutter Man!',
      text: 'Connor did a fantastic job cleaning my gutters!!'
    },
    {
      name: 'Ann Smith',
      date: 'September 3, 2024',
      rating: 5,
      title: 'Satisfied Customer',
      text: 'All around good experience. Appreciated the good customer service.'
    },
    {
      name: 'Jessie Oakley',
      date: 'September 2, 2024',
      rating: 5,
      title: 'Amazing Work',
      text: 'Great prices and amazing work done will definitely use again!'
    },
    {
      name: 'Ben Amos',
      date: 'September 2, 2024',
      rating: 5,
      title: 'Great Price and Great Work',
      text: 'Con gave us a quick quote which was very reasonable.'
    },
    {
      name: 'St. Ives',
      date: 'September 2, 2024',
      rating: 5,
      title: 'Peterborough',
      text: 'Very pleased with the work carried out by Gutter Clean.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Testimonials
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[300px] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {testimonials[currentIndex].title}
              </h3>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-4">
                {testimonials[currentIndex].date}
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
            </div>

            <p className="text-xl font-bold text-gray-900">
              - {testimonials[currentIndex].name}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white hover:bg-gray-100 text-primary-600 p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white hover:bg-gray-100 text-primary-600 p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* CTA to Write Review */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Click Here to{' '}
            <a 
              href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x259e937372cb8d5d:0xa6ccfbd39f0eeed2!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:text-yellow-200 underline"
            >
              write a review
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;