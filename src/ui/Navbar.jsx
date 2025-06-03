import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState(5);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navRef = useRef(null);

  // Get authentication state from Redux store
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const allNavLinks = [
    { name: 'About us', to: '/about-us' },
    { name: 'Privacy Policy', to: '/privacy-policy' },
    { name: 'Terms & Conditions', to: '/term-and-condition' },
    { name: 'Refund Policy', to: '/refund-policy' },
    { name: 'Bank Contacts', to: '/bank-contacts' },
    { name: 'Contact us', to: '/contact-us' },
    { name: 'FAQs', to: '/faqs' },
  ];

  // Responsive logic to determine visible links
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        // xl screens
        setVisibleLinks(7); // Show all links
      } else if (width >= 1024) {
        // lg screens
        setVisibleLinks(5); // Show 5 links + More dropdown
      } else if (width >= 768) {
        // md screens
        setVisibleLinks(5); // Show 5 links + More dropdown
      } else {
        setVisibleLinks(0); // Mobile - all links in hamburger menu
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
        setShowMoreDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayedLinks = allNavLinks.slice(0, visibleLinks);
  const moreLinks = allNavLinks.slice(visibleLinks);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowMoreDropdown(false);
  };

  const toggleMoreDropdown = () => {
    setShowMoreDropdown(!showMoreDropdown);
    setShowProfileDropdown(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/logIn');
    setShowProfileDropdown(false);
    setIsOpen(false);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setShowProfileDropdown(false);
    setIsOpen(false);
  };

  const closeAllDropdowns = () => {
    setShowProfileDropdown(false);
    setShowMoreDropdown(false);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md" ref={navRef}>
      <div className="mx-auto w-[85%] py-2">
        <div className="flex h-16 min-w-0 items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex flex-shrink-0 items-center">
            <img
              height={130}
              width={130}
              src="https://res.cloudinary.com/dktyonr0v/image/upload/v1740463280/logo_czm0sp.png"
              alt="logo"
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="mx-2 hidden min-w-0 flex-1 items-center justify-center md:flex lg:mx-4 xl:mx-8">
            <div className="flex items-center space-x-1 overflow-hidden md:space-x-2 lg:space-x-4 xl:space-x-6">
              {displayedLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="flex-shrink-0 whitespace-nowrap px-1 py-2 text-xs font-medium text-gray-700 transition-colors duration-200 hover:text-orange-500 md:px-2 md:text-sm lg:px-3"
                  onClick={closeAllDropdowns}
                >
                  {link.name}
                </Link>
              ))}

              {/* More Dropdown for additional links */}
              {moreLinks.length > 0 && (
                <div className="relative flex-shrink-0">
                  <button
                    onClick={toggleMoreDropdown}
                    className="flex items-center gap-1 px-1 py-2 text-xs font-medium text-gray-700 transition-colors duration-200 hover:text-orange-500 md:px-2 md:text-sm lg:px-3"
                  >
                    More
                    <ChevronDown
                      size={14}
                      className={`transform transition-transform duration-200 ${
                        showMoreDropdown ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {showMoreDropdown && (
                    <div className="absolute left-0 z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                      {moreLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.to}
                          className="block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-orange-500"
                          onClick={closeAllDropdowns}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden flex-shrink-0 items-center gap-1 md:flex md:gap-2">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center gap-1 rounded-md px-2 py-2 text-xs font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 md:gap-2 md:px-3 md:text-sm"
                >
                  <User size={18} />
                  <span className="max-w-20 hidden truncate text-xs lg:inline lg:text-sm">
                    {user?.name || 'Profile'}
                  </span>
                  <ChevronDown
                    size={14}
                    className={`transform transition-transform duration-200 ${
                      showProfileDropdown ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {showProfileDropdown && (
                  <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                    <button
                      onClick={handleProfileClick}
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                    >
                      <User size={16} className="mr-2" />
                      View Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                    >
                      <LogOut size={16} className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/logIn">
                <Button className="rounded-md !bg-[#ea5547] px-3 py-2 text-xs font-medium text-white transition-colors duration-200 hover:bg-gray-400 md:px-4 md:text-sm lg:px-6">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex-shrink-0 md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 transition-colors duration-200 hover:text-orange-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-lg border bg-white px-2 pb-3 pt-2 shadow-lg">
              {allNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-orange-500"
                  onClick={closeAllDropdowns}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Auth Section */}
              <div className="mt-2 border-t pt-2">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={handleProfileClick}
                      className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                    >
                      <User size={20} className="mr-2" />
                      {user?.name || 'Profile'}
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
                    >
                      <LogOut size={20} className="mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to="/logIn" onClick={closeAllDropdowns}>
                    <Button className="w-full rounded-md !bg-[#ea5547] px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-400">
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
