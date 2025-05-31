import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  Globe,
  Building2,
} from 'lucide-react';
import Header from '../../ui/Header';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className=" bg-gray-50">
      {/* Clean Header */}
      <Header>
        {{
          headingText: 'Contact us', // Pass the text as headingText
        }}
      </Header>

      {/* Main Content */}
      <div className="mx-auto w-4/5 px-8 py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Get In Touch
            </h2>
            <p className="mb-12 text-lg leading-relaxed text-gray-600">
              DHA Bahawalpur is committed to excellence in residential community
              development. We blend heritage with innovation to create
              extraordinary living experiences in historic Bahawalpur.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                  <MapPin className="h-6 w-6 text-[#ea5547]" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    Head Office
                  </h3>
                  <p className="text-gray-600">
                    Jinnah Avenue (MB-2), APE
                    <br />
                    Canal Road Bahawalpur, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                  <Phone className="h-6 w-6 text-[#ea5547]" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    Phone
                  </h3>
                  <p className="text-gray-600">+92 (62)-111-111-518</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                  <Mail className="h-6 w-6 text-[#ea5547]" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    Email
                  </h3>
                  <p className="text-gray-600">info@dhabahawalpur.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                  <Globe className="h-6 w-6 text-[#ea5547]" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    Website
                  </h3>
                  <p className="text-gray-600">www.dhabahawalpur.com</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-12 rounded-lg border border-gray-200 bg-white p-8">
              <div className="mb-6 flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                  <Clock className="h-5 w-5 text-[#ea5547]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-medium text-gray-900">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-medium text-gray-900">
                    9:00 AM - 2:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className=" rounded-lg border border-gray-200 bg-white p-8">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>
            <p className="mb-8 text-gray-600">
              We'll respond to your inquiry within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-200 focus:border-[#ea5547] focus:ring-2 focus:ring-[#ea5547]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-200 focus:border-[#ea5547] focus:ring-2 focus:ring-[#ea5547]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-200 focus:border-[#ea5547] focus:ring-2 focus:ring-[#ea5547]"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition duration-200 focus:border-[#ea5547] focus:ring-2 focus:ring-[#ea5547]"
                  >
                    <option value="">Select a subject</option>
                    <option value="property-inquiry">Property Inquiry</option>
                    <option value="sales">Sales Information</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="site-visit">Schedule Site Visit</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition duration-200 focus:border-[#ea5547] focus:ring-2 focus:ring-[#ea5547]"
                  placeholder="Tell us about your requirements or questions..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="flex w-full items-center justify-center space-x-2 rounded-lg bg-[#ea5547] px-6 py-4 font-semibold text-white transition duration-200 hover:bg-red-700"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>

              <p className="text-center text-sm text-gray-500">
                * Required fields
              </p>
            </div>
          </div>
        </div>

        {/* Simple CTA Section */}
        <div className="mt-20 rounded-lg bg-[#ea5547] p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Visit DHA Bahawalpur</h2>
          <p className="mb-8 text-xl opacity-90">
            Schedule a tour of our premier residential community and discover
            the DHA lifestyle.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-20">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Site Visits</h3>
              <p className="opacity-90">Tour our available properties</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-20">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Model Homes</h3>
              <p className="opacity-90">View our showcase properties</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-20">
                <User className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Expert Guidance</h3>
              <p className="opacity-90">Professional consultation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
