import React from 'react';
import { FaHome, FaMapMarkedAlt, FaBuilding } from 'react-icons/fa';
import { BiSad } from 'react-icons/bi';
const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-green-50 p-4">
      <div className="w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl">
        {/* Top header */}
        <div className="bg-brand-brown py-4 text-center text-white">
          <h1 className="text-3xl font-bold">DHA Bahawalpur</h1>
          <p className="text-sm">Sustainable Future for Bahawalpur</p>
        </div>
        <div className="p-6 md:p-8">
          {/* Main 404 section */}
          <div className="mb-8 flex flex-col items-center md:flex-row">
            <div className="mb-6 flex justify-center md:mb-0 md:w-1/3">
              <div className="rounded-full bg-yellow-100 p-6">
                <BiSad className="text-8xl text-yellow-500" />
              </div>
            </div>
            <div className="text-center md:w-2/3 md:text-left">
              <h2 className="text-6xl font-bold text-gray-800">404</h2>
              <h3 className="mb-3 text-2xl font-semibold text-gray-700">
                Page Not Found
              </h3>
              <p className="mb-6 text-gray-600">
                We're sorry, but the page you're looking for doesn't exist or
                has been moved.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <button
                  onClick={() => (window.location.href = '/')}
                  className="flex items-center justify-center gap-2 rounded-md bg-brand-brown px-8 py-3 font-medium text-white shadow-md transition duration-300 hover:bg-opacity-90"
                >
                  <FaHome className="text-lg" /> Back to Home
                </button>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>
          {/* Helpful links section (integrated in the same card) */}
          <div>
            <h4 className="mb-6 text-xl font-semibold text-brand-brown">
              You might be looking for:
            </h4>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <a
                href="/projects"
                className="group flex flex-col items-center rounded-lg border border-green-200 bg-green-50 p-5 text-center transition duration-300 hover:bg-green-100 hover:shadow-md"
              >
                <div className="mb-3 rounded-full bg-green-100 p-3 group-hover:bg-green-200">
                  <FaBuilding className="text-2xl text-green-600" />
                </div>
                <div>
                  <h5 className="mb-1 font-medium text-gray-800">
                    Our Projects
                  </h5>
                  <p className="text-sm text-gray-600">
                    Explore residential and commercial opportunities
                  </p>
                </div>
              </a>
              <a
                href="/about"
                className="group flex flex-col items-center rounded-lg border border-blue-200 bg-blue-50 p-5 text-center transition duration-300 hover:bg-blue-100 hover:shadow-md"
              >
                <div className="mb-3 rounded-full bg-blue-100 p-3 group-hover:bg-blue-200">
                  <FaHome className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h5 className="mb-1 font-medium text-gray-800">About DHA</h5>
                  <p className="text-sm text-gray-600">
                    Learn about our vision and mission
                  </p>
                </div>
              </a>
              <a
                href="/facilities"
                className="group flex flex-col items-center rounded-lg border border-yellow-200 bg-yellow-50 p-5 text-center transition duration-300 hover:bg-yellow-100 hover:shadow-md"
              >
                <div className="mb-3 rounded-full bg-yellow-100 p-3 group-hover:bg-yellow-200">
                  <FaMapMarkedAlt className="text-2xl text-yellow-600" />
                </div>
                <div>
                  <h5 className="mb-1 font-medium text-gray-800">Facilities</h5>
                  <p className="text-sm text-gray-600">
                    Discover amenities and services
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="border-t border-gray-200 bg-gray-50 p-4 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} DHA Bahawalpur. All rights reserved.
          </p>
          <p className="mt-1">
            Creating sustainable communities for a better future.
          </p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
