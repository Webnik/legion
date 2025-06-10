import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Heart, 
  ShoppingBag, 
  Briefcase, 
  GraduationCap, 
  Car,
  Utensils,
  Building,
  Palette,
  Wrench,
  Scale,
  Zap
} from 'lucide-react';

const IndustriesShowcase = () => {
  const industries = [
    { icon: Home, name: 'Real Estate', savings: 'Save 65% on operations', color: 'from-blue-500 to-blue-600' },
    { icon: Heart, name: 'Healthcare', savings: 'Save 70% on admin', color: 'from-red-500 to-red-600' },
    { icon: ShoppingBag, name: 'E-commerce', savings: 'Save 60% on support', color: 'from-green-500 to-green-600' },
    { icon: Briefcase, name: 'Professional Services', savings: 'Save 55% on billing', color: 'from-purple-500 to-purple-600' },
    { icon: GraduationCap, name: 'Education', savings: 'Save 50% on admin', color: 'from-indigo-500 to-indigo-600' },
    { icon: Car, name: 'Automotive', savings: 'Save 45% on scheduling', color: 'from-orange-500 to-orange-600' },
    { icon: Utensils, name: 'Restaurants', savings: 'Save 40% on ordering', color: 'from-yellow-500 to-yellow-600' },
    { icon: Building, name: 'Construction', savings: 'Save 50% on project mgmt', color: 'from-gray-500 to-gray-600' },
    { icon: Palette, name: 'Creative Agencies', savings: 'Save 35% on client mgmt', color: 'from-pink-500 to-pink-600' },
    { icon: Wrench, name: 'Manufacturing', savings: 'Save 60% on logistics', color: 'from-teal-500 to-teal-600' },
    { icon: Scale, name: 'Legal', savings: 'Save 55% on research', color: 'from-indigo-500 to-purple-600' },
    { icon: Zap, name: 'Technology', savings: 'Save 45% on operations', color: 'from-cyan-500 to-blue-600' }
  ];

  return (
    <section className="section-padding bg-dark-500">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Built for <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every industry has unique challenges. Our AI employees are trained to understand 
            your specific workflows and deliver results that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${industry.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-secondary-400 text-sm font-medium">
                  {industry.savings}
                </p>
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
          <button className="btn-primary text-lg px-8 py-4">
            Explore Industry Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesShowcase;