import React, { useState } from 'react';

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('manual'); 

  // Define instruction sets with refined descriptions
  const instructions = {
    manual: [
      {
        title: 'Step 1: Download & Print Form',
        description:
          'Easily download the application form online, or pick up a physical copy at your nearest designated bank branch.',
      },
      {
        title: 'Step 2: Complete & Deposit',
        description:
          'Fill out the form accurately. Deposit the required amount along with your application at any Credit Card branch. Remember to collect your "Customer Copy" of the payment slip/form.',
      },
      {
        title: 'Step 3: Contact Us for Support',
        description:
          'Should you have any queries, please do not hesitate to contact us. Reach out via phone at +92 62 111 111 518 or email us at ballot2021@dhabahawalpur.com.',
      },
    ],
    BankChallan: [
      {
        title: 'Step 1: Begin Online Application',
        description:
          'Visit our official ballot application portal. Create your secure account using a valid email address to start the process.',
      },
      {
        title: 'Step 2: Select Bank Challan Payment',
        description:
          'Carefully fill in all mandatory fields within the application. When prompted, choose "Pay Via Bank Challan" as your preferred payment method.',
      },
      {
        title: 'Step 3: Choose Your Bank',
        description:
          'From the provided list, select your desired bank where you intend to deposit your application form and the associated fee.',
      },
      {
        title: 'Step 4: Download & Print Challan',
        description: 'Proceed to download and print your unique Bank Challan Form for submission.',
      },
      {
        title: 'Step 5: Visit Selected Bank Branch',
        description:
          'Take your printed Bank Challan Form to the nearest branch of the bank you selected in Step 3.',
      },
      {
        title: 'Step 6: Deposit Funds & Form',
        description:
          'At the bank, deposit the required amount and your application form. Ensure you collect the "Customer Copy" of your payment slip or form as proof.',
      },
      {
        title: 'Step 7: Bank Forwards Application',
        description:
          'The bank will handle the secure forwarding of your application form and the deposited challan copy directly to DHA Bahawalpur.',
      },
      {
        title: 'Step 8: Track Application Status',
        description:
          'Monitor the status of your online application on the DHAB website. Please allow 5 working days for updates. For any questions, contact: +92 62 111 111 518 or ballot2021@dhabahawalpur.com.',
      },
    ],
    creditCard: [
      {
        title: 'Step 1: Initiate New Application',
        description:
          'Access the "New Application" link on our portal and begin by carefully filling out the comprehensive application form.',
      },
      {
        title: 'Step 2: Select Credit Card Payment',
        description:
          'Ensure all required fields are accurately completed. Choose "Pay Via Credit Card" as your payment option to proceed.',
      },
      {
        title: 'Step 3: Deposit Payment',
        description:
          'Deposit payment via Internet Payment Gateway (Visa Card/ Master Card / Union Pay)',
      },
      {
        title: 'Step 4: Download Confirmation Form',
        description:
          'On successful transaction, download and keep "Application Form [PDF FILE]" in your record only (DO NOT SEND FORM TO ANY BANK OR DHA BAHAWALPUR)',
      },
      {
        title: 'Step 5: Track Application Status',
        description:
          'Check status of your online application on DHAB website after 05 working days. For query contact us at: +92 62 111 111 518 or email: ballot2021@dhabahawalpur.com',
      },
    ],
  };

  const currentCards = instructions[activeTab];

  // Handle navigation with circular logic
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? currentCards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === currentCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#E6E7EB] p-6 sm:p-10 font-sans antialiased">
      <div className="container mx-auto py-12">
        <h1 className="mb-12 text-center text-5xl font-extrabold text-[#333333] leading-tight tracking-tight sm:text-6xl">
          How to Apply
        </h1>
        {/* Tab Navigation */}
        <div className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          <TabButton
            label="Manual Form"
            isActive={activeTab === 'manual'}
            onClick={() => { setActiveTab('manual'); setActiveIndex(0); }}
          />
          <TabButton
            label="Bank Challan"
            isActive={activeTab === 'BankChallan'}
            onClick={() => { setActiveTab('BankChallan'); setActiveIndex(0); }}
          />
          <TabButton
            label="Credit Card"
            isActive={activeTab === 'creditCard'}
            onClick={() => { setActiveTab('creditCard'); setActiveIndex(0); }}
          />
        </div>
        {/* Instructions Header */}
        <h2 className="rounded-t-xl bg-white px-6 py-5 text-center text-2xl font-semibold text-[#333333] shadow-lg sm:px-10 sm:text-3xl border-b border-[#E6E7EB]">
          {activeTab === 'manual' && 'Manual Form Application Guide'}
          {activeTab === 'BankChallan' && 'Bank Challan Application Steps'}
          {activeTab === 'creditCard' && 'Credit Card Application Process'}
        </h2>
        {/* Card Display Area (Carousel) */}
        <div className="relative flex h-[450px] items-center justify-center overflow-hidden rounded-b-xl bg-white shadow-2xl p-6 sm:h-[500px]">
          {currentCards.map((card, index) => {
            const offset = index - activeIndex; // -1 for left, 0 for center, 1 for right
            let translateX = 0;
            let opacity = 0;
            let scale = 0.85; 
            let zIndex = 10;
            let pointerEvents = 'none';
            if (offset === 0) {
              // Center card
              translateX = 0;
              opacity = 1;
              scale = 1;
              zIndex = 30;
              pointerEvents = 'auto';
            } else if (offset === -1 || (activeIndex === 0 && index === currentCards.length - 1)) {
              // Left card (previous)
              translateX = -350;
              opacity = 0.6;
              zIndex = 20;
            } else if (offset === 1 || (activeIndex === currentCards.length - 1 && index === 0)) {
              // Right card (next)
              translateX = 350;
              opacity = 0.6;
              zIndex = 20;
            } else {
              // Hidden cards (further out)
              translateX = offset > 0 ? 700 : -700;
              opacity = 0;
            }
            return (
              <div
                key={index}
                className={`absolute w-full max-w-xs sm:max-w-md lg:max-w-lg transform rounded-3xl border border-[#E6E7EB] bg-white p-8 text-center transition-all duration-700 ease-in-out ${
                  pointerEvents === 'none' ? 'pointer-events-none' : ''
                }`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  boxShadow: index === activeIndex ? '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 8px rgba(230, 231, 235, 0.2)' : '0 10px 20px rgba(0, 0, 0, 0.08)',
                }}
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="mb-4 text-3xl font-extrabold text-[#333333] sm:text-4xl leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#333333] sm:text-lg">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-center gap-6 px-6 sm:px-10">
          <NavButton direction="prev" onClick={handlePrev} />
          <NavButton direction="next" onClick={handleNext} />
        </div>
        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {currentCards.map((_, index) => (
            <PaginationDot
              key={index}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Helper Components for Cleanliness and Reusability ---
const TabButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#E6E7EB] sm:text-base ${
      isActive
        ? 'bg-[#333333] text-white shadow-lg transform scale-105'
        : 'bg-[#E6E7EB] text-[#333333] hover:bg-[#D1D2D7] hover:text-[#333333]'
    }`}
  >
    {label}
  </button>
);

const NavButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="relative flex items-center justify-center rounded-full bg-[#333333] w-16 h-16 text-white shadow-xl transition-all duration-300 hover:bg-[#4A4A4A] focus:outline-none focus:ring-4 focus:ring-[#E6E7EB] group overflow-hidden"
    aria-label={direction === 'prev' ? 'Previous step' : 'Next step'}
  >
    <svg
      className={`w-8 h-8 transform transition-transform duration-300 group-hover:scale-110 ${
        direction === 'prev' ? 'rotate-180' : ''
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
    <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-active:opacity-20 group-active:scale-150 rounded-full"></span>
  </button>
);

const PaginationDot = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`h-3 w-3 rounded-full transition-all duration-300 ${
      isActive ? 'w-6 bg-[#333333]' : 'bg-[#E6E7EB] hover:bg-[#D1D2D7]'
    }`}
    aria-label="Go to step"
  />
);

export default Cards;