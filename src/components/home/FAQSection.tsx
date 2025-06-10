import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will AI replace my human employees?",
      answer: "No, Legion AI is designed to augment your human team, not replace them. Our AI employees handle repetitive, time-consuming tasks so your human employees can focus on strategy, creativity, relationship building, and other high-value work that requires human insight and decision-making."
    },
    {
      question: "How quickly can we see results?",
      answer: "Most companies see immediate impact within 24-48 hours of deployment. You'll notice reduced response times, improved accuracy, and freed-up human resources right away. Significant ROI typically becomes apparent within the first month as processes become more efficient and your team focuses on higher-value activities."
    },
    {
      question: "Is it complicated to set up?",
      answer: "Not at all. Our setup process is designed to be simple and fast. Most integrations take less than 24 hours, and our team handles the technical configuration. You'll have a dedicated onboarding specialist to ensure smooth implementation and provide training for your team."
    },
    {
      question: "What about data security?",
      answer: "Security is our top priority. Legion AI is SOC 2 Type II certified, GDPR compliant, and uses enterprise-grade encryption. Your data is processed securely and never shared with third parties. We maintain strict access controls and audit trails for all AI employee activities."
    },
    {
      question: "Can AI employees integrate with our existing tools?",
      answer: "Yes, our AI employees integrate with 200+ popular business tools including CRMs, email platforms, project management software, accounting systems, and more. If you use custom tools, our API allows for seamless integration with virtually any system."
    },
    {
      question: "What if we need to scale up or down?",
      answer: "Legion AI grows with your business. You can add or remove AI employees anytime without contracts or penalties. Scale up during busy periods, scale down during slower times, or adjust roles as your business needs evolve. Changes take effect immediately."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-dark-500 mb-6">
            Common Questions, <span className="gradient-text">Honest Answers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in transparency. Here are the questions we get asked most often.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-light-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-light-300 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-dark-500 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-primary-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-primary-600" />
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
                      <div className="px-8 pb-6">
                        <p className="text-gray-700 leading-relaxed">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <button className="btn-secondary">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;