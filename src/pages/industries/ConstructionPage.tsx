import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Clock, 
  Users, 
  FileText, 
  Calendar,
  Phone,
  Truck,
  CheckCircle,
  TrendingUp,
  DollarSign,
  AlertTriangle
} from 'lucide-react';

const ConstructionPage = () => {
  const benefits = [
    {
      icon: Calendar,
      title: 'Project Scheduling',
      description: 'Coordinate timelines, manage subcontractors, and track project milestones automatically.',
      stat: '50% better project delivery'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Handle permits, contracts, and compliance documentation with perfect organization.',
      stat: '70% faster permit processing'
    },
    {
      icon: Phone,
      title: 'Client Communication',
      description: 'Keep clients updated on progress, handle inquiries, and manage change orders.',
      stat: '95% client satisfaction'
    },
    {
      icon: Truck,
      title: 'Supply Chain Management',
      description: 'Track materials, coordinate deliveries, and manage vendor relationships.',
      stat: '30% reduction in delays'
    }
  ];

  const useCases = [
    {
      title: 'Project Management',
      description: 'Streamline project coordination and timeline management',
      features: [
        'Automated scheduling and milestone tracking',
        'Subcontractor coordination and communication',
        'Resource allocation and optimization',
        'Progress reporting and updates'
      ]
    },
    {
      title: 'Compliance & Documentation',
      description: 'Ensure regulatory compliance and proper documentation',
      features: [
        'Permit application and tracking',
        'Safety compliance monitoring',
        'Contract management and renewals',
        'Inspection scheduling and follow-up'
      ]
    },
    {
      title: 'Client Relations',
      description: 'Maintain excellent client communication and satisfaction',
      features: [
        'Regular progress updates and reports',
        'Change order processing and approval',
        'Issue resolution and escalation',
        'Final walkthrough coordination'
      ]
    },
    {
      title: 'Operations Support',
      description: 'Optimize day-to-day construction operations',
      features: [
        'Material ordering and delivery tracking',
        'Equipment maintenance scheduling',
        'Crew scheduling and coordination',
        'Quality control and inspections'
      ]
    }
  ];

  const integrations = [
    { name: 'Procore', logo: '🏗️' },
    { name: 'Buildertrend', logo: '📋' },
    { name: 'CoConstruct', logo: '🔨' },
    { name: 'PlanGrid', logo: '📐' },
    { name: 'Sage 300', logo: '💼' },
    { name: 'QuickBooks', logo: '💰' },
    { name: 'AutoCAD', logo: '📏' },
    { name: 'Bluebeam', logo: '📄' }
  ];

  const testimonial = {
    quote: "Our AI project coordinator has revolutionized how we manage construction projects. We've reduced project delays by 30% and improved client communication dramatically. It's like having a dedicated project manager working 24/7.",
    author: "Robert Johnson",
    title: "Construction Manager",
    company: "Johnson & Associates Construction",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  };

  const roi = {
    projectDelivery: '50% on-time delivery',
    documentProcessing: '70% faster permits',
    clientSatisfaction: '95% satisfaction rate',
    costSavings: '$4,200 monthly savings'
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center">
                <Building className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark-500 mb-6">
              AI Employees for <span className="gradient-text">Construction</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Streamline project management, improve compliance, and enhance client communication 
              with AI employees that work around the clock to keep your projects on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Construction Demo
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">50%</div>
              <div className="text-gray-600">Better Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">70%</div>
              <div className="text-gray-600">Faster Permits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">24/7</div>
              <div className="text-gray-600">Project Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">20hrs</div>
              <div className="text-gray-600">Saved Weekly</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Build Better with <span className="gradient-text">AI Efficiency</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI employees designed specifically for construction project management and operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="text-gray-600 font-semibold">
                      {benefit.stat}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
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
              Integrates with Your <span className="gradient-text">Construction Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly connect with popular construction management and design software.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3">{integration.logo}</div>
                <div className="font-semibold text-dark-500 text-sm">{integration.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Construction <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From project planning to completion, AI employees handle every aspect of construction management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-dark-500 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Building className="w-8 h-8 text-gray-600" />
              </div>
              
              <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-dark-500">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                  <div className="text-gray-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Construction ROI
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Measurable improvements in project delivery, compliance, and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(roi).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {key === 'projectDelivery' && <TrendingUp className="w-8 h-8 text-gray-200" />}
                  {key === 'documentProcessing' && <FileText className="w-8 h-8 text-gray-200" />}
                  {key === 'clientSatisfaction' && <Users className="w-8 h-8 text-gray-200" />}
                  {key === 'costSavings' && <DollarSign className="w-8 h-8 text-gray-200" />}
                </div>
                <div className="text-3xl font-bold text-gray-200 mb-2">
                  {value}
                </div>
                <div className="text-gray-100 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark-500 mb-6">
              Ready to Build Smarter?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join construction companies who are already improving project delivery and client satisfaction with AI employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start 14-Day Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Construction Demo
              </button>
            </div>

            <p className="text-gray-500 mt-6">
              No credit card required • Setup in 24 hours • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionPage;