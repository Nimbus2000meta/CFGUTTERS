import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How often should I have my gutters cleaned?",
      answer: "We recommend having your gutters cleaned at least twice a year - once in late spring and once in early fall. However, if you have many trees near your home, you may need more frequent cleaning."
    },
    {
      question: "What's the difference between Basic and Complete Soft Wash roof cleaning?",
      answer: "Basic Roof Cleaning involves gently brushing off moss and debris, followed by a moss-preventative treatment. Complete Soft Wash uses a low-pressure system with specialized cleaning solutions to remove all moss, algae, and stains, providing a more thorough restoration."
    },
    {
      question: "Do you offer gutter guard installation?",
      answer: "Yes! We install high-quality gutter guards that help prevent debris buildup and reduce the frequency of gutter cleaning. Our guards are custom-fitted to your home's specific gutter system."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. CF Gutters is fully licensed and insured for your peace of mind. We carry comprehensive liability insurance and workers' compensation coverage."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve homes and businesses throughout the region from Mahopac NY to Westport CT and everywhere in between. Contact us to confirm service availability in your specific area."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes! We provide free, no-obligation estimates for all our services. Simply call us at (845) 879-3864 or fill out our contact form to schedule your free estimate."
    },
    {
      question: "What makes CF Gutters different from other companies?",
      answer: "We combine over 10 years of experience with budget-friendly rates, eco-friendly cleaning solutions, and exceptional customer service. We're licensed, insured, and committed to quality workmanship on every project."
    },
    {
      question: "Can you repair damaged gutters?",
      answer: "Yes, we provide comprehensive gutter repair services including leak repair, sagging correction, downspout reattachment, and other necessary fixes to restore your gutter system's functionality."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            className="text-primary-500 font-semibold uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            FAQ
          </motion.p>
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Frequently Asked <span className="headline-gradient">Questions</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to common questions about our gutter cleaning and maintenance services.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-neutral-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-100 transition-colors"
                >
                  <h3 className="font-semibold text-neutral-850 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <FiMinus className="text-primary-500 text-xl" />
                    ) : (
                      <FiPlus className="text-primary-500 text-xl" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="mb-6 text-primary-100">
              Our friendly team is here to help! Contact us today for personalized answers 
              and a free consultation about your gutter cleaning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18458793864"
                className="btn bg-white text-primary-600 hover:bg-gray-100 flex items-center justify-center gap-2"
              >
                Call (845) 879-3864
              </a>
              <a
                href="mailto:cfgutters02@gmail.com"
                className="btn btn-outline-white flex items-center justify-center gap-2"
              >
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;