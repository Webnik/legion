import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  CheckCircle, 
  FileText,
  Users,
  Globe,
  AlertTriangle,
  Key,
  Database,
  Monitor
} from 'lucide-react';

const SecurityPage = () => {
  const certifications = [
    {
      name: 'SOC 2 Type II',
      description: 'Comprehensive security controls audit',
      icon: Shield,
      status: 'Certified'
    },
    {
      name: 'GDPR Compliant',
      description: 'European data protection regulation compliance',
      icon: Globe,
      status: 'Compliant'
    },
    {
      name: 'ISO 27001',
      description: 'Information security management standard',
      icon: FileText,
      status: 'In Progress'
    },
    {
      name: 'HIPAA Ready',
      description: 'Healthcare data protection compliance',
      icon: Users,
      status: 'Available'
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.',
      details: [
        'TLS 1.3 for data in transit',
        'AES-256 encryption at rest',
        'Perfect Forward Secrecy',
        'Certificate pinning'
      ]
    },
    {
      icon: Key,
      title: 'Access Control',
      description: 'Multi-factor authentication and role-based access control for all user accounts.',
      details: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Single sign-on (SSO) support',
        'API key management'
      ]
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Your data is protected with industry-leading security measures and privacy controls.',
      details: [
        'Data residency options',
        'Automated backups',
        'Point-in-time recovery',
        'Data anonymization'
      ]
    },
    {
      icon: Monitor,
      title: 'Monitoring & Auditing',
      description: 'Comprehensive logging and monitoring of all system activities and access.',
      details: [
        '24/7 security monitoring',
        'Audit trail logging',
        'Anomaly detection',
        'Incident response'
      ]
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Secure cloud infrastructure with regular security assessments and updates.',
      details: [
        'AWS/Azure certified infrastructure',
        'Network segmentation',
        'DDoS protection',
        'Regular security assessments'
      ]
    },
    {
      icon: Eye,
      title: 'Privacy by Design',
      description: 'Privacy controls built into every aspect of our platform and processes.',
      details: [
        'Data minimization',
        'Purpose limitation',
        'Consent management',
        'Right to be forgotten'
      ]
    }
  ];

  const complianceFrameworks = [
    'SOC 2 Type II',
    'GDPR',
    'CCPA',
    'PIPEDA',
    'HIPAA (Available)',
    'PCI DSS (Available)',
    'FedRAMP (Planned)',
    'ISO 27001 (In Progress)'
  ];

  const securityPractices = [
    {
      category: 'Development Security',
      practices: [
        'Secure code review process',
        'Automated security testing',
        'Dependency vulnerability scanning',
        'Regular penetration testing'
      ]
    },
    {
      category: 'Operational Security',
      practices: [
        '24/7 security operations center',
        'Incident response procedures',
        'Regular security training',
        'Background checks for all employees'
      ]
    },
    {
      category: 'Data Security',
      practices: [
        'Data classification and handling',
        'Secure data disposal',
        'Regular backup testing',
        'Data loss prevention (DLP)'
      ]
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
              <span className="gradient-text">Enterprise-Grade</span> Security
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Your data security is our top priority. We implement industry-leading security measures 
              to protect your business information and ensure compliance with global standards.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">256-bit</div>
                <div className="text-gray-600">AES Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">SOC 2</div>
                <div className="text-gray-600">Type II Certified</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
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
              Compliance & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance to protect your data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-500 mb-4">
                  {cert.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {cert.description}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  cert.status === 'Certified' || cert.status === 'Compliant' 
                    ? 'bg-secondary-100 text-secondary-700'
                    : cert.status === 'Available'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
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
              Comprehensive <span className="gradient-text">Security Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-layered security architecture designed to protect your data at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-bold text-dark-500 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
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
              Security <span className="gradient-text">Best Practices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to security covers every aspect of our operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {securityPractices.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-light-100 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-dark-500 mb-6">
                  {category.category}
                </h3>
                
                <ul className="space-y-4">
                  {category.practices.map((practice, practiceIndex) => (
                    <li key={practiceIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{practice}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
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
              Compliance <span className="gradient-text">Frameworks</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We adhere to international standards and regulations to ensure your data is protected.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-lg font-semibold text-dark-500">
                  {framework}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-dark-500 mb-6">
                <span className="gradient-text">Incident Response</span> & Recovery
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our dedicated security team monitors threats 24/7 and responds immediately 
                to any security incidents with a comprehensive response plan.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Detection & Analysis',
                    description: 'Automated threat detection with immediate analysis and classification'
                  },
                  {
                    title: 'Containment & Eradication',
                    description: 'Rapid containment procedures to prevent spread and eliminate threats'
                  },
                  {
                    title: 'Recovery & Communication',
                    description: 'Systematic recovery process with transparent customer communication'
                  },
                  {
                    title: 'Post-Incident Review',
                    description: 'Comprehensive analysis to improve security measures and prevent recurrence'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-500 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-500 mb-4">
                  Security Contact
                </h3>
                <p className="text-gray-600 mb-6">
                  Report security vulnerabilities or incidents directly to our security team.
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-dark-500">Email</div>
                    <div className="text-gray-600">security@legion.so</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-dark-500">Response Time</div>
                    <div className="text-gray-600">&lt; 4 hours</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-dark-500">PGP Key</div>
                    <div className="text-gray-600">Available on request</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Questions About Security?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Our security team is here to answer any questions about our security practices and compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
                Contact Security Team
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                Download Security Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;