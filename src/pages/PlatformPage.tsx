import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Code, 
  CheckCircle,
  Lock,
  Server,
  Smartphone
} from 'lucide-react';

const PlatformPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Orchestration',
      description: 'Advanced AI algorithms that understand context, prioritize tasks, and make intelligent decisions across your entire workflow ecosystem.',
      details: [
        'Natural language processing',
        'Context-aware decision making',
        'Multi-task coordination',
        'Predictive workflow optimization'
      ]
    },
    {
      icon: Zap,
      title: 'Learning & Adaptation',
      description: 'Our AI continuously learns from your business patterns, improving performance and accuracy with every interaction.',
      details: [
        'Machine learning optimization',
        'Pattern recognition',
        'Performance improvement',
        'Adaptive automation'
      ]
    },
    {
      icon: Users,
      title: 'Human-in-the-Loop',
      description: 'Seamlessly blend AI automation with human oversight, ensuring quality control and strategic decision-making.',
      details: [
        'Escalation protocols',
        'Human approval workflows',
        'Quality assurance checks',
        'Strategic decision points'
      ]
    },
    {
      icon: Globe,
      title: 'Universal Integration',
      description: 'Connect with 200+ business tools and platforms, plus custom APIs for specialized workflows and legacy systems.',
      details: [
        '200+ pre-built integrations',
        'Custom API connections',
        'Real-time data sync',
        'Legacy system support'
      ]
    }
  ];

  const securityFeatures = [
    'SOC 2 Type II Certified',
    'GDPR Compliant',
    'End-to-End Encryption',
    'Zero Trust Architecture',
    'Regular Security Audits',
    'Data Residency Options'
  ];

  const integrations = [
    { category: 'CRM', tools: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho'] },
    { category: 'Communication', tools: ['Slack', 'Teams', 'Gmail', 'Outlook'] },
    { category: 'Project Management', tools: ['Asana', 'Trello', 'Monday', 'Jira'] },
    { category: 'Finance', tools: ['QuickBooks', 'Xero', 'FreshBooks', 'Stripe'] },
    { category: 'Marketing', tools: ['Mailchimp', 'Constant Contact', 'Buffer', 'Hootsuite'] },
    { category: 'E-commerce', tools: ['Shopify', 'WooCommerce', 'BigCommerce', 'Magento'] }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-500 via-dark-600 to-primary-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Technology Behind <span className="gradient-text">Your AI Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Enterprise-grade AI that's simple to use and powerful in practice. 
              Built for scale, security, and seamless integration.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-secondary-300" />
                  </div>
                  <p className="text-gray-300">Platform Demo Video</p>
                  <p className="text-sm text-gray-400">Coming Soon</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
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
              Built for <span className="gradient-text">Enterprise Performance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four core capabilities that make Legion AI the most powerful and reliable 
              AI employee platform available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dark-500 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-dark-500 mb-6">
                <span className="gradient-text">Enterprise-Grade</span> Security
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your data security is our top priority. We implement industry-leading 
                security measures to protect your business information.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <Shield className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Lock className="w-8 h-8 text-primary-600 mb-4" />
                  <h3 className="font-semibold text-dark-500 mb-2">Encryption</h3>
                  <p className="text-gray-600 text-sm">AES-256 encryption for data at rest and in transit</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Server className="w-8 h-8 text-secondary-600 mb-4" />
                  <h3 className="font-semibold text-dark-500 mb-2">Infrastructure</h3>
                  <p className="text-gray-600 text-sm">AWS & Azure certified cloud infrastructure</p>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Shield className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-dark-500 mb-2">Compliance</h3>
                  <p className="text-gray-600 text-sm">GDPR, SOC 2, and industry-specific compliance</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Smartphone className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="font-semibold text-dark-500 mb-2">Access Control</h3>
                  <p className="text-gray-600 text-sm">Multi-factor authentication and role-based access</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
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
              Integrates with <span className="gradient-text">Everything</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing tools and workflows. No disruption, just enhancement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light-100 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-dark-500 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-white p-3 rounded-lg text-center text-gray-700 font-medium hover:shadow-md transition-shadow duration-300"
                    >
                      {tool}
                    </div>
                  ))}
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
              Don't see your tool? We can build custom integrations.
            </p>
            <button className="btn-secondary">
              Request Integration
            </button>
          </motion.div>
        </div>
      </section>

      {/* API Section */}
      <section className="section-padding bg-dark-500 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Built for <span className="gradient-text">Developers</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Powerful APIs and SDKs for custom integrations and advanced workflows.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'RESTful API with comprehensive documentation',
                  'Webhooks for real-time event notifications',
                  'SDKs for popular programming languages',
                  'GraphQL support for flexible data queries',
                  'Rate limiting and authentication built-in'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-secondary-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary">
                View API Documentation
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="bg-dark-600 rounded-lg p-4 font-mono text-sm">
                <div className="text-secondary-400 mb-2">// Initialize Legion AI client</div>
                <div className="text-gray-300">
                  <span className="text-blue-400">const</span> legion = <span className="text-blue-400">new</span> <span className="text-yellow-400">LegionAI</span>({'{'}
                </div>
                <div className="text-gray-300 ml-4">
                  apiKey: <span className="text-green-400">'your-api-key'</span>,
                </div>
                <div className="text-gray-300 ml-4">
                  environment: <span className="text-green-400">'production'</span>
                </div>
                <div className="text-gray-300">{'});'}</div>
                <div className="mt-4 text-secondary-400">// Create AI employee task</div>
                <div className="text-gray-300">
                  <span className="text-blue-400">const</span> task = <span className="text-blue-400">await</span> legion.tasks.create({'{'}
                </div>
                <div className="text-gray-300 ml-4">
                  employee: <span className="text-green-400">'sarah'</span>,
                </div>
                <div className="text-gray-300 ml-4">
                  action: <span className="text-green-400">'qualify_lead'</span>,
                </div>
                <div className="text-gray-300 ml-4">
                  data: leadData
                </div>
                <div className="text-gray-300">{'});'}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;