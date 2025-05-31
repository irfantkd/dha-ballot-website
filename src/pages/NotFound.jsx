import React from 'react';
import {
  Home,
  Search,
  FileText,
  Users,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

const NotFound = () => {
  const handleNavigateHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">
            {/* 404 Section */}
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gray-50/30"></div>
              <div
                className="absolute right-0 top-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full opacity-10"
                style={{ backgroundColor: '#ea5547' }}
              ></div>
              <div
                className="absolute bottom-0 left-0 h-24 w-24 -translate-x-12 translate-y-12 rounded-full opacity-10"
                style={{ backgroundColor: '#ea5547' }}
              ></div>

              <div className="relative px-8 py-12 md:px-12">
                <div className="flex flex-col items-center justify-center text-center">
                  {/* 404 Illustration */}
                  <div className="text-center">
                    <div className="mb-6 inline-flex items-center justify-center rounded-full bg-gray-100 p-8">
                      <div
                        className="text-8xl font-bold"
                        style={{ color: '#ea5547' }}
                      >
                        404
                      </div>
                    </div>

                    <h2 className="mb-4 text-3xl font-bold text-[#434143] md:text-4xl">
                      Page Not Found
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed text-gray-600">
                      The ballot page you're looking for doesn't exist or has
                      been moved. Don't worry, let's get you back on track!
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                      <button
                        onClick={handleNavigateHome}
                        className="flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                        style={{ backgroundColor: '#ea5547' }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = '#d14438')
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = '#ea5547')
                        }
                      >
                        <Home className="h-5 w-5" />
                        Go to Home
                      </button>
                      <button
                        onClick={handleGoBack}
                        className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#434143] px-6 py-3 font-semibold text-[#434143] transition-all hover:bg-[#434143] hover:text-white"
                      >
                        <ArrowLeft className="h-5 w-5" />
                        Go Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="border-t border-gray-200 bg-gray-50 px-8 py-8 md:px-12">
              <div className="text-center">
                <h3 className="mb-4 text-lg font-semibold text-[#434143]">
                  Need Help?
                </h3>
                <p className="mb-6 text-gray-600">
                  If you believe this is an error or need assistance with the
                  ballot system, please contact us.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" style={{ color: '#ea5547' }} />
                    <span>+92-xxx-xxx-xxxx</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="h-4 w-4" style={{ color: '#ea5547' }} />
                    <span>support@dhaballot.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" style={{ color: '#ea5547' }} />
                    <span>DHA Office, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 bg-[#434143] px-8 py-6 text-center">
              <div className="mb-2 text-sm text-gray-300">
                © {new Date().getFullYear()} Defense Housing Authority. All
                rights reserved.
              </div>
              <div className="text-xs text-gray-400">
                Secure Ballot Management System
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
