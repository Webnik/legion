import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  const benefits = [
    'No credit card required',
    'Cancel anytime', 
    'Setup in 24 hours',
    '14-day free trial'
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Build Your
            <br />
            <span className="text-secondary-300">Unstoppable Team?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12">
            Join 500+ companies already working smarter with AI employees
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Link
              to="/demo"
              className="inline-flex items-center gap-3 bg-white text-primary-600 font-bold text-xl px-12 py-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Start Your 14-Day Free Trial
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary-300 flex-shrink-0" />
                <span className="text-blue-100 font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-300 mb-2">500+</div>
              <div className="text-blue-200 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-300 mb-2">24hrs</div>
              <div className="text-blue-200 text-sm">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-300 mb-2">65%</div>
              <div className="text-blue-200 text-sm">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-300 mb-2">24/7</div>
              <div className="text-blue-200 text-sm">AI Availability</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;