import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, AlertTriangle, Scale, Gavel } from 'lucide-react';

const TermsPage = () => {
  const lastUpdated = 'January 15, 2025';

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing or using Legion AI services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.'
        },
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to modify these terms at any time. We will notify users of material changes via email or through our platform. Continued use of our services after such modifications constitutes acceptance of the updated terms.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: Users,
      content: [
        {
          subtitle: 'AI Employee Platform',
          text: 'Legion AI provides artificial intelligence-powered automation services ("AI Employees") that can perform various business tasks including but not limited to sales development, customer support, operations management, and administrative functions.'
        },
        {
          subtitle: 'Service Availability',
          text: 'We strive to maintain high availability of our services but do not guarantee uninterrupted access. We may temporarily suspend services for maintenance, updates, or other operational reasons.'
        },
        {
          subtitle: 'Service Modifications',
          text: 'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice, though we will make reasonable efforts to provide advance notice of material changes.'
        }
      ]
    },
    {
      id: 'user-accounts',
      title: 'User Accounts and Responsibilities',
      icon: Shield,
      content: [
        {
          subtitle: 'Account Creation',
          text: 'To use our services, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials.'
        },
        {
          subtitle: 'Acceptable Use',
          text: 'You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our services to transmit harmful, offensive, or illegal content, or to violate the rights of others.'
        },
        {
          subtitle: 'Account Security',
          text: 'You are responsible for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security.'
        },
        {
          subtitle: 'Data Accuracy',
          text: 'You are responsible for the accuracy and legality of any data you provide to our AI employees. You warrant that you have the right to use and share such data with our services.'
        }
      ]
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: Scale,
      content: [
        {
          subtitle: 'Subscription Fees',
          text: 'Our services are provided on a subscription basis. Fees are charged in advance and are non-refundable except as expressly stated in these terms or required by law.'
        },
        {
          subtitle: 'Payment Methods',
          text: 'We accept various payment methods as displayed during the checkout process. You authorize us to charge your chosen payment method for all fees incurred.'
        },
        {
          subtitle: 'Late Payments',
          text: 'If payment is not received when due, we may suspend or terminate your access to our services. You remain responsible for all fees incurred during the suspension period.'
        },
        {
          subtitle: 'Refunds',
          text: 'Refunds are generally not provided except in cases of service unavailability exceeding our SLA commitments or as required by applicable law.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Gavel,
      content: [
        {
          subtitle: 'Our Rights',
          text: 'Legion AI and its licensors own all rights, title, and interest in our services, including all intellectual property rights. These terms do not grant you any ownership rights in our services.'
        },
        {
          subtitle: 'Your Content',
          text: 'You retain ownership of any content you provide to our services. By using our services, you grant us a limited license to use your content solely to provide our services to you.'
        },
        {
          subtitle: 'Feedback',
          text: 'Any feedback, suggestions, or ideas you provide about our services become our property and may be used without compensation or attribution.'
        },
        {
          subtitle: 'Trademark Policy',
          text: 'You may not use our trademarks, logos, or brand names without our prior written consent.'
        }
      ]
    },
    {
      id: 'privacy-data',
      title: 'Privacy and Data Protection',
      icon: Shield,
      content: [
        {
          subtitle: 'Privacy Policy',
          text: 'Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.'
        },
        {
          subtitle: 'Data Processing',
          text: 'We process your data in accordance with applicable data protection laws and our Privacy Policy. You consent to such processing as necessary to provide our services.'
        },
        {
          subtitle: 'Data Security',
          text: 'We implement appropriate technical and organizational measures to protect your data, but cannot guarantee absolute security.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your data for as long as necessary to provide our services and comply with legal obligations, as detailed in our Privacy Policy.'
        }
      ]
    },
    {
      id: 'limitations',
      title: 'Limitations and Disclaimers',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Service Limitations',
          text: 'Our AI employees are automated systems and may not always perform tasks with the same accuracy or judgment as human employees. You should review and verify important outputs.'
        },
        {
          subtitle: 'No Warranties',
          text: 'Our services are provided "as is" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.'
        },
        {
          subtitle: 'Limitation of Liability',
          text: 'To the maximum extent permitted by law, Legion AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.'
        },
        {
          subtitle: 'Maximum Liability',
          text: 'Our total liability to you for all claims arising from or relating to these terms or our services shall not exceed the amount you paid us in the twelve months preceding the claim.'
        }
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Termination by You',
          text: 'You may terminate your account at any time by following the cancellation process in your account settings or contacting our support team.'
        },
        {
          subtitle: 'Termination by Us',
          text: 'We may terminate or suspend your account immediately if you violate these terms, fail to pay fees when due, or for any other reason at our sole discretion.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, your right to use our services ceases immediately. We may delete your data in accordance with our data retention policies.'
        },
        {
          subtitle: 'Survival',
          text: 'Provisions regarding payment obligations, intellectual property, limitations of liability, and dispute resolution shall survive termination.'
        }
      ]
    }
  ];

  const additionalTerms = [
    {
      title: 'Governing Law',
      content: 'These terms are governed by the laws of the State of California, without regard to conflict of law principles.'
    },
    {
      title: 'Dispute Resolution',
      content: 'Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.'
    },
    {
      title: 'Severability',
      content: 'If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.'
    },
    {
      title: 'Entire Agreement',
      content: 'These terms, together with our Privacy Policy, constitute the entire agreement between you and Legion AI regarding our services.'
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
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              These terms govern your use of Legion AI services. Please read them carefully 
              as they contain important information about your rights and obligations.
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

      {/* Terms Sections */}
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

      {/* Additional Terms */}
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
              Additional Terms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalTerms.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-light-100 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-dark-500 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.content}
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
              Questions About These Terms?
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-dark-500 mb-2">Email</h3>
                  <p className="text-gray-600">legal@legion.so</p>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-500 mb-2">Mail</h3>
                  <p className="text-gray-600">
                    Legion AI, Inc.<br />
                    Legal Department<br />
                    123 Market Street, Suite 400<br />
                    San Francisco, CA 94105
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-500 mb-2">Phone</h3>
                  <p className="text-gray-600">1-800-LEGION-AI</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Acknowledgment */}
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
                Acknowledgment
              </h2>
              <p className="text-gray-600">
                By using Legion AI services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms of Service. These terms constitute a 
                legally binding agreement between you and Legion AI, Inc.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;