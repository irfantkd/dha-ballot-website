import React from 'react';
import {
  Home,
  Award,
  Globe,
  Handshake,
  Lightbulb,
  CheckCircle,
  MapPin,
  Megaphone,
  BarChart,
  ShieldCheck,
  Phone,
  ArrowRight, // Added for CTA
} from 'lucide-react';

const AboutUs = () => {
  return (
    // Main container with a subtle gradient background and primary text color
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 font-poppins text-[#434143] antialiased">
      {/* Hero Section: Impactful and Engaging */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A191A] via-[#434143] to-[#434143] py-28 text-white md:py-36 lg:py-48">
        {/* Background Overlay with Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dktyonr0v/image/upload/v1740123076/website-static-images/header-image.jpg" // Replace with a high-res, relevant image
            alt="DHA Bahawalpur Aerial View"
            className="h-full w-full object-cover object-center opacity-20" // Subtle background effect
          />
          <div className="absolute inset-0 bg-[#1A191A] opacity-10"></div>{' '}
          {/* Dark overlay for text readability */}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-heading font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
            Unlocking Your Future in{' '}
            <span className="text-[#ea5547]">DHA Bahawalpur</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 drop-shadow-md md:text-xl lg:text-2xl">
            We are committed to providing a transparent, efficient, and
            equitable balloting experience for prime properties in DHA
            Bahawalpur.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <a
              href="/how-it-works" // Link to a 'How It Works' or 'Process' page
              className="inline-flex items-center justify-center rounded-full bg-[#D5443B] px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#B0332D] focus:outline-none focus:ring-4 focus:ring-[#ea5547]/50 focus:ring-offset-2 focus:ring-offset-[#1A191A]"
            >
              <Award className="mr-3 h-6 w-6" />
              Discover Our Process
            </a>
            <a
              href="/contact" // Link to a contact page
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#1A191A]"
            >
              <Phone className="mr-3 h-6 w-6" />
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section: Core Values */}
      <section className="bg-white py-16 shadow-inner md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <span className="animate-fade-in inline-flex items-center rounded-full bg-[#FFF1F0] px-4 py-1.5 text-sm font-semibold text-[#ea5547]">
                <Home className="mr-2 h-4 w-4" />
                Our Foundation
              </span>
              <h2 className="text-3xl font-bold leading-tight text-[#434143] md:text-4xl">
                Driving Transparency in Property Allocation
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                At DHA Bahawalpur Balloting, our **mission** is to deliver an
                unparalleled property allocation experience. We are committed to
                fostering a fair, secure, and accessible platform, empowering
                every applicant with a clear path to securing their dream
                property in DHA Bahawalpur.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Our **vision** is to set the benchmark for integrity and
                innovation in property balloting. We aim to be the most trusted
                name, recognized for our cutting-edge technology and unwavering
                commitment to ethical practices.
              </p>
            </div>
            <div className="relative transform rounded-xl border border-gray-100 bg-[#F5F5F5] p-8 shadow-lg transition-transform duration-300 hover:scale-[1.01]">
              <div className="flex items-center justify-start gap-4">
                <Globe className="h-10 w-10 flex-shrink-0 text-[#ea5547]" />
                <h3 className="text-2xl font-bold text-[#434143]">
                  Our Core Values
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-lg text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-[#ea5547]" />{' '}
                  Integrity & Fairness
                </li>
                <li className="flex items-center">
                  <ShieldCheck className="mr-3 h-5 w-5 flex-shrink-0 text-[#ea5547]" />{' '}
                  Security & Trust
                </li>
                <li className="flex items-center">
                  <Lightbulb className="mr-3 h-5 w-5 flex-shrink-0 text-[#ea5547]" />{' '}
                  Innovation & Efficiency
                </li>
                <li className="flex items-center">
                  <Handshake className="mr-3 h-5 w-5 flex-shrink-0 text-[#ea5547]" />{' '}
                  Customer Centricity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What is Balloting? Section: Process Overview */}
      <section className="bg-[#1A191A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="bg-white/15 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-white">
              <Megaphone className="mr-2 h-4 w-4" />
              Understanding Our Process
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">
              The Transparent DHA Bahawalpur Balloting Journey
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
              Our balloting process is meticulously designed for fairness and
              ease. Here's what sets us apart:
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-xl bg-[#434143] p-8 text-center shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-[#262526]">
              <CheckCircle className="mx-auto mb-4 h-12 w-12 text-[#ea5547] transition-colors group-hover:text-white" />
              <h3 className="text-xl font-semibold text-white">
                Fair & Random Selection
              </h3>
              <p className="mt-2 text-white/80">
                Plots are assigned through an advanced, unbiased digital draw,
                ensuring true impartiality for all applicants.
              </p>
            </div>
            <div className="group rounded-xl bg-[#434143] p-8 text-center shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-[#262526]">
              <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-[#ea5547] transition-colors group-hover:text-white" />
              <h3 className="text-xl font-semibold text-white">
                Robust Data Security
              </h3>
              <p className="mt-2 text-white/80">
                Your personal and application data are safeguarded with
                cutting-edge encryption and security protocols.
              </p>
            </div>
            <div className="group rounded-xl bg-[#434143] p-8 text-center shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-[#262526]">
              <Lightbulb className="mx-auto mb-4 h-12 w-12 text-[#ea5547] transition-colors group-hover:text-white" />
              <h3 className="text-xl font-semibold text-white">
                Seamless Online Experience
              </h3>
              <p className="mt-2 text-white/80">
                Effortlessly apply, track your ballot status, and view results
                through our intuitive online portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Platform: Benefits & Advantages */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-[#FFF1F0] px-4 py-1.5 text-sm font-semibold text-[#ea5547]">
              <Handshake className="mr-2 h-4 w-4" />
              Your Advantage
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#434143] md:text-4xl">
              Why Choose DHA Bahawalpur Balloting?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
              We offer unparalleled advantages for a secure and prosperous
              investment in DHA Bahawalpur.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <BarChart className="h-8 w-8 text-[#ea5547]" />,
                title: 'Exceptional Investment Growth',
                description:
                  'Secure your financial future with a plot in a rapidly appreciating development.',
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-[#ea5547]" />,
                title: 'Assured Security & Trust',
                description:
                  "Benefit from DHA's unwavering reliability and robust legal framework for peace of mind.",
              },
              {
                icon: <Home className="h-8 w-8 text-[#ea5547]" />,
                title: 'Premium Community Living',
                description:
                  'Become part of an exclusive community boasting modern amenities and world-class infrastructure.',
              },
              {
                icon: <Globe className="h-8 w-8 text-[#ea5547]" />,
                title: 'Prime Strategic Location',
                description:
                  "Leverage the benefits of DHA Bahawalpur's strategic location with excellent connectivity.",
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-[#ea5547]" />,
                title: 'Innovative Digital Platform',
                description:
                  'Our advanced digital solutions ensure a seamless, user-friendly, and efficient balloting experience.',
              },
              {
                icon: <MapPin className="h-8 w-8 text-[#ea5547]" />,
                title: 'Direct & Accessible Support',
                description:
                  'Access comprehensive information and dedicated support directly from the DHA Bahawalpur team.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="transform rounded-xl border border-gray-100 bg-white p-8 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF1F0]">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#434143]">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-[#ea5547] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white drop-shadow-md md:text-4xl lg:text-5xl">
            Ready to Build Your Future in DHA Bahawalpur?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
            Explore our current balloting opportunities and take the first step
            towards your dream property.
          </p>
          <div className="mt-10">
            <a
              href="/apply-ballot" // Direct link to ballot application
              className="inline-flex items-center justify-center rounded-full bg-[#434143] px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#262526] focus:outline-none focus:ring-4 focus:ring-[#434143]/40 focus:ring-offset-2 focus:ring-offset-[#ea5547]"
            >
              <Award className="mr-3 h-6 w-6" />
              Apply for Ballot Today <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
