// import React, { useState } from 'react';

// const Cards = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState('manual'); // Default tab

//   // Instruction sets for different types
//   const instructions = {
//     manual: [
//       {
//         title: 'Step 1: Download Application',
//         description:
//           ' Download Application Form and print OR Collect application form at nearest bank',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 2: Fill Out the Form',
//         description:
//           'Fill the form, deposit amount on CraditCarddeposit slip and application form in nearest CraditCardand collect / receive "Customer Copy" of payment slip / Form',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 3:contact us',
//         description:
//           ' For query contact us at: +92 62 111 111 518 or email: ballot2021@dhabahawalpur.com',
//         bgColor: 'bg-white',
//       },
//     ],
//     BankChallan: [
//       {
//         title: 'Step 1: Visit Website',
//         description:
//           'Navigate to the official ballot application portal and create an account using your email address.',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 2: Enter fields',
//         description:
//           ' Enter all required fields and select payment option "Pay Via Bank Challan',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 3: Select "Bank"',
//         description:
//           ' Select "Bank" where you want to deposit application form and amount',
//         bgColor: 'bg-white',
//       },

//       {
//         title: 'Step 4: "Print"  Application Form',
//         description: ' Download and "Print" Application Form',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 5: Visit  branch of selected bank ',
//         description:
//           '  Visit nearest branch of selected bank with printed application form',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 6: Deposit amount and application ',
//         description:
//           'Deposit amount and application form in nearest bank and collect / receive "Customer Copy" of payment slip / Form',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 7: Send application to DHA ',
//         description:
//           ' Bank will send application form / deposited challan copy to DHA Bahawalpur',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 8: Check status of your online application ',
//         description:
//           'Check status of your online application on DHAB website after 05 working days. For query contact us at: +92 62 111 111 518 or email: ballot2021@dhabahawalpur.com',
//         bgColor: 'bg-white',
//       },
//     ],
//     bank: [
//       {
//         title: 'Step 1: Visit "New Application"',
//         description:
//           'Visit "New Application" link and fill the application form',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 2: Enter all  fields',
//         description:
//           'Enter all required fields and select payment option "Pay Via Credit Card"',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 3: Deposit payment ',
//         description:
//           ' Deposit payment via Internet Payment Gateway (Visa Card/ Master Card / Union Pay)',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 3: Deposit payment ',
//         description:
//           ' On successfull transaction, download and keep "Application Form [PDF FILE]" in your record only (DO NOT SEND FORM TO ANY BANK OR DHA BAHAWALPUR)',
//         bgColor: 'bg-white',
//       },
//       {
//         title: 'Step 3: Deposit payment ',
//         description:
//           ' Deposit payment via Internet Payment Gateway (Visa Card/ Master Card / Union Pay)',
//         bgColor: 'bg-white',
//       },
//     ],
//   };

//   const cards = instructions[activeTab];

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? cards.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === cards.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="max-h-full bg-gray-50 p-6 sm:p-10">
//       <div className="py-12">
//         <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
//           How to Apply
//         </h1>
//         {/* Tab Navigation */}
//         <div className="mb-6 flex justify-center gap-4">
//           <button
//             onClick={() => {
//               setActiveTab('manual');
//               setActiveIndex(0);
//             }}
//             className={`rounded-md px-4 py-2 font-semibold transition-colors duration-200 ${
//               activeTab === 'manual'
//                 ? 'bg-indigo-600 text-white'
//                 : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//             }`}
//           >
//             Manual Form
//           </button>
//           <button
//             onClick={() => {
//               setActiveTab('BankChallan');
//               setActiveIndex(0);
//             }}
//             className={`rounded-md px-4 py-2 font-semibold transition-colors duration-200 ${
//               activeTab === 'BankChallan'
//                 ? 'bg-indigo-600 text-white'
//                 : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//             }`}
//           >
//             Bank Challan
//           </button>
//           <button
//             onClick={() => {
//               setActiveTab('bank');
//               setActiveIndex(0);
//             }}
//             className={`rounded-md px-4 py-2 font-semibold transition-colors duration-200 ${
//               activeTab === 'bank'
//                 ? 'bg-indigo-600 text-white'
//                 : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
//             }`}
//           >
//             Credit Card
//           </button>
//         </div>
//         <h2 className="rounded-t-lg bg-gray-200 px-6 py-4 text-start text-2xl font-semibold text-gray-800 sm:px-10">
//           {activeTab === 'manual' && 'Manual Form Instructions'}
//           {activeTab === 'BankChallan' &&
//             'BankChallan Application Instructions'}
//           {activeTab === 'bank' && 'CraditCard Submission Instructions'}
//         </h2>
//         <div className="relative flex h-96 items-center justify-center overflow-hidden rounded-b-lg bg-white shadow-xl">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`absolute w-11/12 transform rounded-lg transition-all duration-500 ease-in-out sm:w-96 ${
//                 index === activeIndex
//                   ? 'z-30 scale-100 opacity-100 shadow-lg'
//                   : 'z-10 scale-95 opacity-60'
//               } ${card.bgColor}`}
//               style={{
//                 transform: `translateX(${(index - activeIndex) * 320}px) ${
//                   index === activeIndex ? 'translateY(0)' : 'translateY(10px)'
//                 }`,
//               }}
//             >
//               <div className="flex h-full flex-col items-center justify-center p-6 text-center">
//                 <h2 className="mb-4 border-b-2 border-indigo-200 pb-2 text-2xl font-bold text-indigo-700">
//                   {card.title}
//                 </h2>
//                 <p className="text-base leading-relaxed text-gray-700">
//                   {card.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-6 flex justify-center gap-4 px-6 sm:px-10">
//           <button
//             onClick={handlePrev}
//             className="rounded-md bg-indigo-600 px-6 py-2 text-white shadow-md transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             className="rounded-md bg-indigo-600 px-6 py-2 text-white shadow-md transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Next
//           </button>
//         </div>
//         <div className="mt-4 flex justify-center gap-2">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`h-2 w-2 rounded-full transition-all duration-300 ${
//                 index === activeIndex ? 'w-4 bg-indigo-600' : 'bg-gray-300'
//               }`}
//               aria-label={`Go to step ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;


import React, { useState } from 'react';
const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('manual'); // Default tab
  // Instruction sets for different types
  const instructions = {
    manual: [
      {
        title: 'Step 1: Download Application',
        description:
          'Download Application Form and print OR Collect application form at nearest bank.',
      },
      {
        title: 'Step 2: Fill Out the Form',
        description:
          'Fill the form, deposit amount on Credit Card deposit slip and application form in nearest Credit Card and collect / receive "Customer Copy" of payment slip / Form.',
      },
      {
        title: 'Step 3: Contact Us',
        description:
          'For query, contact us at: +92 62 111 111 518 or email: ballot2021@dhabahawalpur.com',
      },
    ],
    BankChallan: [
      {
        title: 'Step 1: Visit Website',
        description:
          'Navigate to the official ballot application portal and create an account using your email address.',
      },
      {
        title: 'Step 2: Enter Fields',
        description:
          'Enter all required fields and select payment option "Pay Via Bank Challan".',
      },
      {
        title: 'Step 3: Select Bank',
        description:
          'Select the bank where you want to deposit the application form and amount.',
      },
      {
        title: 'Step 4: Print Application Form',
        description: 'Download and "Print" the Application Form.',
      },
      {
        title: 'Step 5: Visit Branch',
        description:
          'Visit the nearest branch of the selected bank with the printed application form.',
      },
      {
        title: 'Step 6: Deposit Amount',
        description:
          'Deposit the amount and application form in the nearest bank and collect / receive "Customer Copy" of payment slip / Form.',
      },
      {
        title: 'Step 7: Bank Sends Application',
        description:
          'The bank will send the application form / deposited challan copy to DHA Bahawalpur.',
      },
      {
        title: 'Step 8: Check Status',
        description:
          'Check the status of your online application on the DHAB website after 05 working days. For query, contact us at: +92 62 111 111 518 or email: ballot2021@dhabahawalpur.com',
      },
    ],
    bank: [ // Renamed from 'bank' to 'creditCard' for clarity in usage, but keeping 'bank' for consistency with your provided code for now.
      {
        title: 'Step 1: Visit "New Application"',
        description:
          'Visit the "New Application" link and fill the application form.',
      },
      {
        title: 'Step 2: Enter All Fields',
        description:
          'Enter all required fields and select payment option "Pay Via Credit Card".',
      },
      {
        title: 'Step 3: Deposit Payment',
        description:
          'Deposit payment via Internet Payment Gateway (Visa Card/ Master Card / Union Pay).',
      },
      {
        title: 'Step 4: Download Application Form',
        description:
          'On successful transaction, download and keep "Application Form [PDF FILE]" for your record only (DO NOT SEND FORM TO ANY BANK OR DHA BAHAWALPUR).',
      },
    ],
  };
  const currentCards = instructions[activeTab];
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
    <div className="max-h-full bg-gray-50 p-6 sm:p-10 font-sans">
      <div className="py-12">
        <h1 className="mb-8 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
          How to Apply
        </h1>
        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <button
            onClick={() => {
              setActiveTab('manual');
              setActiveIndex(0);
            }}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ease-in-out sm:text-base ${
              activeTab === 'manual'
                ? 'bg-indigo-700 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
            }`}
          >
            Manual Form
          </button>
          <button
            onClick={() => {
              setActiveTab('BankChallan');
              setActiveIndex(0);
            }}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ease-in-out sm:text-base ${
              activeTab === 'BankChallan'
                ? 'bg-indigo-700 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
            }`}
          >
            Bank Challan
          </button>
          <button
            onClick={() => {
              setActiveTab('bank'); // Keeping 'bank' as per your original object key
              setActiveIndex(0);
            }}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ease-in-out sm:text-base ${
              activeTab === 'bank'
                ? 'bg-indigo-700 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
            }`}
          >
            Credit Card
          </button>
        </div>
        {/* Instructions Header */}
        <h2 className="rounded-t-lg bg-gray-100 px-6 py-4 text-center text-xl font-semibold text-gray-800 shadow-sm sm:px-10 sm:text-2xl">
          {activeTab === 'manual' && 'Manual Form Instructions'}
          {activeTab === 'BankChallan' && 'Bank Challan Application Instructions'}
          {activeTab === 'bank' && 'Credit Card Submission Instructions'}
        </h2>
        {/* Card Display Area */}
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-b-lg bg-white p-6 shadow-xl sm:min-h-[350px]">
          {currentCards.map((card, index) => (
            <div
              key={index}
              className={`absolute w-full max-w-sm transform rounded-xl border border-gray-200 bg-white p-8 text-center transition-all duration-500 ease-in-out sm:max-w-md ${
                index === activeIndex
                  ? 'z-30 scale-100 opacity-100 shadow-2xl'
                  : 'z-10 scale-90 opacity-0 pointer-events-none' // Hide non-active cards fully and prevent interaction
              }`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translateX(${(index - activeIndex) * 100}%)`, // Adjusted for a smoother slide
              }}
            >
              <div className="flex h-full flex-col items-center justify-center">
                <h3 className="mb-4 text-2xl font-bold text-indigo-800 sm:text-3xl">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center gap-4 px-6 sm:px-10">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={activeIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={activeIndex === currentCards.length - 1}
          >
            Next
          </button>
        </div>
        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {currentCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-5 bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cards;