import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Download, 
  Calendar,
  Search,
  Filter,
  ArrowRight,
  Clock,
  User
} from 'lucide-react';

const ResourcesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', count: 24 },
    { id: 'blog', name: 'Blog Posts', count: 12 },
    { id: 'guides', name: 'Guides', count: 6 },
    { id: 'webinars', name: 'Webinars', count: 4 },
    { id: 'templates', name: 'Templates', count: 2 }
  ];

  const resources = [
    {
      id: 1,
      type: 'blog',
      title: 'The Complete Guide to AI Employee Implementation',
      description: 'Learn the step-by-step process for successfully integrating AI employees into your existing workflows.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Implementation',
      featured: true
    },
    {
      id: 2,
      type: 'guides',
      title: 'ROI Calculator: Measuring AI Employee Success',
      description: 'A comprehensive guide to calculating and tracking the return on investment from your AI employees.',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Analytics',
      featured: true
    },
    {
      id: 3,
      type: 'webinars',
      title: 'Live Demo: AI Employees in Real Estate',
      description: 'Watch how leading real estate companies are using AI employees to automate lead qualification and client communication.',
      author: 'David Park',
      date: '2024-01-10',
      readTime: '45 min watch',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Industry Focus',
      featured: false
    },
    {
      id: 4,
      type: 'blog',
      title: 'Security Best Practices for AI Employees',
      description: 'Essential security considerations when deploying AI employees in enterprise environments.',
      author: 'Lisa Thompson',
      date: '2024-01-08',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Security',
      featured: false
    },
    {
      id: 5,
      type: 'templates',
      title: 'AI Employee Onboarding Checklist',
      description: 'A downloadable template to ensure smooth AI employee integration into your team.',
      author: 'Alex Johnson',
      date: '2024-01-05',
      readTime: 'Template',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Templates',
      featured: false
    },
    {
      id: 6,
      type: 'blog',
      title: 'The Future of Work: Human-AI Collaboration',
      description: 'Exploring how AI employees are reshaping the workplace and creating new opportunities for human workers.',
      author: 'Emma Wilson',
      date: '2024-01-03',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Future of Work',
      featured: false
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === 'all' || resource.type === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return BookOpen;
      case 'guides': return FileText;
      case 'webinars': return Video;
      case 'templates': return Download;
      default: return BookOpen;
    }
  };

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
              Learn How to Build Your <span className="gradient-text">AI-Powered Business</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Discover best practices, implementation guides, and success stories from companies 
              already transforming their operations with AI employees.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark-500 mb-6 text-center">
              Featured <span className="gradient-text">Resources</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.article
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      {React.createElement(getTypeIcon(resource.type), {
                        className: "w-5 h-5 text-primary-600"
                      })}
                      <span className="text-primary-600 font-medium capitalize">
                        {resource.type}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{resource.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-dark-500 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{resource.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{resource.readTime}</span>
                        </div>
                      </div>
                      
                      <button className="flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="section-padding bg-light-100">
        <div className="container-custom">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-12 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.article
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        {React.createElement(getTypeIcon(resource.type), {
                          className: "w-4 h-4 text-primary-600"
                        })}
                        <span className="text-primary-600 font-medium text-sm capitalize">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-3">
                      <span className="text-secondary-600 font-medium text-sm">
                        {resource.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-dark-500 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed flex-grow line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{resource.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No resources found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or filters
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stay Updated with AI Insights
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Get the latest guides, case studies, and best practices delivered to your inbox weekly.
            </p>

            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-dark-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-50 px-8">
                Subscribe
              </button>
            </div>

            <p className="text-blue-200 text-sm mt-4">
              Join 10,000+ business leaders already subscribed
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;