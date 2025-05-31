// import {
//   CreditCard,
//   LayoutGrid,
//   Eye,
//   FileText,
//   Clock,
//   DollarSign,
//   Banknote,
//   Upload,
// } from 'lucide-react';

// export default function BillsPayment() {
//   return (
//     <>
//       <div className="ms-10 mt-4 flex items-center gap-1 text-gray-700">
//         /
//         <CreditCard size={18} className="text-gray-500" />
//         <h1 className="text-lg font-medium text-gray-500">Bills & Payment</h1>
//       </div>
//       <div className="mx-auto max-w-6xl bg-white p-6">
//         <div className="rounded-md border border-gray-200 px-16 py-8">
//           {/* Main Cards */}
//           <div className="mb-8 grid grid-cols-1 gap-10 md:grid-cols-2">
//             {/* Apply for Ballot Card */}

//             <div className="custom-glow-border group   w-full  cursor-pointer overflow-hidden rounded-lg p-1">
//               <div className="custom-rotate-border group relative  overflow-hidden  rounded-lg  bg-gray-100 p-8 text-center">
//                 {' '}
//                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg  border-gray-300">
//                   <button>
//                     <svg
//                       width="38"
//                       height="38"
//                       viewBox="0 0 38 38"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M21.1111 9.5H31.6667V13.7222H21.1111V9.5ZM21.1111 24.2778H31.6667V28.5H21.1111V24.2778ZM33.7778 0C34.8976 0 35.9715 0.44484 36.7633 1.23666C37.5552 2.02848 38 3.10242 38 4.22222V33.7778C38 34.8976 37.5552 35.9715 36.7633 36.7633C35.9715 37.5552 34.8976 38 33.7778 38H4.22222C3.10242 38 2.02848 37.5552 1.23666 36.7633C0.44484 35.9715 0 34.8976 0 33.7778V4.22222C0 3.10242 0.44484 2.02848 1.23666 1.23666C2.02848 0.44484 3.10242 0 4.22222 0H33.7778ZM33.7778 33.7778V4.22222H4.22222V33.7778H33.7778ZM16.8889 6.33333V16.8889H6.33333V6.33333H16.8889ZM14.7778 14.7778V8.44444H8.44444V14.7778H14.7778ZM16.8889 21.1111V31.6667H6.33333V21.1111H16.8889ZM14.7778 29.5556V23.2222H8.44444V29.5556H14.7778Z"
//                         fill="black"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <h2 className="mb-3 text-xl font-semibold text-gray-900">
//                   Apply for Ballot
//                 </h2>
//                 <p className="text-sm leading-relaxed text-gray-600">
//                   Fill your application for property Ballot
//                   <br />
//                   with our digital process
//                 </p>
//               </div>
//             </div>

//             {/* View Application Card */}
//             <div className="custom-glow-border group w-full cursor-pointer overflow-hidden rounded-lg p-1 hover:[border-width:1px]">
//               <div className="custom-rotate-border group relative  overflow-hidden  rounded-lg  bg-gray-100 p-8 text-center">
//                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
//                   <button>
//                     <svg
//                       width="39"
//                       height="39"
//                       viewBox="0 0 39 39"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       {/* SVG paths */}
//                       <path
//                         d="M27.857 33.4286C29.3955 33.4286 30.6427 32.1814 30.6427 30.6429C30.6427 29.1044 29.3955 27.8571 27.857 27.8571C26.3185 27.8571 25.0713 29.1044 25.0713 30.6429C25.0713 32.1814 26.3185 33.4286 27.857 33.4286Z"
//                         fill="black"
//                       />
//                       <path
//                         d="M38.689 29.9172C37.8284 27.7247 36.3433 25.8329 34.4178 24.4764C32.4922 23.1198 30.211 22.3581 27.8567 22.2857C25.5025 22.3581 23.2212 23.1198 21.2957 24.4764C19.3702 25.8329 17.8851 27.7247 17.0245 29.9172L16.7139 30.6429L17.0245 31.3699C17.8853 33.5622 19.3705 35.4537 21.296 36.81C23.2215 38.1662 25.5026 38.9277 27.8567 39C30.2108 38.9277 32.492 38.1662 34.4175 36.81C36.343 35.4537 37.8281 33.5622 38.689 31.3699L38.9996 30.6429L38.689 29.9172ZM27.8567 36.2143C26.7548 36.2143 25.6776 35.8875 24.7614 35.2753C23.8452 34.6631 23.1311 33.793 22.7094 32.775C22.2877 31.7569 22.1774 30.6367 22.3923 29.5559C22.6073 28.4752 23.138 27.4824 23.9171 26.7033C24.6963 25.9241 25.689 25.3935 26.7698 25.1785C27.8505 24.9635 28.9708 25.0738 29.9888 25.4955C31.0069 25.9172 31.877 26.6313 32.4892 27.5475C33.1014 28.4638 33.4282 29.5409 33.4282 30.6429C33.4263 32.1199 32.8387 33.536 31.7943 34.5804C30.7498 35.6249 29.3338 36.2125 27.8567 36.2143ZM6.96387 20.8929H13.9282V23.6786H6.96387V20.8929ZM6.96387 13.9286H23.6782V16.7143H6.96387V13.9286ZM6.96387 6.96429H23.6782V9.75001H6.96387V6.96429Z"
//                         fill="black"
//                       />
//                       <path
//                         d="M27.8571 0H2.78571C2.04757 0.00220451 1.3403 0.296407 0.818352 0.818352C0.296407 1.3403 0.00220451 2.04757 0 2.78571V36.2143C0.00220451 36.9524 0.296407 37.6597 0.818352 38.1817C1.3403 38.7036 2.04757 38.9978 2.78571 39H13.9286V36.2143H2.78571V2.78571H27.8571V18.1071H30.6429V2.78571C30.6407 2.04757 30.3465 1.3403 29.8245 0.818352C29.3026 0.296407 28.5953 0.00220451 27.8571 0Z"
//                         fill="black"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 <h2 className="mb-3 text-xl font-semibold text-gray-900">
//                   View Application
//                 </h2>
//                 <p className="text-sm leading-relaxed text-gray-600">
//                   View your application and monitor
//                   <br />
//                   the current status
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Statistics Cards */}
//           <div className="mb-8 grid grid-cols-2 gap-10 md:grid-cols-4">
//             {/* Total Application */}
//             <div className="flex items-center justify-between gap-3 rounded-lg border bg-gray-100  p-4 px-6">
//               <div className="flex h-10 w-10 items-center justify-center rounded-md  bg-gray-200">
//                 <svg
//                   width="21"
//                   height="24"
//                   viewBox="0 0 21 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M16.2273 2.76923H21V24H0V2.76923H4.77273V4.61538H16.2273V2.76923ZM3.81818 12H17.1818V10.1538H3.81818V12ZM3.81818 19.3846H17.1818V17.5385H3.81818V19.3846ZM6.68182 2.76923V0H14.3182V2.76923H6.68182Z"
//                     fill="black"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-end text-xl font-bold text-gray-900">
//                   2
//                 </div>
//                 <div className="text-xs text-gray-500">Total application</div>
//               </div>
//             </div>

//             {/* Pending */}
//             <div className="flex items-center justify-between gap-3 rounded-lg border  bg-gray-100 p-4 px-6">
//               <div className="flex h-10 w-10 items-center justify-center rounded-md  bg-gray-200">
//                 {' '}
//                 <svg
//                   width="27"
//                   height="24"
//                   viewBox="0 0 27 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M17.6087 12H19.3696V15.384L22.2339 17.076L21.3535 18.636L17.6087 16.428V12ZM18.7826 9.6C17.2259 9.6 15.733 10.2321 14.6322 11.3574C13.5314 12.4826 12.913 14.0087 12.913 15.6C12.913 17.1913 13.5314 18.7174 14.6322 19.8426C15.733 20.9679 17.2259 21.6 18.7826 21.6C20.3393 21.6 21.8323 20.9679 22.933 19.8426C24.0338 18.7174 24.6522 17.1913 24.6522 15.6C24.6522 14.0087 24.0338 12.4826 22.933 11.3574C21.8323 10.2321 20.3393 9.6 18.7826 9.6ZM18.7826 7.2C20.962 7.2 23.0521 8.085 24.5932 9.6603C26.1342 11.2356 27 13.3722 27 15.6C27 17.8278 26.1342 19.9644 24.5932 21.5397C23.0521 23.115 20.962 24 18.7826 24C15.5074 24 12.6783 22.032 11.3517 19.2H0V15.6C0 12.408 6.25696 10.8 9.3913 10.8C10.0957 10.8 10.9643 10.884 11.88 11.04C12.6244 9.86074 13.6464 8.89126 14.8524 8.22038C16.0583 7.5495 17.4096 7.19866 18.7826 7.2ZM10.5652 15.6C10.5652 14.76 10.6826 13.944 10.9057 13.2C10.4126 13.116 9.89609 13.08 9.3913 13.08C5.90478 13.08 2.23043 14.832 2.23043 15.6V16.92H10.6709C10.6017 16.4835 10.5664 16.0422 10.5652 15.6ZM9.3913 0C10.6367 0 11.831 0.505713 12.7116 1.40589C13.5922 2.30606 14.087 3.52696 14.087 4.8C14.087 6.07304 13.5922 7.29394 12.7116 8.19411C11.831 9.09429 10.6367 9.6 9.3913 9.6C8.14594 9.6 6.95158 9.09429 6.07098 8.19411C5.19037 7.29394 4.69565 6.07304 4.69565 4.8C4.69565 3.52696 5.19037 2.30606 6.07098 1.40589C6.95158 0.505713 8.14594 0 9.3913 0ZM9.3913 2.28C8.73749 2.28 8.11045 2.5455 7.64813 3.01809C7.18581 3.49068 6.92609 4.13165 6.92609 4.8C6.92609 5.46835 7.18581 6.10932 7.64813 6.58191C8.11045 7.0545 8.73749 7.32 9.3913 7.32C10.0451 7.32 10.6722 7.0545 11.1345 6.58191C11.5968 6.10932 11.8565 5.46835 11.8565 4.8C11.8565 4.13165 11.5968 3.49068 11.1345 3.01809C10.6722 2.5455 10.0451 2.28 9.3913 2.28Z"
//                     fill="black"
//                   />
//                 </svg>
//               </div>{' '}
//               <div>
//                 <div className="text-end text-xl font-bold text-gray-900">
//                   1
//                 </div>
//                 <div className="text-xs text-gray-500">Pending</div>
//               </div>
//             </div>

//             {/* Paid */}
//             <div className="flex items-center justify-between gap-3 rounded-lg border  bg-gray-100 p-4 px-6">
//               <div className="flex h-10 w-10 items-center justify-center rounded-md  bg-gray-200">
//                 {' '}
//                 <svg
//                   width="22"
//                   height="22"
//                   viewBox="0 0 22 22"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M11 22C9.47833 22 8.04833 21.7111 6.71 21.1332C5.37167 20.5553 4.2075 19.7718 3.2175 18.7825C2.2275 17.7932 1.44393 16.6291 0.866801 15.29C0.289668 13.9509 0.000734725 12.5209 1.3924e-06 11C-0.00073194 9.47906 0.288201 8.04906 0.866801 6.71C1.4454 5.37093 2.22897 4.20677 3.2175 3.2175C4.20603 2.22823 5.3702 1.44467 6.71 0.8668C8.0498 0.288933 9.4798 0 11 0C12.5202 0 13.9502 0.288933 15.29 0.8668C16.6298 1.44467 17.794 2.22823 18.7825 3.2175C19.771 4.20677 20.555 5.37093 21.1343 6.71C21.7136 8.04906 22.0022 9.47906 22 11C21.9978 12.5209 21.7089 13.9509 21.1332 15.29C20.5575 16.6291 19.774 17.7932 18.7825 18.7825C17.791 19.7718 16.6269 20.5557 15.29 21.1343C13.9531 21.7129 12.5231 22.0015 11 22ZM11 19.8C13.4567 19.8 15.5375 18.9475 17.2425 17.2425C18.9475 15.5375 19.8 13.4567 19.8 11C19.8 8.54333 18.9475 6.4625 17.2425 4.7575C15.5375 3.0525 13.4567 2.2 11 2.2C8.54333 2.2 6.4625 3.0525 4.7575 4.7575C3.0525 6.4625 2.2 8.54333 2.2 11C2.2 13.4567 3.0525 15.5375 4.7575 17.2425C6.4625 18.9475 8.54333 19.8 11 19.8ZM10.9725 18.7C11.2292 18.7 11.4539 18.6039 11.6468 18.4118C11.8397 18.2197 11.9357 17.9949 11.935 17.7375V17.325C12.8517 17.16 13.64 16.8025 14.3 16.2525C14.96 15.7025 15.29 14.8867 15.29 13.805C15.29 13.035 15.07 12.3292 14.63 11.6875C14.19 11.0458 13.31 10.4867 11.99 10.01C10.89 9.64333 10.1292 9.3225 9.70749 9.0475C9.28583 8.7725 9.075 8.39666 9.075 7.92C9.075 7.44333 9.24476 7.0675 9.5843 6.7925C9.92383 6.5175 10.4141 6.38 11.055 6.38C11.4217 6.38 11.7425 6.44416 12.0175 6.5725C12.2925 6.70083 12.5217 6.875 12.705 7.095C12.8883 7.315 13.0948 7.46606 13.3243 7.5482C13.5538 7.63033 13.7691 7.62593 13.97 7.535C14.245 7.425 14.4331 7.2369 14.5343 6.9707C14.6355 6.7045 14.6124 6.46176 14.465 6.2425C14.1717 5.82083 13.8098 5.46333 13.3793 5.17C12.9488 4.87667 12.4857 4.71167 11.99 4.675V4.2625C11.99 4.00583 11.8939 3.78143 11.7018 3.5893C11.5097 3.39717 11.2849 3.30073 11.0275 3.3C10.7701 3.29927 10.5457 3.3957 10.3543 3.5893C10.1629 3.7829 10.0665 4.0073 10.065 4.2625V4.675C9.14833 4.87667 8.43333 5.28 7.92 5.885C7.40666 6.49 7.15 7.16833 7.15 7.92C7.15 8.78166 7.40226 9.47833 7.9068 10.01C8.41133 10.5417 9.20406 11 10.285 11.385C11.44 11.8067 12.2423 12.1825 12.6918 12.5125C13.1413 12.8425 13.3657 13.2733 13.365 13.805C13.365 14.41 13.1498 14.8548 12.7193 15.1393C12.2888 15.4238 11.7707 15.5657 11.165 15.565C10.6883 15.565 10.2575 15.4506 9.8725 15.2218C9.4875 14.993 9.16666 14.6491 8.91 14.19C8.76333 13.9333 8.57083 13.7592 8.3325 13.6675C8.09416 13.5758 7.85583 13.5758 7.6175 13.6675C7.36083 13.7592 7.17273 13.9333 7.0532 14.19C6.93366 14.4467 6.92926 14.6942 7.04 14.9325C7.33333 15.5558 7.7275 16.0648 8.2225 16.4593C8.7175 16.8538 9.31333 17.1241 10.01 17.27V17.7375C10.01 17.9942 10.1064 18.2189 10.2993 18.4118C10.4922 18.6047 10.7166 18.7007 10.9725 18.7Z"
//                     fill="black"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-end text-xl font-bold text-gray-900">
//                   1
//                 </div>
//                 <div className="text-xs text-gray-500">Paid</div>
//               </div>
//             </div>

//             {/* Total Amount */}
//             <div className="flex items-center justify-between gap-3 rounded-lg border  bg-gray-100 p-4 px-6">
//               <div className="flex h-10 w-10 items-center justify-center rounded-md  bg-gray-200">
//                 {' '}
//                 <svg
//                   width="24"
//                   height="17"
//                   viewBox="0 0 24 17"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M11 5C11 7.21 9.21 9 7 9C4.79 9 3 7.21 3 5C3 2.79 4.79 1 7 1C9.21 1 11 2.79 11 5ZM11 11.72V17H0V15C0 12.79 3.13 11 7 11C8.5 11 9.87 11.27 11 11.72ZM24 17H13V0H24V17ZM16 8.5C16 7.83696 16.2634 7.20107 16.7322 6.73223C17.2011 6.26339 17.837 6 18.5 6C19.163 6 19.7989 6.26339 20.2678 6.73223C20.7366 7.20107 21 7.83696 21 8.5C21 9.16304 20.7366 9.79893 20.2678 10.2678C19.7989 10.7366 19.163 11 18.5 11C17.837 11 17.2011 10.7366 16.7322 10.2678C16.2634 9.79893 16 9.16304 16 8.5ZM22 4C21.4696 4 20.9609 3.78929 20.5858 3.41421C20.2107 3.03914 20 2.53043 20 2H17C17 3.11 16.11 4 15 4V13C15.5304 13 16.0391 13.2107 16.4142 13.5858C16.7893 13.9609 17 14.4696 17 15H20C20 13.9 20.9 13 22 13V4Z"
//                     fill="black"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <div className="text-xl font-bold text-gray-900">Rs.30,000</div>
//                 <div className="text-xs text-gray-500">Total amount</div>
//               </div>
//             </div>
//           </div>

//           <div className="overflow-x-auto rounded-lg border border-gray-200">
//             <table className="w-full">
//               <thead className="bg-gray-50">
//                 <tr className="border-b border-gray-200">
//                   <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
//                     #Bill
//                   </th>
//                   <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
//                     Bill Date
//                   </th>
//                   <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
//                     Due Date
//                   </th>
//                   <th className="px-6 py-4 text-start text-sm font-semibold text-gray-900">
//                     Status
//                   </th>
//                   <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
//                     Amount Due
//                   </th>
//                   <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white">
//                 <tr className="border-b border-gray-100">
//                   <td className="px-6 py-4 text-sm font-medium text-gray-900">
//                     #00001
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-700">19-6-2025</td>
//                   <td className="px-6 py-4 text-sm text-gray-700">19-6-2025</td>
//                   <td className="px-6 py-4 ">
//                     <div className="flex items-center gap-10">
//                       <span className="inline-flex rounded-md bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
//                         Pending
//                       </span>
//                       <span className="inline-flex rounded bg-yellow-200 px-3 py-1 text-xs font-medium text-yellow-800">
//                         Pay Now
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-sm font-semibold text-gray-900">
//                     15,000.00 Rs.
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-2">
//                       <button className="inline-flex items-center gap-1 rounded bg-gray-800 px-3 py-1 text-xs font-medium text-white hover:bg-gray-700">
//                         Upload Voucher
//                         <Upload className="h-3 w-3" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr className="border-b border-gray-100">
//                   <td className="px-6 py-4 text-sm font-medium text-gray-900">
//                     #00001
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-700">19-6-2025</td>
//                   <td className="px-6 py-4 text-sm text-gray-700">19-6-2025</td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-10">
//                       <span className="inline-flex rounded-md bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
//                         Pending
//                       </span>
//                       <span className="inline-flex rounded bg-yellow-200 px-3 py-1 text-xs font-medium text-yellow-800">
//                         Pay Now
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-sm font-semibold text-gray-900">
//                     15,000.00 Rs.
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center gap-2">
//                       <button className="inline-flex items-center gap-1 rounded bg-gray-800 px-3 py-1 text-xs font-medium text-white hover:bg-gray-700">
//                         Upload Voucher
//                         <Upload className="h-3 w-3" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import {
  CreditCard,
  FileText,
  Clock,
  DollarSign,
  Upload,
  Download,
  Eye,
  Banknote,
} from 'lucide-react'; // Using lucide-react for a modern icon set
export default function BillsPayment() {
  return (
    <>
      {/* <div className="ms-10 mt-4 flex items-center gap-2 text-gray-700">
        <CreditCard size={20} className="text-gray-500" />
        <h1 className="text-xl font-semibold text-gray-800">Bills & Payment</h1>
      </div> */}
      <div className="mx-auto max-w-6xl bg-white p-6">
        <div className="rounded-xl border border-gray-200 p-8 shadow-sm">
          {/* Main Cards */}
          <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Apply for Ballot Card */}
            <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-1 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
              <div className="relative z-10 p-8 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-[#EA5547] transition-all duration-300 ease-in-out group-hover:scale-110">
                  <FileText size={28} />
                </div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  Apply for Ballot
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  Fill your application for property Ballot with our digital
                  process.
                </p>
              </div>
              {/* Subtle animated border on hover */}
              <div className="absolute inset-0 z-0 rounded-xl ring-2 ring-transparent transition-all duration-300 ease-in-out group-hover:ring-[#FDC62C]"></div>
            </div>
            {/* View Application Card */}
            <div className="group relative cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-1 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
              <div className="relative z-10 p-8 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-[#434143] transition-all duration-300 ease-in-out group-hover:scale-110">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.857 33.4286C29.3955 33.4286 30.6427 32.1814 30.6427 30.6429C30.6427 29.1044 29.3955 27.8571 27.857 27.8571C26.3185 27.8571 25.0713 29.1044 25.0713 30.6429C25.0713 32.1814 26.3185 33.4286 27.857 33.4286Z"
                      fill="black"
                    />
                    <path
                      d="M38.689 29.9172C37.8284 27.7247 36.3433 25.8329 34.4178 24.4764C32.4922 23.1198 30.211 22.3581 27.8567 22.2857C25.5025 22.3581 23.2212 23.1198 21.2957 24.4764C19.3702 25.8329 17.8851 27.7247 17.0245 29.9172L16.7139 30.6429L17.0245 31.3699C17.8853 33.5622 19.3705 35.4537 21.296 36.81C23.2215 38.1662 25.5026 38.9277 27.8567 39C30.2108 38.9277 32.492 38.1662 34.4175 36.81C36.343 35.4537 37.8281 33.5622 38.689 31.3699L38.9996 30.6429L38.689 29.9172ZM27.8567 36.2143C26.7548 36.2143 25.6776 35.8875 24.7614 35.2753C23.8452 34.6631 23.1311 33.793 22.7094 32.775C22.2877 31.7569 22.1774 30.6367 22.3923 29.5559C22.6073 28.4752 23.138 27.4824 23.9171 26.7033C24.6963 25.9241 25.689 25.3935 26.7698 25.1785C27.8505 24.9635 28.9708 25.0738 29.9888 25.4955C31.0069 25.9172 31.877 26.6313 32.4892 27.5475C33.1014 28.4638 33.4282 29.5409 33.4282 30.6429C33.4263 32.1199 32.8387 33.536 31.7943 34.5804C30.7498 35.6249 29.3338 36.2125 27.8567 36.2143ZM6.96387 20.8929H13.9282V23.6786H6.96387V20.8929ZM6.96387 13.9286H23.6782V16.7143H6.96387V13.9286ZM6.96387 6.96429H23.6782V9.75001H6.96387V6.96429Z"
                      fill="black"
                    />
                    <path
                      d="M27.8571 0H2.78571C2.04757 0.00220451 1.3403 0.296407 0.818352 0.818352C0.296407 1.3403 0.00220451 2.04757 0 2.78571V36.2143C0.00220451 36.9524 0.296407 37.6597 0.818352 38.1817C1.3403 38.7036 2.04757 38.9978 2.78571 39H13.9286V36.2143H2.78571V2.78571H27.8571V18.1071H30.6429V2.78571C30.6407 2.04757 30.3465 1.3403 29.8245 0.818352C29.3026 0.296407 28.5953 0.00220451 27.8571 0Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  View Application
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  View your application and monitor the current status.
                </p>
              </div>
              {/* Subtle animated border on hover */}
              <div className="absolute inset-0 z-0 rounded-xl ring-2 ring-transparent transition-all duration-300 ease-in-out group-hover:ring-[#FDC62C]"></div>
            </div>
          </div>
          {/* Statistics Cards */}
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Total Application */}
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#68482F]">
                <FileText size={24} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-sm text-gray-500">Total Applications</div>
              </div>
            </div>
            {/* Pending */}
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#EA5547]">
                <Clock size={24} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">1</div>
                <div className="text-sm text-gray-500">Pending</div>
              </div>
            </div>
            {/* Paid */}
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#434143]">
                <DollarSign size={24} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">1</div>
                <div className="text-sm text-gray-500">Paid</div>
              </div>
            </div>
            {/* Total Amount */}
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#FDC62C]">
                <Banknote size={24} />{' '}
                {/* Changed to Banknote for total amount */}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  Rs.30,000
                </div>
                <div className="text-sm text-gray-500">Total Amount</div>
              </div>
            </div>
          </div>
          {/* Bills Table */}
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-600"
                  >
                    #Bill
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-600"
                  >
                    Bill Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-600"
                  >
                    Due Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-600"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-600"
                  >
                    Payment Method
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-600"
                  >
                    Payment
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-600"
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-600"
                  >
                    Download
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    #00001
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    19-6-2025
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    19-6-2025
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-[#EA5547]">
                        Pending
                      </span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex  w-[100px] items-center gap-2 rounded-md  bg-[#F3A955] px-3 py-1">
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.33334 8.66666V1.33334H2C1.63181 1.33334 1.33334 1.63181 1.33334 2V8.78047C1.54748 8.7049 1.77293 8.66641 2 8.66666H9.33334ZM0 2V11.3333C0 12.4379 0.895437 13.3333 2 13.3333H10.6667V10.6667H10V12H2C1.63181 12 1.33334 11.7015 1.33334 11.3333V10.6667C1.33334 10.2985 1.63181 10 2 10H10.6667V0H2C0.895437 0 0 0.895437 0 2ZM4.66669 7.33334V4.66666H6V7.33334H4.66669ZM5.33334 4C5.70153 4 6 3.70153 6 3.33334C6 2.96516 5.70153 2.66666 5.33334 2.66666C4.96516 2.66666 4.66669 2.96516 4.66669 3.33334C4.66669 3.70153 4.96516 4 5.33334 4ZM2 10.6667H9.33334V11.3333H2V10.6667Z"
                          fill="white"
                        />
                      </svg>

                      <button className="inline-flex items-center  text-xs font-medium text-white transition-colors duration-200 hover:bg-yellow-400">
                        Manual
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-900">
                    15,000.00 Rs.
                  </td>
                  <td className="whitespace-nowrap">
                    <button className="inline-flex items-center gap-1 rounded-md bg-[#68482F] px-4 py-1 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#434143]">
                      Upload Voucher
                      <Upload className="h-4 w-4" />
                    </button>
                  </td>
                  <td className="whitespace-nowrap">
                    <button className="inline-flex items-center gap-1 rounded-md bg-[#5BB961] px-4 py-1 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#38893d]">
                      Download Challan
                      <Download className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    #00002
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    10-5-2025
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700">
                    10-5-2025
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                        Paid
                      </span>
                      {/* No Pay Now button if status is Paid */}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex  w-[100px] items-center gap-2 rounded-md  bg-[#F3A955] px-3 py-1">
                      <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 13.0752V13.5752H9.5V13.0752H10.5ZM3.30273 1.08496C2.73457 1.71687 2.26223 2.41479 1.8877 3.17871L1.7041 3.57617C1.23381 4.65966 1.0007 5.82828 1 7.0752C0.999437 8.16651 1.17831 9.19736 1.53906 10.1641L1.7041 10.5742C2.10471 11.4943 2.63866 12.3248 3.30273 13.0645L2.93457 13.4326C2.34197 12.7731 1.84461 12.0314 1.44336 11.2051L1.24707 10.7773C0.750574 9.626 0.50069 8.39341 0.5 7.0752L0.511719 6.58496C0.558154 5.61218 0.745346 4.68748 1.07227 3.80859L1.24707 3.37305C1.67956 2.37277 2.24317 1.48925 2.93555 0.717773L3.30273 1.08496ZM17.0645 0.716797C17.7581 1.48848 18.3219 2.37246 18.7539 3.37305C19.251 4.52431 19.5006 5.75706 19.5 7.0752C19.4993 8.39341 19.2494 9.626 18.7529 10.7773C18.3215 11.7777 17.7578 12.6611 17.0645 13.4326L16.6963 13.0645C17.3616 12.3246 17.8967 11.4947 18.2969 10.5742C18.7679 9.49059 19.0006 8.32225 19 7.0752C18.9994 5.98408 18.8207 4.95286 18.4609 3.98633L18.2959 3.57617C17.8962 2.65542 17.3617 1.82493 16.6963 1.08496L17.0645 0.716797ZM5.4082 3.19043C5.02079 3.64905 4.70585 4.16241 4.46484 4.72949C4.15372 5.46156 4 6.24533 4 7.0752C4.00002 7.90501 4.15373 8.68887 4.46484 9.4209C4.70568 9.98749 5.0212 10.4997 5.4082 10.958L5.06445 11.3027C4.63513 10.8013 4.2822 10.2354 4.00879 9.60156C3.67044 8.81705 3.50002 7.97658 3.5 7.0752C3.5 6.17357 3.67029 5.33255 4.00879 4.54785C4.28226 3.91392 4.63501 3.34822 5.06445 2.84668L5.4082 3.19043ZM14.9346 2.84668C15.3642 3.34834 15.7177 3.91372 15.9912 4.54785C16.3297 5.33255 16.5 6.17356 16.5 7.0752C16.5 7.97658 16.3296 8.81705 15.9912 9.60156C15.7177 10.2356 15.3641 10.8011 14.9346 11.3027L14.5908 10.958C14.978 10.4996 15.2942 9.98769 15.5352 9.4209C15.8463 8.68887 16 7.90501 16 7.0752C16 6.24533 15.8463 5.46156 15.5352 4.72949C15.2941 4.16221 14.9784 3.64918 14.5908 3.19043L14.9346 2.84668ZM10 3.5752C10.8339 3.5752 11.5316 3.86385 12.1211 4.45312C12.7106 5.04266 13 5.74109 13 6.5752C13 6.93326 12.9205 7.27242 12.7568 7.59766L12.6816 7.73633C12.435 8.15891 12.1592 8.56517 11.8555 8.95508C11.5326 9.36948 11.2394 9.77004 10.9756 10.1562C10.7754 10.4492 10.6336 10.7562 10.5596 11.0752H9.44141C9.3678 10.755 9.22597 10.447 9.02441 10.1543C8.89241 9.96261 8.75306 9.767 8.60645 9.56738L8.14453 8.95605C7.91675 8.66269 7.70502 8.36072 7.50977 8.0498L7.32031 7.73535C7.10636 7.36787 7.00135 6.98382 7 6.5752C7 5.84526 7.2215 5.21964 7.67188 4.67969L7.87891 4.45312C8.46836 3.86385 9.16608 3.5752 10 3.5752Z"
                          fill="white"
                          stroke="white"
                        />
                      </svg>

                      <button className="inline-flex items-center  text-xs font-medium text-white transition-colors duration-200 hover:bg-yellow-400">
                        Online
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-900">
                    15,000.00 Rs.
                  </td>
                  <td className="whitespace-nowrap ">
                    {/* No Upload Voucher button if status is Paid */}
                    <button
                      className="inline-flex cursor-not-allowed items-center gap-1 rounded-md bg-gray-300 px-4 py-1 text-sm font-medium text-gray-700"
                      disabled
                    >
                      Uploaded Done
                      <Upload className="h-4 w-4" />
                    </button>
                  </td>
                  <td className="whitespace-nowrap">
                    <button className="inline-flex items-center gap-1 rounded-md bg-[#5BB961] px-4 py-1 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#38893d]">
                      Download Challan
                      <Download className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
