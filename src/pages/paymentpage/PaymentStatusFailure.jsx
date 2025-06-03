import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiXCircle, HiHome } from 'react-icons/hi';

const PaymentStatusFailure = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        {/* Failure Card */}
        <div className="overflow-hidden rounded-lg bg-white shadow-xl">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 px-8 py-5">
            <div className="flex justify-center">
              <div className="rounded-full bg-white/30 p-3 backdrop-blur-sm">
                <HiXCircle className="h-14 w-14 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-10">
            <div className="text-center">
              <h1 className="mb-3 text-3xl font-bold text-gray-900">
                Payment Failed
              </h1>
              <div className="mx-auto mb-8 h-1 w-16 rounded bg-red-500/50"></div>
              <p className="leading-relaxed text-gray-600">
                We couldn't process your payment. Please try again or contact
                support if the problem persists.
              </p>
            </div>

            {/* Error Details */}
            <div className="mt-6 rounded-md border border-red-100 bg-gray-50 p-4">
              <h3 className="mb-2 font-semibold text-gray-700">
                Error Details
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  Error Code:{' '}
                  {new URLSearchParams(window.location.search).get(
                    'error_code'
                  ) || 'PAYMENT_FAILED'}
                </p>
                <p>
                  Message:{' '}
                  {new URLSearchParams(window.location.search).get('message') ||
                    'Transaction could not be completed'}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <HiHome className="mr-2 h-4 w-4" />
                Back to Home
              </button>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-gray-50 px-8 py-4 text-center">
            <span className="text-sm text-gray-500">
              If you need assistance, please contact our support team
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatusFailure;
