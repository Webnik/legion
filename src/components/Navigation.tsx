import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot, ChevronDown } from 'lucide-react';
import BookingModal from './BookingModal';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
    { 
      name: 'Industries', 
      path: '/industries',
      submenu: [
        { name: 'Real Estate', path: '/industries/real-estate' },
        { name: 'Healthcare', path: '/industries/healthcare' },
        { name: 'E-commerce', path: '/industries/ecommerce' },
        { name: 'Professional Services', path: '/industries/professional-services' },
        { name: 'All Industries', path: '/industries' }
      ]
    },
    { 
      name: 'Platform', 
      path: '/platform',
      submenu: [
        { name: 'Overview', path: '/platform' },
        { name: 'Integrations', path: '/integrations' },
        { name: 'API', path: '/api' },
        { name: 'Security', path: '/security' }
      ]
    },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '/resources' },
    { 
      name: 'About', 
      path: '/about',
      submenu: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' }
      ]
    },
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

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
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
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <div>
                      <button
                        className={`flex items-center gap-1 font-medium transition-colors duration-300 hover:text-primary-500 ${
                          location.pathname === item.path || item.submenu.some(sub => location.pathname === sub.path)
                            ? 'text-primary-500'
                            : getTextColor()
                        }`}
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                          openDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 ${
                              location.pathname === subItem.path ? 'bg-primary-50 text-primary-600' : ''
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                        location.pathname === item.path
                          ? 'text-primary-500'
                          : getTextColor()
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
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
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className={`flex items-center justify-between w-full px-4 py-2 font-medium transition-colors duration-300 hover:text-primary-500 hover:bg-primary-50 ${
                            location.pathname === item.path || item.submenu.some(sub => location.pathname === sub.path)
                              ? 'text-primary-500 bg-primary-50' 
                              : 'text-dark-500'
                          }`}
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {openDropdown === item.name && (
                          <div className="bg-gray-50">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-8 py-2 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-colors duration-300 ${
                                  location.pathname === subItem.path ? 'text-primary-500 bg-primary-50' : ''
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-2 font-medium transition-colors duration-300 hover:text-primary-500 hover:bg-primary-50 ${
                          location.pathname === item.path ? 'text-primary-500 bg-primary-50' : 'text-dark-500'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
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