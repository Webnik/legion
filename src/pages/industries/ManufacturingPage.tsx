import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Clock, 
  Users, 
  FileText, 
  Truck,
  BarChart3,
  Settings,
  CheckCircle,
  TrendingUp,
  DollarSign,
  AlertTriangle
} from 'lucide-react';

const ManufacturingPage = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: 'Production Planning',
      description: 'Optimize production schedules, resource allocation, and capacity planning automatically.',
      stat: '60% better efficiency'
    },
    {
      icon: Truck,
      title: 'Supply Chain Management',
      description: 'Track inventory, manage suppliers, and coordinate logistics seamlessly.',
      stat: '40% reduction in delays'
    },
    {
      icon: Settings,
      title: 'Quality Control',
      description: 'Monitor quality metrics, track defects, and ensure compliance standards.',
      stat: '50% fewer defects'
    },
    {
      icon: FileText,
      title: 'Documentation & Compliance',
      description: 'Maintain accurate records, ensure regulatory compliance, and manage certifications.',
      stat: '80% faster reporting'
    }
  ];

  const useCases = [
    {
      title: 'Production Management',
      description: 'Optimize manufacturing operations and workflow efficiency',
      features: [
        'Production scheduling and optimization',
        'Resource allocation and capacity planning',
        'Equipment maintenance coordination',
        'Performance monitoring and reporting'
      ]
    },
    {
      title: 'Supply Chain Coordination',
      description: 'Streamline supplier relationships and logistics',
      features: [
        'Inventory tracking and management',
        'Supplier communication and orders',
        'Delivery coordination and tracking',
        'Cost optimization and analysis'
      ]
    },
    {
      title: 'Quality Assurance',
      description: 'Maintain high quality standards and compliance',
      features: [
        'Quality metrics tracking and analysis',
        'Defect identification and reporting',
        'Compliance monitoring and documentation',
        'Corrective action management'
      ]
    },
    {
      title: 'Operations Support',
      description: 'Enhance overall manufacturing operations',
      features: [
        'Workforce scheduling and coordination',
        'Safety compliance monitoring',
        'Energy usage optimization',
        'Continuous improvement initiatives'
      ]
    }
  ];

  const integrations = [
    { name: 'SAP', logo: '🏭' },
    { name: 'Oracle ERP', logo: '📊' },
    { name: 'Siemens', logo: '⚙️' },
    { name: 'Rockwell', logo: '🔧' },
    { name: 'Wonderware', logo: '📈' },
    { name: 'Honeywell', logo: '🎛️' },
    { name: 'GE Digital', logo: '💻' },
    { name: 'Schneider', logo: '⚡' }
  ];

  const testimonial = {
    quote: "Our AI operations manager has revolutionized our production planning. We've increased efficiency by 60% and reduced waste significantly. It's like having a dedicated operations expert working around the clock.",
    author: "Michael Chen",
    title: "Operations Director",
    company: "Precision Manufacturing Corp",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  };

  const roi = {
    efficiency: '60% better efficiency',
    defectReduction: '50% fewer defects',
    costSavings: '$8,500 monthly savings',
    compliance: '80% faster reporting'
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-teal-50 to-blue-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <Wrench className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark-500 mb-6">
              AI Employees for <span className="gradient-text">Manufacturing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Optimize production, streamline supply chains, and enhance quality control 
              with AI employees that understand manufacturing operations and compliance requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Manufacturing Demo
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">60%</div>
              <div className="text-gray-600">Better Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">50%</div>
              <div className="text-gray-600">Fewer Defects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Operations Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">30hrs</div>
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
              Manufacture Smarter with <span className="gradient-text">AI Precision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI employees designed specifically for manufacturing operations and quality management.
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
                className="bg-teal-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="text-teal-600 font-semibold">
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
              Integrates with Your <span className="gradient-text">Manufacturing Systems</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly connect with popular ERP, MES, and industrial automation platforms.
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
              Manufacturing <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From production planning to quality control, AI employees optimize every aspect of manufacturing.
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
                      <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
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
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Wrench className="w-8 h-8 text-teal-600" />
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
                  <div className="text-teal-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Manufacturing ROI
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Measurable improvements in efficiency, quality, and operational performance.
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
                  {key === 'efficiency' && <TrendingUp className="w-8 h-8 text-teal-200" />}
                  {key === 'defectReduction' && <CheckCircle className="w-8 h-8 text-teal-200" />}
                  {key === 'costSavings' && <DollarSign className="w-8 h-8 text-teal-200" />}
                  {key === 'compliance' && <FileText className="w-8 h-8 text-teal-200" />}
                </div>
                <div className="text-3xl font-bold text-teal-200 mb-2">
                  {value}
                </div>
                <div className="text-teal-100 capitalize">
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
              Ready to Optimize Your Manufacturing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join manufacturers who are already improving efficiency and quality with AI employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start 14-Day Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Manufacturing Demo
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

export default ManufacturingPage;