import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Clock, 
  Users, 
  Code, 
  Smartphone,
  Cloud,
  Database,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Cpu
} from 'lucide-react';

const TechnologyPage = () => {
  const benefits = [
    {
      icon: Code,
      title: 'Development Support',
      description: 'Automate code reviews, testing coordination, and deployment processes.',
      stat: '50% faster development cycles'
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Provide 24/7 technical support, troubleshooting, and user assistance.',
      stat: '85% first-contact resolution'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Monitor systems, analyze performance, and manage data workflows.',
      stat: '60% better system uptime'
    },
    {
      icon: Cloud,
      title: 'Infrastructure Management',
      description: 'Automate deployments, monitor resources, and optimize cloud costs.',
      stat: '40% cost reduction'
    }
  ];

  const useCases = [
    {
      title: 'Software Development',
      description: 'Accelerate development workflows and code quality',
      features: [
        'Automated code review and testing',
        'Bug tracking and issue management',
        'Documentation generation and updates',
        'Release coordination and deployment'
      ]
    },
    {
      title: 'Technical Support',
      description: 'Enhance customer and internal technical support',
      features: [
        '24/7 technical issue resolution',
        'Knowledge base management',
        'Escalation and ticket routing',
        'Performance monitoring and alerts'
      ]
    },
    {
      title: 'Product Management',
      description: 'Streamline product development and user feedback',
      features: [
        'User feedback collection and analysis',
        'Feature request prioritization',
        'Product roadmap coordination',
        'Stakeholder communication'
      ]
    },
    {
      title: 'Operations & DevOps',
      description: 'Optimize infrastructure and operational efficiency',
      features: [
        'System monitoring and alerting',
        'Automated deployment pipelines',
        'Resource optimization and scaling',
        'Security compliance monitoring'
      ]
    }
  ];

  const integrations = [
    { name: 'GitHub', logo: '🐙' },
    { name: 'GitLab', logo: '🦊' },
    { name: 'Jira', logo: '📋' },
    { name: 'Slack', logo: '💬' },
    { name: 'AWS', logo: '☁️' },
    { name: 'Azure', logo: '🔷' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: '⚙️' }
  ];

  const testimonial = {
    quote: "Our AI DevOps assistant has revolutionized our deployment process. We've reduced deployment time by 50% and improved system uptime significantly. It's like having a dedicated DevOps engineer monitoring everything 24/7.",
    author: "Alex Chen",
    title: "CTO",
    company: "InnovateTech Solutions",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  };

  const roi = {
    developmentSpeed: '50% faster cycles',
    systemUptime: '60% better uptime',
    supportResolution: '85% resolution rate',
    costReduction: '40% cost reduction'
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark-500 mb-6">
              AI Employees for <span className="gradient-text">Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Accelerate development, enhance support, and optimize operations 
              with AI employees that understand technology workflows and best practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Tech Demo
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">50%</div>
              <div className="text-gray-600">Faster Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">85%</div>
              <div className="text-gray-600">Issue Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
              <div className="text-gray-600">System Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">40hrs</div>
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
              Scale Technology with <span className="gradient-text">AI Intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI employees designed specifically for technology companies and development workflows.
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
                className="bg-cyan-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="text-cyan-600 font-semibold">
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
              Integrates with Your <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly connect with popular development, deployment, and monitoring tools.
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
              Technology <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From development to operations, AI employees optimize every aspect of technology workflows.
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
                      <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
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
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Zap className="w-8 h-8 text-cyan-600" />
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
                  <div className="text-cyan-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Technology ROI
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Measurable improvements in development speed, system reliability, and operational efficiency.
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
                  {key === 'developmentSpeed' && <Code className="w-8 h-8 text-cyan-200" />}
                  {key === 'systemUptime' && <Database className="w-8 h-8 text-cyan-200" />}
                  {key === 'supportResolution' && <Users className="w-8 h-8 text-cyan-200" />}
                  {key === 'costReduction' && <DollarSign className="w-8 h-8 text-cyan-200" />}
                </div>
                <div className="text-3xl font-bold text-cyan-200 mb-2">
                  {value}
                </div>
                <div className="text-cyan-100 capitalize">
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
              Ready to Accelerate Your Technology?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Join technology companies who are already improving development speed and operational efficiency with AI employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start 14-Day Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Technology Demo
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

export default TechnologyPage;