import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Clock, 
  FileText, 
  Users, 
  Calendar,
  DollarSign,
  Mail,
  CheckCircle,
  TrendingUp,
  Target
} from 'lucide-react';

const ProfessionalServicesPage = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Client Onboarding Automation',
      description: 'Streamline new client intake with automated workflows and document collection.',
      stat: '75% faster onboarding'
    },
    {
      icon: Calendar,
      title: 'Project Management',
      description: 'Automate project updates, milestone tracking, and client communications.',
      stat: '40% faster delivery'
    },
    {
      icon: DollarSign,
      title: 'Billing & Invoicing',
      description: 'Automate time tracking, invoice generation, and payment follow-ups.',
      stat: '60% faster billing'
    },
    {
      icon: Mail,
      title: 'Client Communication',
      description: 'Maintain consistent communication with automated updates and check-ins.',
      stat: '95% client satisfaction'
    }
  ];

  const serviceTypes = [
    {
      title: 'Legal Services',
      description: 'Automate client intake, document review, and case management',
      features: [
        'Client intake and screening',
        'Document preparation and review',
        'Court filing and deadline tracking',
        'Client communication and updates'
      ],
      icon: '⚖️'
    },
    {
      title: 'Accounting & Finance',
      description: 'Streamline bookkeeping, tax preparation, and financial reporting',
      features: [
        'Automated bookkeeping and reconciliation',
        'Tax document collection and preparation',
        'Financial report generation',
        'Client advisory and consultation scheduling'
      ],
      icon: '📊'
    },
    {
      title: 'Consulting',
      description: 'Enhance project delivery and client relationship management',
      features: [
        'Project scoping and proposal generation',
        'Client onboarding and kickoff',
        'Progress tracking and reporting',
        'Knowledge management and documentation'
      ],
      icon: '💼'
    },
    {
      title: 'Marketing Agencies',
      description: 'Automate campaign management and client reporting',
      features: [
        'Campaign setup and optimization',
        'Performance tracking and reporting',
        'Client communication and updates',
        'Lead generation and qualification'
      ],
      icon: '📈'
    }
  ];

  const useCases = [
    {
      title: 'Client Relationship Management',
      description: 'Maintain strong client relationships with automated touchpoints',
      features: [
        'Regular check-in scheduling and execution',
        'Project status updates and reporting',
        'Client satisfaction surveys',
        'Renewal and upselling opportunities'
      ]
    },
    {
      title: 'Proposal & Contract Management',
      description: 'Streamline the sales process from proposal to contract signing',
      features: [
        'Automated proposal generation',
        'Contract template customization',
        'E-signature workflow management',
        'Follow-up and negotiation support'
      ]
    },
    {
      title: 'Time & Resource Management',
      description: 'Optimize resource allocation and project profitability',
      features: [
        'Automated time tracking and reporting',
        'Resource allocation optimization',
        'Project profitability analysis',
        'Capacity planning and forecasting'
      ]
    },
    {
      title: 'Knowledge Management',
      description: 'Capture and organize institutional knowledge',
      features: [
        'Document organization and tagging',
        'Best practice documentation',
        'Team knowledge sharing',
        'Client-specific information management'
      ]
    }
  ];

  const testimonial = {
    quote: "Legion AI transformed our consulting practice. Our AI assistant handles client onboarding, project updates, and billing, allowing our consultants to focus on high-value strategic work. We've increased our project delivery speed by 40%.",
    author: "David Thompson",
    title: "Managing Partner",
    company: "Strategic Solutions Consulting",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  };

  const roi = {
    adminReduction: '55% admin time saved',
    billingSpeed: '60% faster billing',
    clientSatisfaction: '95% satisfaction rate',
    projectDelivery: '40% faster delivery'
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark-500 mb-6">
              AI Employees for <span className="gradient-text">Professional Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Optimize client onboarding, project management, and billing processes. 
              Let AI handle administrative tasks so your team can focus on delivering exceptional client value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Services Demo
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">55%</div>
              <div className="text-gray-600">Admin Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
              <div className="text-gray-600">Faster Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-gray-600">Billing Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">18hrs</div>
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
              Focus on <span className="gradient-text">High-Value Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI employees handle routine tasks so your professionals can focus on strategy and client success.
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
                className="bg-purple-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="text-purple-600 font-semibold">
                      {benefit.stat}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
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
              Built for <span className="gradient-text">Your Service Type</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI employees trained for specific professional service workflows and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Professional Services <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From client management to project delivery, AI employees optimize every aspect of your practice.
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
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Briefcase className="w-8 h-8 text-purple-600" />
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
                  <div className="text-purple-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Professional Services ROI
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Measurable improvements in efficiency, client satisfaction, and profitability.
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
                  {key === 'adminReduction' && <Clock className="w-8 h-8 text-purple-200" />}
                  {key === 'billingSpeed' && <DollarSign className="w-8 h-8 text-purple-200" />}
                  {key === 'clientSatisfaction' && <Users className="w-8 h-8 text-purple-200" />}
                  {key === 'projectDelivery' && <Target className="w-8 h-8 text-purple-200" />}
                </div>
                <div className="text-3xl font-bold text-purple-200 mb-2">
                  {value}
                </div>
                <div className="text-purple-100 capitalize">
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
              Ready to Optimize Your Practice?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join professional service firms who are already improving efficiency and client satisfaction with AI employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start 14-Day Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Professional Services Demo
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

export default ProfessionalServicesPage;