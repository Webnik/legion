import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, Globe, FileText } from 'lucide-react';

const PrivacyPage = () => {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: FileText,
      content: [
        {
          subtitle: 'Information You Provide',
          text: 'We collect information you provide directly to us, such as when you create an account, use our services, contact us, or participate in surveys. This may include your name, email address, company information, and any other information you choose to provide.'
        },
        {
          subtitle: 'Information We Collect Automatically',
          text: 'When you use our services, we automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, referring URLs, and information about your interactions with our services.'
        },
        {
          subtitle: 'Information from Third Parties',
          text: 'We may receive information about you from third-party services you connect to our platform, such as CRM systems, email providers, or other business tools, in accordance with their privacy policies and your authorization.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: Users,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our AI employee services, process transactions, and provide customer support.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your information to send you technical notices, updates, security alerts, and administrative messages, as well as marketing communications (which you can opt out of).'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We use information to understand how our services are used, develop new features, and improve our platform\'s performance and user experience.'
        },
        {
          subtitle: 'Legal Compliance',
          text: 'We may use your information to comply with legal obligations, resolve disputes, and enforce our agreements.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Globe,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, customer support, and payment processing.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety.'
        },
        {
          subtitle: 'Consent',
          text: 'We may share your information with your consent or at your direction.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Shield,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          subtitle: 'Encryption',
          text: 'We use industry-standard encryption to protect data in transit and at rest, including TLS 1.3 for data transmission and AES-256 for data storage.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We maintain strict access controls and regularly review who has access to personal information within our organization.'
        },
        {
          subtitle: 'Incident Response',
          text: 'We have procedures in place to detect, respond to, and notify you of security incidents that may affect your personal information.'
        }
      ]
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: Lock,
      content: [
        {
          subtitle: 'Retention Periods',
          text: 'We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.'
        },
        {
          subtitle: 'Account Data',
          text: 'If you close your account, we will delete or anonymize your personal information within 90 days, unless we are required to retain it for legal or regulatory purposes.'
        },
        {
          subtitle: 'Backup Data',
          text: 'Information may persist in backup systems for up to 12 months after deletion from our primary systems.'
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: Eye,
      content: [
        {
          subtitle: 'Access and Portability',
          text: 'You have the right to access your personal information and, in some cases, receive a copy of it in a portable format.'
        },
        {
          subtitle: 'Correction and Updates',
          text: 'You can update your account information at any time through your account settings or by contacting us.'
        },
        {
          subtitle: 'Deletion',
          text: 'You can request deletion of your personal information, subject to certain legal and contractual restrictions.'
        },
        {
          subtitle: 'Marketing Communications',
          text: 'You can opt out of marketing communications by following the unsubscribe instructions in our emails or updating your preferences in your account settings.'
        },
        {
          subtitle: 'Cookies and Tracking',
          text: 'You can control cookies through your browser settings, though this may affect the functionality of our services.'
        }
      ]
    }
  ];

  const regionalCompliance = [
    {
      region: 'European Union (GDPR)',
      description: 'We comply with the General Data Protection Regulation for EU residents, including rights to access, rectification, erasure, and data portability.'
    },
    {
      region: 'California (CCPA)',
      description: 'California residents have additional rights under the California Consumer Privacy Act, including the right to know, delete, and opt-out of sale of personal information.'
    },
    {
      region: 'Canada (PIPEDA)',
      description: 'We comply with the Personal Information Protection and Electronic Documents Act for Canadian residents.'
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
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information when you use Legion AI services.
            </p>
            <p className="text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-dark-500 mb-8 text-center">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-light-100 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
                >
                  <section.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{section.title}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Sections */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-dark-500">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-xl font-semibold text-dark-500 mb-3">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Compliance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-dark-500 mb-8 text-center">
              Regional Compliance
            </h2>
            <div className="space-y-6">
              {regionalCompliance.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-light-100 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-dark-500 mb-3">
                    {item.region}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-dark-500 mb-8">
              Contact Us About Privacy
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or our privacy practices, 
                please contact us using the information below:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-dark-500 mb-2">Email</h3>
                  <p className="text-gray-600">privacy@legion.so</p>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-500 mb-2">Mail</h3>
                  <p className="text-gray-600">
                    Legion AI, Inc.<br />
                    123 Market Street, Suite 400<br />
                    San Francisco, CA 94105
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-500 mb-2">Data Protection Officer</h3>
                  <p className="text-gray-600">dpo@legion.so</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Updates Notice */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-primary-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-dark-500 mb-4">
                Policy Updates
              </h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new Privacy Policy on this page and updating the 
                "Last updated" date. We encourage you to review this Privacy Policy periodically 
                to stay informed about how we protect your information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;