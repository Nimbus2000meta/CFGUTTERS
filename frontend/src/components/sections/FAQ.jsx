import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How often should gutters be cleaned?",
      answer: "For most homes, we recommend cleaning gutters at least twice a year—once in the spring and once in the fall. However, if your home is surrounded by trees, you may need more frequent cleaning, potentially up to four times a year."
    },
    {
      question: "What type of gutters do you recommend?",
      answer: "We typically recommend seamless aluminum gutters for most homes due to their durability, cost-effectiveness, and minimal maintenance requirements. However, the best option depends on your specific home, climate, and aesthetic preferences. We're happy to discuss options during a consultation."
    },
    {
      question: "Do you install gutter guards and are they worth it?",
      answer: "Yes, we install various types of gutter guards. They can be highly effective at preventing debris build-up, reducing the frequency of cleaning needed, and extending the life of your gutters. While they represent an additional investment upfront, most homeowners find they pay for themselves through reduced maintenance costs and avoided water damage."
    },
    {
      question: "How long does gutter installation take?",
      answer: "For an average-sized home, a complete gutter installation typically takes 1-2 days. Larger homes or more complex installations may take longer. We'll provide a specific timeframe during your estimate."
    },
    {
      question: "What are the signs that my gutters need to be replaced?",
      answer: "Signs that indicate your gutters may need replacement include visible cracks or splits, sagging or pulling away from the house, water damage or water marks underneath gutters, mildew or pools of water around your foundation, peeling paint or rust spots, and gutters that are constantly clogging despite regular cleaning."
    },
    {
      question: "Do you offer warranties on your installations?",
      answer: "Yes, we stand behind our work with a 10-year warranty on workmanship for new installations. Additionally, the gutter materials themselves typically come with manufacturers' warranties ranging from 20-50 years depending on the product."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <section id="faq" className="section-padding bg-neutral-50">
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
            Frequently Asked Questions
          </motion.p>
          <motion.h2 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Common <span className="headline-gradient">Questions</span>
          </motion.h2>
          <motion.p 
            className="text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to commonly asked questions about our gutter services.
            If you don't see your question here, feel free to contact us.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-soft overflow-hidden"
              variants={itemVariants}
            >
              <div className="w-full">
                <button 
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-medium text-neutral-800 hover:bg-primary-50 transition-colors focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                  data-testid={`faq-question-${index}`}
                >
                  <span>{faq.question}</span>
                  {openFAQ === index ? (
                    <FiChevronUp className="text-primary-500" />
                  ) : (
                    <FiChevronDown className="text-primary-500" />
                  )}
                </button>
                
                <motion.div 
                  className={`px-6 py-0 overflow-hidden ${openFAQ === index ? 'border-t border-gray-100' : ''}`}
                  initial={{ height: 0 }}
                  animate={{ height: openFAQ === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="py-4 text-neutral-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-neutral-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <a 
            href="tel:+15551234567" 
            className="btn btn-primary mx-auto"
          >
            Call Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;