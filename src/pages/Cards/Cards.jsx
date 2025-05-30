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
//           'Download Application Form and print OR Collect application form at nearest bank.',
//       },
//       {
//         title: 'Step 2: Fill Out the Form',
//         description:
//           'Fill the form, deposit amount on Credit Card deposit slip and application form in nearest Credit Card and collect / receive "Customer Copy" of payment slip / Form.',
//       },
//       {
//         title: 'Step 3: Contact Us',
//         description:
//           'For query, contact us at: +92 62 111 111 518 or email: ballot2021@dhabahawalpur.com',
//       },
//     ],
//     BankChallan: [
//       {
//         title: 'Step 1: Visit Website',
//         description:
//           'Navigate to the official ballot application portal and create an account using your email address.',
//       },
//       {
//         title: 'Step 2: Enter Fields',
//         description:
//           'Enter all required fields and select payment option "Pay Via Bank Challan".',
//       },
//       {
//         title: 'Step 3: Select Bank',
//         description:
//           'Select the bank where you want to deposit the application form and amount.',
//       },
//       {
//         title: 'Step 4: Print Application Form',
//         description: 'Download and "Print" the Application Form.',
//       },
//       {
//         title: 'Step 5: Visit Branch',
//         description:
//           'Visit the nearest branch of the selected bank with the printed application form.',
//       },
//       {
//         title: 'Step 6: Deposit Amount',
//         description:
//           'Deposit the amount and application form in the nearest bank and collect / receive "Customer Copy" of payment slip / Form.',
//       },
//       {
//         title: 'Step 7: Bank Sends Application',
//         description:
//           'The bank will send the application form / deposited challan copy to DHA Bahawalpur.',
//       },
//       {
//         title: 'Step 8: Check Status',
//         description:
//           'Check the status of your online application on the DHAB website after 05 working days. For query, contact us at: +92 62 111 111 518 or email: ballot2021@dhabahawalpur.com',
//       },
//     ],
//     bank: [ // Renamed from 'bank' to 'creditCard' for clarity in usage, but keeping 'bank' for consistency with your provided code for now.
//       {
//         title: 'Step 1: Visit "New Application"',
//         description:
//           'Visit the "New Application" link and fill the application form.',
//       },
//       {
//         title: 'Step 2: Enter All Fields',
//         description:
//           'Enter all required fields and select payment option "Pay Via Credit Card".',
//       },
//       {
//         title: 'Step 3: Deposit Payment',
//         description:
//           'Deposit payment via Internet Payment Gateway (Visa Card/ Master Card / Union Pay).',
//       },
//       {
//         title: 'Step 4: Download Application Form',
//         description:
//           'On successful transaction, download and keep "Application Form [PDF FILE]" for your record only (DO NOT SEND FORM TO ANY BANK OR DHA BAHAWALPUR).',
//       },
//     ],
//   };
//   const currentCards = instructions[activeTab];
//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? currentCards.length - 1 : prevIndex - 1
//     );
//   };
//   const handleNext = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === currentCards.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   return (
//     <div className="max-h-full bg-gray-50 p-6 sm:p-10 font-sans">
//       <div className="py-12">
//         <h1 className="mb-8 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
//           How to Apply
//         </h1>
//         {/* Tab Navigation */}
//         <div className="mb-8 flex flex-wrap justify-center gap-3 sm:gap-4">
//           <button
//             onClick={() => {
//               setActiveTab('manual');
//               setActiveIndex(0);
//             }}
//             className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ease-in-out sm:text-base ${
//               activeTab === 'manual'
//                 ? 'bg-indigo-700 text-white shadow-md'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
//             }`}
//           >
//             Manual Form
//           </button>
//           <button
//             onClick={() => {
//               setActiveTab('BankChallan');
//               setActiveIndex(0);
//             }}
//             className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ease-in-out sm:text-base ${
//               activeTab === 'BankChallan'
//                 ? 'bg-indigo-700 text-white shadow-md'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
//             }`}
//           >
//             Bank Challan
//           </button>
//           <button
//             onClick={() => {
//               setActiveTab('bank'); // Keeping 'bank' as per your original object key
//               setActiveIndex(0);
//             }}
//             className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ease-in-out sm:text-base ${
//               activeTab === 'bank'
//                 ? 'bg-indigo-700 text-white shadow-md'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
//             }`}
//           >
//             Credit Card
//           </button>
//         </div>
//         {/* Instructions Header */}
//         <h2 className="rounded-t-lg bg-gray-100 px-6 py-4 text-center text-xl font-semibold text-gray-800 shadow-sm sm:px-10 sm:text-2xl">
//           {activeTab === 'manual' && 'Manual Form Instructions'}
//           {activeTab === 'BankChallan' && 'Bank Challan Application Instructions'}
//           {activeTab === 'bank' && 'Credit Card Submission Instructions'}
//         </h2>
//         {/* Card Display Area */}
//         <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-b-lg bg-white p-6 shadow-xl sm:min-h-[350px]">
//           {currentCards.map((card, index) => (
//             <div
//               key={index}
//               className={`absolute w-full max-w-sm transform rounded-xl border border-gray-200 bg-white p-8 text-center transition-all duration-500 ease-in-out sm:max-w-md ${
//                 index === activeIndex
//                   ? 'z-30 scale-100 opacity-100 shadow-2xl'
//                   : 'z-10 scale-90 opacity-0 pointer-events-none' // Hide non-active cards fully and prevent interaction
//               }`}
//               style={{
//                 left: '50%',
//                 top: '50%',
//                 transform: `translate(-50%, -50%) translateX(${(index - activeIndex) * 100}%)`, // Adjusted for a smoother slide
//               }}
//             >
//               <div className="flex h-full flex-col items-center justify-center">
//                 <h3 className="mb-4 text-2xl font-bold text-indigo-800 sm:text-3xl">
//                   {card.title}
//                 </h3>
//                 <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
//                   {card.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Navigation Buttons */}
//         <div className="mt-8 flex justify-center gap-4 px-6 sm:px-10">
//           <button
//             onClick={handlePrev}
//             className="flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={activeIndex === 0}
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             className="flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={activeIndex === currentCards.length - 1}
//           >
//             Next
//           </button>
//         </div>
//         {/* Pagination Dots */}
//         <div className="mt-6 flex justify-center gap-2">
//           {currentCards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
//                 index === activeIndex ? 'w-5 bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
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




// import React, { useState } from 'react';
// const Cards = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState('manual'); // Default tab
//   const instructions = {
//     manual: [
//       {
//         title: 'Step 1: Download Application',
//         description:
//           'Download Application Form and print OR Collect application form at nearest bank.',
//       },
//       {
//         title: 'Step 2: Fill Out the Form',
//         description:
//           'Fill the form, deposit amount on Credit Card deposit slip and application form in nearest Credit Card and collect / receive "Customer Copy" of payment slip / Form.',
//       },
//       {
//         title: 'Step 3: Contact Us',
//         description:
//           'For query, contact us at: +92 62 111 111 518 or email: ballot2021@dhabahawalpur.com',
//       },
//     ],
//     BankChallan: [
//       {
//         title: 'Step 1: Visit Website',
//         description:
//           'Navigate to the official ballot application portal and create an account using your email address.',
//       },
//       {
//         title: 'Step 2: Enter Fields',
//         description:
//           'Enter all required fields and select payment option "Pay Via Bank Challan".',
//       },
//       {
//         title: 'Step 3: Select Bank',
//         description:
//           'Select the bank where you want to deposit the application form and amount.',
//       },
//       {
//         title: 'Step 4: Print Application Form',
//         description: 'Download and "Print" the Application Form.',
//       },
//       {
//         title: 'Step 5: Visit Branch',
//         description:
//           'Visit the nearest branch of the selected bank with the printed application form.',
//       },
//       {
//         title: 'Step 6: Deposit Amount',
//         description:
//           'Deposit the amount and application form in the nearest bank and collect / receive "Customer Copy" of payment slip / Form.',
//       },
//       {
//         title: 'Step 7: Bank Sends Application',
//         description:
//           'The bank will send the application form / deposited challan copy to DHA Bahawalpur.',
//       },
//       {
//         title: 'Step 8: Check Status',
//         description:
//           'Check the status of your online application on the DHAB website after 05 working days. For query, contact us at: +92 62 111 111 518 or email: ballot2021@dhabahawalpur.com',
//       },
//     ],
//     bank: [
//       {
//         title: 'Step 1: Visit "New Application"',
//         description:
//           'Visit the "New Application" link and fill the application form.',
//       },
//       {
//         title: 'Step 2: Enter All Fields',
//         description:
//           'Enter all required fields and select payment option "Pay Via Credit Card".',
//       },
//       {
//         title: 'Step 3: Deposit Payment',
//         description:
//           'Deposit payment via Internet Payment Gateway (Visa Card/ Master Card / Union Pay).',
//       },
//       {
//         title: 'Step 4: Download Application Form',
//         description:
//           'On successful transaction, download and keep "Application Form [PDF FILE]" for your record only (DO NOT SEND FORM TO ANY BANK OR DHA BAHAWALPUR).',
//       },
//     ],
//   };
//   const currentCards = instructions[activeTab];
//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? currentCards.length - 1 : prevIndex - 1
//     );
//   };
//   const handleNext = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === currentCards.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   return (
//     <div className="max-h-full bg-gray-50 p-6 sm:p-10 font-sans">
//       <div className="py-12">
//         <h1 className="mb-8 text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
//           How to Apply
//         </h1>
//         {/* Tab Navigation */}
//         <div className="mb-8 flex flex-wrap justify-center gap-3 sm:gap-4">
//           <button
//             onClick={() => {
//               setActiveTab('manual');
//               setActiveIndex(0);
//             }}
//             className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ease-in-out sm:text-base ${
//               activeTab === 'manual'
//                 ? 'bg-indigo-700 text-white shadow-md'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
//             }`}
//           >
//             Manual Form
//           </button>
//           <button
//             onClick={() => {
//               setActiveTab('BankChallan');
//               setActiveIndex(0);
//             }}
//             className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ease-in-out sm:text-base ${
//               activeTab === 'BankChallan'
//                 ? 'bg-indigo-700 text-white shadow-md'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
//             }`}
//           >
//             Bank Challan
//           </button>
//           <button
//             onClick={() => {
//               setActiveTab('bank');
//               setActiveIndex(0);
//             }}
//             className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ease-in-out sm:text-base ${
//               activeTab === 'bank'
//                 ? 'bg-indigo-700 text-white shadow-md'
//                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
//             }`}
//           >
//             Credit Card
//           </button>
//         </div>
//         {/* Instructions Header */}
//         <h2 className="rounded-t-lg bg-gray-100 px-6 py-4 text-center text-xl font-semibold text-gray-800 shadow-sm sm:px-10 sm:text-2xl">
//           {activeTab === 'manual' && 'Manual Form Instructions'}
//           {activeTab === 'BankChallan' && 'Bank Challan Application Instructions'}
//           {activeTab === 'bank' && 'Credit Card Submission Instructions'}
//         </h2>
//         {/* Card Display Area */}
//         <div className="relative flex h-[400px] items-center justify-center overflow-hidden rounded-b-lg bg-white p-6 shadow-xl sm:h-[450px]">
//           {currentCards.map((card, index) => {
//             let positionClasses = '';
//             let transformStyle = {};
//             if (index === activeIndex) {
//               // Center card
//               positionClasses = 'z-30 scale-100 opacity-100 shadow-2xl';
//               transformStyle = { transform: 'translateX(0px)' };
//             } else if (index === activeIndex - 1 || (activeIndex === 0 && index === currentCards.length - 1)) {
//               // Left card (previous)
//               positionClasses = 'z-20 scale-90 opacity-70';
//               transformStyle = { transform: 'translateX(-100%)' }; // Move left
//             } else if (index === activeIndex + 1 || (activeIndex === currentCards.length - 1 && index === 0)) {
//               // Right card (next)
//               positionClasses = 'z-20 scale-90 opacity-70';
//               transformStyle = { transform: 'translateX(100%)' }; // Move right
//             } else {
//               // Hidden cards
//               positionClasses = 'z-10 opacity-0 pointer-events-none';
//               transformStyle = { transform: 'translateX(0px)' }; // Default position for hidden
//             }
//             return (
//               <div
//                 key={index}
//                 className={`absolute w-full max-w-xs md:max-w-md lg:max-w-lg transform rounded-xl border border-gray-200 bg-white p-6 text-center transition-all duration-500 ease-in-out ${positionClasses}`}
//                 style={{
//                   left: '50%', // Center horizontally
//                   top: '50%', // Center vertically
//                   ...transformStyle,
//                   transform: `translate(-50%, -50%) ${transformStyle.transform}`, // Adjust for actual centering after translateX
//                 }}
//               >
//                 <div className="flex h-full flex-col items-center justify-center">
//                   <h3 className="mb-4 text-2xl font-bold text-indigo-800 sm:text-3xl">
//                     {card.title}
//                   </h3>
//                   <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
//                     {card.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {/* Navigation Buttons */}
//         <div className="mt-8 flex justify-center gap-4 px-6 sm:px-10">
//           <button
//             onClick={handlePrev}
//             className="flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleNext}
//             className="flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
//           >
//             Next
//           </button>
//         </div>
//         {/* Pagination Dots */}
//         <div className="mt-6 flex justify-center gap-2">
//           {currentCards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
//                 index === activeIndex ? 'w-5 bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
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
    creditCard: [ // Renamed from 'bank' to 'creditCard' for clarity and consistency
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
        title: 'Step 3: Secure Online Payment',
        description:
          'Complete your payment securely through our Internet Payment Gateway, accepting Visa Card, Master Card, and Union Pay.',
      },
      {
        title: 'Step 4: Download Confirmation Form',
        description:
          'Upon successful transaction, immediately download and securely save your "Application Form [PDF FILE]". This is for your records ONLY. Do NOT send this form to any bank or DHA Bahawalpur.',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 p-6 sm:p-10 font-sans antialiased">
      <div className="container mx-auto py-12">
        <h1 className="mb-12 text-center text-5xl font-extrabold text-gray-900 leading-tight tracking-tight sm:text-6xl">
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
            isActive={activeTab === 'creditCard'} // Use 'creditCard' for the key
            onClick={() => { setActiveTab('creditCard'); setActiveIndex(0); }}
          />
        </div>
        {/* Instructions Header */}
        <h2 className="rounded-t-xl bg-white bg-opacity-90 px-6 py-5 text-center text-2xl font-semibold text-indigo-800 shadow-lg sm:px-10 sm:text-3xl border-b border-indigo-100">
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
            let scale = 0.85; // Smaller scale for side cards
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
              translateX = -350; // Adjust this value for desired spacing
              opacity = 0.6;
              zIndex = 20;
            } else if (offset === 1 || (activeIndex === currentCards.length - 1 && index === 0)) {
              // Right card (next)
              translateX = 350; // Adjust this value for desired spacing
              opacity = 0.6;
              zIndex = 20;
            } else {
              // Hidden cards (further out)
              translateX = offset > 0 ? 700 : -700; // Push far out
              opacity = 0;
            }
            return (
              <div
                key={index}
                className={`absolute w-full max-w-xs sm:max-w-md lg:max-w-lg transform rounded-3xl border border-indigo-100 bg-white p-8 text-center transition-all duration-700 ease-in-out ${
                  pointerEvents === 'none' ? 'pointer-events-none' : ''
                }`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  boxShadow: index === activeIndex ? '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 8px rgba(99, 102, 241, 0.2)' : '0 10px 20px rgba(0, 0, 0, 0.08)',
                }}
              >
                <div className="flex h-full flex-col items-center justify-center">
                  <h3 className="mb-4 text-3xl font-extrabold text-indigo-900 sm:text-4xl leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
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
    className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 sm:text-base ${
      isActive
        ? 'bg-indigo-700 text-white shadow-lg transform scale-105'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900'
    }`}
  >
    {label}
  </button>
);
const NavButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="relative flex items-center justify-center rounded-full bg-indigo-600 w-16 h-16 text-white shadow-xl transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 group overflow-hidden"
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
    {/* Ripple effect on click - can be added with JS or more complex CSS */}
    <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-active:opacity-20 group-active:scale-150 rounded-full"></span>
  </button>
);
const PaginationDot = ({ isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`h-3 w-3 rounded-full transition-all duration-300 ${
      isActive ? 'w-6 bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
    }`}
    aria-label="Go to step"
  />
);
export default Cards;





