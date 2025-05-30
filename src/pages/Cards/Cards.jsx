import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  CreditCard,
  Building2,
  FileText,
  CheckCircle,
  Phone,
  Mail,
  Globe,
} from 'lucide-react';

const Cards = () => {
  const [activeTab, setActiveTab] = useState('manual');
  const [currentSlide, setCurrentSlide] = useState(0);

  const TabButton = ({ label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`min-w-[120px] rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ease-in-out sm:min-w-[140px] sm:px-6 sm:py-3 sm:text-base
        ${
          isActive
            ? 'scale-105 transform bg-[#ea5547] text-white shadow-lg' // Changed to [#ea5547]
            : 'border border-gray-300 bg-white text-gray-700 hover:border-red-300 hover:bg-red-50 hover:text-red-700' // Changed to red-300, red-50, red-700
        }`}
    >
      {label}
    </button>
  );

  const instructions = {
    manual: [
      {
        title: 'Download & Print Application Form',
        description:
          'Securely access and download the official application form online, or pick up a physical copy from any designated DHA Bahawalpur bank branch.',
        icon: <Download className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '01',
      },
      {
        title: 'Complete Form & Deposit Funds',
        description:
          'Carefully fill out all sections of the form. Deposit the required amount at any authorized DHA branch. Remember to retain your "Customer Copy" as vital proof of submission.',
        icon: <FileText className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '02',
      },
      {
        title: 'Dedicated Support & Assistance',
        description:
          'For any inquiries, assistance, or clarification regarding your application, please contact our support team directly via phone or email.',
        icon: <Phone className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '03',
      },
    ],
    BankChallan: [
      {
        title: 'Initiate Online Application',
        description:
          'Begin your application journey by visiting our secure official ballot application portal. Create your personal account using a valid and accessible email address.',
        icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '01',
      },
      {
        title: 'Select Bank Challan Payment Option',
        description:
          'Proceed through the application process, ensuring all mandatory fields are accurately completed. Choose "Pay Via Bank Challan" as your preferred payment method.',
        icon: <Building2 className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '02',
      },
      {
        title: 'Choose Your Designated Bank',
        description:
          'From the comprehensive list provided, carefully select the specific bank where you intend to deposit your application funds and challan.',
        icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '03',
      },
      {
        title: 'Download & Print Unique Challan',
        description:
          'Generate and download your personalized Bank Challan Form. Print this form clearly as it is essential for submission at your selected bank branch.',
        icon: <Download className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '04',
      },
      {
        title: 'Visit Selected Bank Branch Physically',
        description:
          'With your printed Bank Challan Form, proceed to the nearest branch of your previously selected bank to complete the payment process.',
        icon: <Building2 className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '05',
      },
      {
        title: 'Deposit Funds & Submit Form',
        description:
          'At the bank, deposit the required application amount along with your form. Ensure you receive and securely keep the "Customer Copy" as your official proof of payment and submission.',
        icon: <FileText className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '06',
      },
      {
        title: 'Bank Forwards Application to DHA',
        description:
          'Following your deposit, the bank will securely and directly transmit your completed application form and the challan copy to DHA Bahawalpur for processing.',
        icon: <Mail className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '07',
      },
      {
        title: 'Monitor Application Status Online',
        description:
          'You can conveniently track the real-time status of your application on the official DHA Bahawalpur website. Please allow up to 5 working days for initial updates to appear.',
        icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '08',
      },
    ],
    creditCard: [
      {
        title: 'Initiate New Online Application',
        description:
          'Access the dedicated "New Application" link on our portal and meticulously fill out all sections of the comprehensive application form.',
        icon: <FileText className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '01',
      },
      {
        title: 'Choose Secure Credit Card Payment',
        description:
          'After accurately completing all necessary fields, select "Pay Via Credit Card" as your payment method to proceed with the online transaction.',
        icon: <CreditCard className="h-6 w-6 sm:h-8 sm:w-8" />,
        step: '02',
      },
      {
        title: 'Complete Payment via Secure Gateway',
        description:
          'Finalize your payment through our encrypted and secure online payment gateway, which supports Visa Card, Master Card, and Union Pay for your convenience.',
        icon: <CheckCircle className="h-6 w-6 w-8 sm:h-8" />,
        step: '03',
      },
      {
        title: 'Download Confirmation & Records',
        description:
          'Upon successful payment, immediately download and securely save your "Application Form [PDF]" for your personal records. This form does NOT need to be sent anywhere.',
        icon: <Download className="h-6 w-6 w-8 sm:h-8" />,
        step: '04',
      },
    ],
  };

  const currentCards = instructions[activeTab];
  const totalSlides = currentCards.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'manual':
        return 'Manual Form Application Guide';
      case 'BankChallan':
        return 'Bank Challan Application Process';
      case 'creditCard':
        return 'Credit Card Application Process';
      default:
        return 'Application Guide';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto w-full max-w-7xl px-3 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Application Process Guide
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
            Follow these comprehensive steps to successfully submit your
            application for DHA Bahawalpur.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#ea5547] sm:w-24"></div>{' '}
          {/* Changed to [#ea5547] */}
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:mb-12 sm:flex-row sm:gap-4">
          <TabButton
            label="Manual Form"
            isActive={activeTab === 'manual'}
            onClick={() => {
              setActiveTab('manual');
              setCurrentSlide(0);
            }}
          />
          <TabButton
            label="Bank Challan"
            isActive={activeTab === 'BankChallan'}
            onClick={() => {
              setActiveTab('BankChallan');
              setCurrentSlide(0);
            }}
          />
          <TabButton
            label="Credit Card"
            isActive={activeTab === 'creditCard'}
            onClick={() => {
              setActiveTab('creditCard');
              setCurrentSlide(0);
            }}
          />
        </div>

        {/* Main Content Card */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#ea5547] to-red-700 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            {/* Changed to [#ea5547] and red-700 */}
            <h2 className="text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
              {getTabTitle()}
            </h2>
          </div>

          {/* Cards Container */}
          <div className="relative p-4 sm:p-6 lg:p-8">
            {/* Navigation Buttons - Hidden on mobile for cleaner look */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition-all duration-300 hover:text-[#ea5547] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 sm:flex lg:left-4 lg:h-12 lg:w-12" // Changed hover:text-[#ea5547]
              disabled={totalSlides <= 1}
            >
              <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition-all duration-300 hover:text-[#ea5547] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 sm:flex lg:right-4 lg:h-12 lg:w-12" // Changed hover:text-[#ea5547]
              disabled={totalSlides <= 1}
            >
              <ChevronRight className="lg-w-6 h-5 w-5 lg:h-6" />
            </button>

            {/* Card Display Area */}
            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {currentCards.map((card, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 sm:px-4"
                    >
                      <div className="flex min-h-[400px] flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl sm:min-h-[450px] sm:p-6 lg:p-8">
                        {/* Header with Step and Icon */}
                        <div className="mb-6 flex items-start justify-between">
                          <div className="text-4xl font-bold leading-none text-gray-100 sm:text-5xl lg:text-6xl">
                            {card.step}
                          </div>
                          <div className="rounded-xl border border-red-100 bg-red-50 p-3 sm:p-4">
                            {' '}
                            {/* Changed to red-100, red-50 */}
                            <div className="text-[#ea5547]">
                              {card.icon}
                            </div>{' '}
                            {/* Changed to [#ea5547] */}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                          <h3 className="mb-3 text-lg font-bold leading-tight text-gray-900 sm:text-xl lg:text-2xl">
                            {card.title}
                          </h3>
                          <div className="mb-4 h-1 w-16 rounded-full bg-[#ea5547]"></div>{' '}
                          {/* Changed to [#ea5547] */}
                          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                            {card.description}
                          </p>
                        </div>

                        {/* Progress Section */}
                        <div className="mt-6 border-t border-gray-100 pt-6">
                          <div className="mb-2 flex items-center justify-between text-xs text-gray-500 sm:text-sm">
                            <span>
                              Step {parseInt(card.step)} of {totalSlides}
                            </span>
                            <span>
                              {Math.round(
                                (parseInt(card.step) / totalSlides) * 100
                              )}
                              % Complete
                            </span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-gray-200">
                            <div
                              className="h-2 rounded-full bg-[#ea5547] transition-all duration-500 ease-in-out" // Changed to [#ea5547]
                              style={{
                                width: `${
                                  (parseInt(card.step) / totalSlides) * 100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="mt-6 flex justify-center gap-4 sm:hidden">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ea5547] text-white shadow-lg transition-all duration-300 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50" // Changed to [#ea5547], red-700
                disabled={totalSlides <= 1}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ea5547] text-white shadow-lg transition-all duration-300 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50" // Changed to [#ea5547], red-700
                disabled={totalSlides <= 1}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="mt-6 flex justify-center gap-2 sm:mt-8">
              {currentCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 sm:h-3 sm:w-3 ${
                    index === currentSlide
                      ? 'w-6 bg-[#ea5547] sm:w-8' // Changed to [#ea5547]
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Step Counter */}
            <div className="mt-4 text-center sm:mt-6">
              <span className="text-sm font-medium text-gray-500 sm:text-base">
                Viewing Step {currentSlide + 1} of {totalSlides}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Information Footer */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8 lg:p-10">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              DHA Bahawalpur
            </h3>
            <p className="text-base italic text-gray-600 sm:text-lg">
              Where Aspirations Take Root
            </p>
          </div>

          <div className="mb-6 flex flex-col items-center justify-center gap-4 text-gray-700 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#ea5547]" />{' '}
              {/* Changed to [#ea5547] */}
              <span className="text-sm font-medium sm:text-base">
                +92 62 111 111 518
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#ea5547]" />{' '}
              {/* Changed to [#ea5547] */}
              <span className="text-sm font-medium sm:text-base">
                info@dhabahawalpur.com
              </span>
            </div>
          </div>

          <div className="text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
            <strong>Head Office:</strong> Jinnah Avenue (MB-2), APE Canal Road,
            Bahawalpur, Punjab, Pakistan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
