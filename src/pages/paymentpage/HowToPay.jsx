import React from 'react';
import {
  MdCreditCard,
  MdHelpOutline,
  MdPhone,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';

const HowToPay = () => {
  const steps = [
    {
      id: 1,
      title: 'Visit "Pay Now" link and fill the form',
      description:
        'Click on the Pay Now button and complete all required information in the form.',
    },
    {
      id: 2,
      title:
        'Enter all required fields and select payment option "Pay Via Credit Card"',
      description:
        'Fill in your personal details and select Credit Card as your preferred payment method.',
    },
    {
      id: 3,
      title: 'Deposit payment via Internet Payment Gateway',
      description:
        'Process your payment securely through our payment gateway using Visa Card, Master Card, or Union Pay.',
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">How to Pay Online</h2>
        <p className="mt-4 text-gray-600">
          Get in touch with our support team for any queries or assistance
        </p>
      </div>
      {/* Payment Method Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white p-3">
              <MdCreditCard className="text-2xl text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Credit Card Payment
            </h2>
          </div>
        </div>

        {/* Steps Section */}
        <div className="p-6">
          <div className="space-y-8">
            {steps?.map((step) => (
              <div key={step.id} className="relative pl-8">
                {/* Step Number */}
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  {step.id}
                </div>

                {/* Step Content */}
                <div className="ml-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="ml-4 flex items-start gap-2 text-gray-600">
                    <BsArrowRight className="mt-1 text-blue-500" />
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-4 text-blue-800">
        <div className="flex items-center gap-2">
          <MdHelpOutline className="h-5 w-5" />
          <span className="font-medium">Need Help?</span>
        </div>
        <p className="mt-2 flex flex-wrap items-center gap-2 text-sm">
          <span>
            If you have any questions or need assistance with your payment,
            please don't hesitate to contact our support team at:
          </span>
          <span className="flex items-center gap-1">
            <MdPhone className="h-4 w-4" />
            <a href="tel:+926211111518" className="font-medium hover:underline">
              +92 62 111 111 518
            </a>
          </span>
          <span>or</span>
          <span className="flex items-center gap-1">
            <MdOutlineEmail className="h-4 w-4" />
            <a
              href="mailto:info.fin@dhabahawalpur.com"
              className="font-medium hover:underline"
            >
              info.fin@dhabahawalpur.com
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default HowToPay;
