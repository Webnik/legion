import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Zap,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
    {
      icon: Home,
      name: 'Real Estate',
      description: 'Automate lead qualification, property management, and client communications',
      savings: '65% reduction in operational costs',
      benefits: [
        'Automated lead response in under 60 seconds',
        'Property showing scheduling and management',
        'Client follow-up and nurturing campaigns',
        'Document processing and compliance tracking'
      ],
      stats: {
        time: '15 hours saved weekly',
        cost: '$3,200 monthly savings',
        efficiency: '300% faster lead response'
      },
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'Streamline patient communication, appointment management, and administrative tasks',
      savings: '70% reduction in administrative overhead',
      benefits: [
        'Automated appointment scheduling and reminders',
        'Patient intake and follow-up communications',
        'Insurance verification and billing support',
        'Compliance documentation and reporting'
      ],
      stats: {
        time: '20 hours saved weekly',
        cost: '$4,500 monthly savings',
        efficiency: '85% reduction in no-shows'
      },
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: ShoppingBag,
      name: 'E-commerce',
      description: 'Enhance customer support, inventory management, and order processing',
      savings: '60% reduction in customer service costs',
      benefits: [
        '24/7 customer support and issue resolution',
        'Order tracking and shipment notifications',
        'Inventory monitoring and restocking alerts',
        'Returns processing and customer retention'
      ],
      stats: {
        time: '25 hours saved weekly',
        cost: '$2,800 monthly savings',
        efficiency: '90% first-contact resolution'
      },
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      description: 'Optimize client onboarding, project management, and billing processes',
      savings: '55% reduction in administrative time',
      benefits: [
        'Automated client onboarding workflows',
        'Project status updates and communications',
        'Time tracking and invoice generation',
        'Proposal creation and follow-up'
      ],
      stats: {
        time: '18 hours saved weekly',
        cost: '$3,800 monthly savings',
        efficiency: '40% faster project delivery'
      },
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Support student communications, enrollment processes, and administrative tasks',
      savings: '50% reduction in administrative workload',
      benefits: [
        'Student inquiry response and enrollment support',
        'Course scheduling and registration assistance',
        'Assignment reminders and grade notifications',
        'Parent-teacher communication coordination'
      ],
      stats: {
        time: '12 hours saved weekly',
        cost: '$2,200 monthly savings',
        efficiency: '95% response rate improvement'
      },
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: Car,
      name: 'Automotive',
      description: 'Streamline service scheduling, customer communications, and inventory management',
      savings: '45% reduction in scheduling overhead',
      benefits: [
        'Service appointment scheduling and reminders',
        'Customer communication and follow-up',
        'Parts ordering and inventory tracking',
        'Warranty claim processing and support'
      ],
      stats: {
        time: '14 hours saved weekly',
        cost: '$2,600 monthly savings',
        efficiency: '60% improvement in scheduling'
      },
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-dark-500 mb-6">
              AI Solutions Built for <span className="gradient-text">Your Industry</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Every industry has unique challenges and workflows. Our AI employees are trained 
              to understand your specific needs and deliver results that matter to your business.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">12+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">500+</div>
                <div className="text-gray-600">Companies Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">60%</div>
                <div className="text-gray-600">Average Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">24hrs</div>
                <div className="text-gray-600">Setup Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-r ${industry.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark-500">{industry.name}</h3>
                      <p className="text-secondary-600 font-semibold">{industry.savings}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-dark-500 mb-4">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-secondary-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className={`${industry.bgColor} rounded-xl p-6`}>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary-600" />
                        <span className="text-gray-700 font-medium">{industry.stats.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5 text-secondary-600" />
                        <span className="text-gray-700 font-medium">{industry.stats.cost}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-700 font-medium">{industry.stats.efficiency}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300">
                      Learn More About {industry.name}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark-500 mb-6">
              And Many More Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't see your industry? We work with businesses across all sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Utensils, name: 'Restaurants', color: 'from-yellow-500 to-yellow-600' },
              { icon: Building, name: 'Construction', color: 'from-gray-500 to-gray-600' },
              { icon: Palette, name: 'Creative Agencies', color: 'from-pink-500 to-pink-600' },
              { icon: Wrench, name: 'Manufacturing', color: 'from-teal-500 to-teal-600' },
              { icon: Scale, name: 'Legal', color: 'from-indigo-500 to-purple-600' },
              { icon: Zap, name: 'Technology', color: 'from-cyan-500 to-blue-600' }
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${industry.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-dark-500">{industry.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Join hundreds of companies in your industry who are already saving time and money with AI employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
                Schedule Industry Demo
              </Link>
              <Link to="/pricing" className="btn-secondary border-white text-white hover:bg-white/10">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;