import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const PaymentDetails = ({ onBack, onOnlinePayment, data }) => {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-lg bg-white p-4 shadow-lg sm:p-6">
      <div className="mb-4 flex flex-col items-start gap-4 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100"
        >
          <FaArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h2 className="text-xl font-bold text-blue-600 sm:text-2xl">
          Payment Details
        </h2>
        <div className="hidden w-8 sm:block" />
      </div>

      <div className="flex flex-col gap-4 rounded-md border bg-gray-50 p-4">
        {/* Details Grid - Single column on mobile, two columns on tablet and up */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col space-y-1 sm:flex-row sm:items-center sm:gap-4 sm:space-y-0">
            <span className="min-w-32 font-semibold text-gray-700">
              Plot Reference:
            </span>
            <span className="text-gray-600">{data?.chalan[0]?.PLOTNO}</span>
          </div>
          <div className="flex flex-col space-y-1 sm:flex-row sm:items-center sm:gap-4 sm:space-y-0">
            <span className="min-w-32 font-semibold text-gray-700">Name:</span>
            <span className="text-gray-600">{data?.chalan[0]?.MEMBERNAME}</span>
          </div>
          <div className="flex flex-col space-y-1 sm:flex-row sm:items-center sm:gap-4 sm:space-y-0">
            <span className="min-w-32 font-semibold text-gray-700">
              Membership No:
            </span>
            <span className="text-gray-600">
              {data?.chalan[0]?.MEMBERSHIPNO}
            </span>
          </div>
          <div className="flex flex-col space-y-1 sm:flex-row sm:items-center sm:gap-4 sm:space-y-0">
            <span className="min-w-32 font-semibold text-gray-700">CNIC:</span>
            <span className="text-gray-600">{data?.chalan[0]?.NEWIDCARD}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <button
          className="mt-6 w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 sm:w-auto"
          onClick={onOnlinePayment}
        >
          Online Payment
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 p-2 text-sm sm:text-base">
                Serial#
              </th>
              <th className="border border-gray-300 p-2 text-sm sm:text-base">
                Date
              </th>
              <th className="border border-gray-300 p-2 text-sm sm:text-base">
                Amount in Rs.
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.chalan?.map((payment, index) => (
              <tr key={index} className="odd:bg-gray-100 even:bg-white">
                <td className="border border-gray-300 p-2 text-center text-sm sm:text-base">
                  {index + 1}
                </td>
                <td className="border border-gray-300 p-2 text-center text-sm sm:text-base">
                  {payment?.DATE}
                </td>
                <td className="border border-gray-300 p-2 text-center text-sm sm:text-base">
                  {payment?.AMOUNTPAID}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 space-y-2 text-xs text-gray-600 sm:text-sm">
        <p>
          <strong>Note:</strong>
        </p>
        <p>
          a. "Transfer Services Charges" from the Credit Card users will be
          deducted by Bank from the paid amount.
        </p>
        <p>
          b. Customer required to include "Transfer Service Charges" in
          principal amount prior to process of payment.
        </p>
      </div>
    </div>
  );
};

export default PaymentDetails;
