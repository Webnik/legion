import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Book, 
  Zap, 
  Shield, 
  Copy, 
  CheckCircle,
  ExternalLink,
  Download,
  Play,
  Terminal
} from 'lucide-react';

const APIPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedCode, setCopiedCode] = useState('');

  const codeExamples = {
    javascript: `// Initialize Legion AI client
const legion = new LegionAI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Create AI employee task
const task = await legion.tasks.create({
  employee: 'sarah',
  action: 'qualify_lead',
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Acme Corp'
  }
});

// Get task status
const status = await legion.tasks.get(task.id);
console.log(status);`,

    python: `# Initialize Legion AI client
from legion_ai import LegionAI

legion = LegionAI(
    api_key='your-api-key',
    environment='production'
)

# Create AI employee task
task = legion.tasks.create(
    employee='sarah',
    action='qualify_lead',
    data={
        'name': 'John Doe',
        'email': 'john@example.com',
        'company': 'Acme Corp'
    }
)

# Get task status
status = legion.tasks.get(task.id)
print(status)`,

    curl: `# Create AI employee task
curl -X POST https://api.legion.so/v1/tasks \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "employee": "sarah",
    "action": "qualify_lead",
    "data": {
      "name": "John Doe",
      "email": "john@example.com",
      "company": "Acme Corp"
    }
  }'

# Get task status
curl -X GET https://api.legion.so/v1/tasks/{task_id} \\
  -H "Authorization: Bearer your-api-key"`
  };

  const endpoints = [
    {
      method: 'POST',
      path: '/v1/tasks',
      description: 'Create a new task for an AI employee',
      params: ['employee', 'action', 'data']
    },
    {
      method: 'GET',
      path: '/v1/tasks/{id}',
      description: 'Get task status and results',
      params: ['id']
    },
    {
      method: 'GET',
      path: '/v1/employees',
      description: 'List all available AI employees',
      params: []
    },
    {
      method: 'POST',
      path: '/v1/webhooks',
      description: 'Create a webhook for real-time notifications',
      params: ['url', 'events']
    },
    {
      method: 'GET',
      path: '/v1/analytics',
      description: 'Get performance analytics and metrics',
      params: ['start_date', 'end_date', 'employee']
    }
  ];

  const sdks = [
    {
      name: 'JavaScript/Node.js',
      description: 'Official SDK for JavaScript and Node.js applications',
      install: 'npm install @legion-ai/sdk',
      docs: '/docs/sdk/javascript'
    },
    {
      name: 'Python',
      description: 'Official SDK for Python applications',
      install: 'pip install legion-ai',
      docs: '/docs/sdk/python'
    },
    {
      name: 'PHP',
      description: 'Official SDK for PHP applications',
      install: 'composer require legion-ai/sdk',
      docs: '/docs/sdk/php'
    },
    {
      name: 'Ruby',
      description: 'Official SDK for Ruby applications',
      install: 'gem install legion-ai',
      docs: '/docs/sdk/ruby'
    }
  ];

  const copyToClipboard = (code: string, language: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(''), 2000);
  };

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
              Build with the <span className="gradient-text">Legion AI API</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Powerful, flexible APIs and SDKs to integrate AI employees into any application. 
              RESTful design, comprehensive documentation, and enterprise-grade reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
                Get API Key
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                View Documentation
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">&lt;100ms</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">10k+</div>
              <div className="text-gray-300">Requests/min</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
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
              Get Started in <span className="gradient-text">Minutes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred language and start building with Legion AI.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Language Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {Object.keys(codeExamples).map((language) => (
                <button
                  key={language}
                  onClick={() => setActiveTab(language)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === language
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {language === 'javascript' ? 'JavaScript' : language === 'curl' ? 'cURL' : 'Python'}
                </button>
              ))}
            </div>

            {/* Code Example */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-dark-600 rounded-xl p-6 overflow-x-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-secondary-400" />
                    <span className="text-gray-300 font-medium">
                      {activeTab === 'javascript' ? 'JavaScript' : activeTab === 'curl' ? 'cURL' : 'Python'}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(codeExamples[activeTab as keyof typeof codeExamples], activeTab)}
                    className="flex items-center gap-2 text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                  >
                    {copiedCode === activeTab ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-gray-300 text-sm leading-relaxed overflow-x-auto">
                  <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
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
              Core <span className="gradient-text">API Endpoints</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RESTful APIs designed for simplicity and power.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      endpoint.method === 'GET' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-dark-500">
                      {endpoint.path}
                    </code>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 mb-2">{endpoint.description}</p>
                    {endpoint.params.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {endpoint.params.map((param, paramIndex) => (
                          <span
                            key={paramIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-mono"
                          >
                            {param}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>Try it</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
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
              Official <span className="gradient-text">SDKs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Native libraries for your favorite programming languages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sdks.map((sdk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-light-100 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-dark-500 mb-4">
                  {sdk.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {sdk.description}
                </p>
                
                <div className="bg-dark-600 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <code className="text-secondary-400 font-mono">
                      {sdk.install}
                    </code>
                    <button
                      onClick={() => copyToClipboard(sdk.install, sdk.name)}
                      className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                    >
                      {copiedCode === sdk.name ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="btn-primary flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Install
                  </button>
                  <button className="btn-secondary">
                    <Book className="w-4 h-4 mr-2" />
                    Docs
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              Enterprise-Ready <span className="gradient-text">Features</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'High Performance',
                description: 'Sub-100ms response times with global CDN'
              },
              {
                icon: Shield,
                title: 'Secure by Design',
                description: 'OAuth 2.0, API keys, and rate limiting built-in'
              },
              {
                icon: Code,
                title: 'Developer Friendly',
                description: 'RESTful design with comprehensive documentation'
              },
              {
                icon: Play,
                title: 'Interactive Docs',
                description: 'Try every endpoint directly in the browser'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-500 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
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
              Ready to Start Building?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Get your API key and start integrating AI employees into your application today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
                Get Free API Key
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                Schedule Developer Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default APIPage;