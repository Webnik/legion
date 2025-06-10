import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot } from 'lucide-react';
import BookingModal from './BookingModal';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'AI Employees', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Platform', path: '/platform' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
  ];

  // Determine text colors based on page and scroll state
  const getTextColor = () => {
    if (isScrolled) {
      return 'text-dark-500'; // Always dark when scrolled
    }
    if (isHomePage) {
      return 'text-white'; // White on homepage when not scrolled
    }
    return 'text-dark-500'; // Dark on inner pages when not scrolled
  };

  const getLogoTextColor = () => {
    if (isScrolled) {
      return 'text-dark-500';
    }
    if (isHomePage) {
      return 'text-white';
    }
    return 'text-dark-500';
  };

  const getMobileButtonColor = () => {
    if (isScrolled) {
      return 'text-dark-500';
    }
    if (isHomePage) {
      return 'text-white';
    }
    return 'text-dark-500';
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className={`text-2xl font-bold transition-colors duration-300 ${getLogoTextColor()}`}>
                Legion
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                    location.pathname === item.path
                      ? 'text-primary-500'
                      : getTextColor()
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary text-sm px-6 py-2"
              >
                Book Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${getMobileButtonColor()}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 font-medium transition-colors duration-300 hover:text-primary-500 hover:bg-primary-50 ${
                      location.pathname === item.path ? 'text-primary-500 bg-primary-50' : 'text-dark-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsBookingOpen(true);
                    }}
                    className="btn-primary w-full text-center text-sm"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default Navigation;