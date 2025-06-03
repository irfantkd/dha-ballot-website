import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { usePostMutation } from '../../services/apiService';

const DataConfirmationForm = ({ data, onBack }) => {
  const [error, setError] = useState(null);
  const [postPaymentRequest, { isLoading }] = usePostMutation();

  const handlePayNow = async () => {
    try {
      setError(null);
      const result = await postPaymentRequest({
        path: '/hbl/initiate-payment',
        body: {
          plotReferenceNo: data.plotReferenceNo, // backend: plotno
          name: data.name, // backend: membername
          membershipNo: data.membershipNo, // backend: membershipno
          phoneNumber: data.phoneNumber, // backend: challan_cell
          cnic: data.cnic, // backend: newidcard
          depositorName: data.depositorName, // backend: challan_depositor
          remarks: data.remarks, // backend: remarks
          purposeOfDeposit: data.purposeOfDeposit, // backend: purpose_name
          email: data.email.toLowerCase(), // backend: challan_email
          address: data.address, // backend: challan_address
          amount: data.amount, // backend: challan_amount
          country: data.country, // backend: applicant_country
          province: data.province, // backend: applicant_province
          district: data.district, // backend: applicant_district
          paymentType: data.paymentOption, // backend: payment_option
        },
      }).unwrap();

      if (result) {
        window.location.href = result.data;
      } else {
        throw new Error('Payment URL not received');
      }
    } catch (err) {
      setError(
        'Payment initiation failed. Please verify your details and try again. If the problem persists, contact support.'
      );
      console.error('Payment error:', err);
    }
  };

  return (
    <div className="mx-auto w-full max-w-3xl rounded-xl bg-white p-8 shadow-lg">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100"
          disabled={isLoading}
        >
          <FaArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h2 className="text-2xl font-bold text-gray-800">
          Payment Confirmation
        </h2>
        <div className="w-24"></div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Info Message */}
      <div className="mb-8 rounded-lg bg-blue-50 p-4">
        <p className="text-sm text-blue-700">
          Please review your payment details before proceeding to the secure
          payment gateway.
        </p>
      </div>

      {/* Form Content */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Purpose */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-500">
              Purpose
            </label>
            <input
              type="text"
              value={data?.purposeOfDeposit || ''}
              readOnly
              className="w-full rounded-lg bg-gray-50 p-3 font-semibold text-gray-800 ring-1 ring-inset ring-gray-200"
            />
          </div>

          {/* Plot Reference */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-500">
              Plot Reference
            </label>
            <input
              type="text"
              value={data?.plotReferenceNo || ''}
              readOnly
              className="w-full rounded-lg bg-gray-50 p-3 font-semibold text-gray-800 ring-1 ring-inset ring-gray-200"
            />
          </div>

          {/* Plot Owner */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-500">
              Plot Owner
            </label>
            <input
              type="text"
              value={data?.name || ''}
              readOnly
              className="w-full rounded-lg bg-gray-50 p-3 font-semibold text-gray-800 ring-1 ring-inset ring-gray-200"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-500">
              Contact Number
            </label>
            <input
              type="text"
              value={data?.phoneNumber || ''}
              readOnly
              className="w-full rounded-lg bg-gray-50 p-3 font-semibold text-gray-800 ring-1 ring-inset ring-gray-200"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-500">
              Email Address
            </label>
            <input
              type="text"
              value={data?.email || ''}
              readOnly
              className="w-full rounded-lg bg-gray-50 p-3 font-semibold text-gray-800 ring-1 ring-inset ring-gray-200"
            />
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-500">
              Amount (PKR)
            </label>
            <input
              type="text"
              value={
                typeof data?.amount === 'number'
                  ? data.amount.toLocaleString('en-PK')
                  : data?.amount || ''
              }
              readOnly
              className="w-full rounded-lg bg-gray-50 p-3 font-semibold text-gray-800 ring-1 ring-inset ring-gray-200"
            />
          </div>
        </div>

        {/* Bank Notice */}
        <div className="rounded-lg bg-gray-50 p-4">
          <h3 className="mb-2 font-medium text-gray-700">Payment Gateway</h3>
          <div className="flex items-center gap-4">
            <img
              src="https://crystalpng.com/wp-content/uploads/2024/10/HBL-logo.png"
              alt="HBL Pay"
              className="h-12 w-auto"
            />
            <p className="text-sm text-gray-600">
              You will be redirected to HBL's secure payment gateway to complete
              your transaction.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={handlePayNow}
            disabled={isLoading}
            className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70"
          >
            {isLoading ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataConfirmationForm;
