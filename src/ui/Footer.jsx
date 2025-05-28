import React from 'react';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact us', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Refund Policy', href: '#refund' },
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-4 w-4" />,
      text: '+92 62 111 111 518, +92 62 228 0159',
      type: 'phone',
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'ballot2021@dhabahawalpur.com',
      type: 'email',
    },
    {
      icon: <Globe className="h-4 w-4" />,
      text: 'www.dhabahawalpur.com',
      type: 'website',
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      text: 'Head Office, Jinnah Avenue (MB-2), APE Canal Road',
      type: 'address',
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-100 pb-6 pt-12">
      <div className="mx-auto w-[85%]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center">
              {/* Logo placeholder - replace with actual logo */}

              <div>
                <div className="flex items-center">
                  <img
                    height={130}
                    width={130}
                    src="https://res.cloudinary.com/dktyonr0v/image/upload/v1740463280/logo_czm0sp.png"
                    alt=""
                  />
                </div>
                <div className="mt-1 text-sm italic text-gray-600"></div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors duration-200 hover:text-orange-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Get in Touch
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-0.5 text-red-600">{contact.icon}</div>
                  <div className="text-sm leading-relaxed text-gray-600">
                    {contact.type === 'email' ? (
                      <a
                        href={`mailto:${contact.text}`}
                        className="transition-colors duration-200 hover:text-orange-500"
                      >
                        {contact.text}
                      </a>
                    ) : contact.type === 'website' ? (
                      <a
                        href={`https://${contact.text}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-200 hover:text-orange-500"
                      >
                        {contact.text}
                      </a>
                    ) : contact.type === 'phone' ? (
                      <a
                        href={`tel:${contact.text.split(',')[0].trim()}`}
                        className="transition-colors duration-200 hover:text-orange-500"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span>{contact.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-300 pt-6">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            {/* Copyright */}
            <div className="text-center text-sm text-gray-500 sm:text-left">
              © 2025 DHA Bahawalpur. All Rights Reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 transition-colors duration-200 hover:text-orange-500"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
