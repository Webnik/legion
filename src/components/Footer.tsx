import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { name: 'AI Employees', path: '/' },
    { name: 'Platform', path: '/platform' },
    { name: 'Integrations', path: '/platform' },
    { name: 'API', path: '/platform' },
    { name: 'Security', path: '/platform' }
  ];

  const industryLinks = [
    { name: 'Real Estate', path: '/industries' },
    { name: 'Healthcare', path: '/industries' },
    { name: 'E-commerce', path: '/industries' },
    { name: 'Professional Services', path: '/industries' },
    { name: 'All Industries', path: '/industries' }
  ];

  const resourceLinks = [
    { name: 'Blog', path: '/resources' },
    { name: 'Case Studies', path: '/resources' },
    { name: 'Whitepapers', path: '/resources' },
    { name: 'Webinars', path: '/resources' },
    { name: 'ROI Calculator', path: '/' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/about' },
    { name: 'Contact', path: '/demo' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-dark-500 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Legion</span>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              AI employees that work 24/7, take no breaks, and drive superhuman results. 
              Build your unstoppable team today.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary-400" />
                <a 
                  href="mailto:&#105;&#110;&#102;&#111;&#64;&#108;&#101;&#103;&#105;&#111;&#110;&#46;&#115;&#111;"
                  className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                >
                  info@legion.so
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary-400" />
                <span className="text-gray-400">1-800-LEGION-AI</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-secondary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest insights about AI employees, AI innnovation, and automation</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-600 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-400 text-sm">
            © 2025 Legion AI. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="p-2 bg-dark-600 rounded-lg text-gray-400 hover:text-secondary-400 hover:bg-dark-700 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;