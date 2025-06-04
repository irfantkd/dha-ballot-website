import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur effect */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md transform rounded-2xl bg-white p-6 shadow-2xl transition-all">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-blue-50 p-3">
            <FiAlertCircle className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Confirm Submission
          </h3>
        </div>

        <div className="mt-4 space-y-3">
          <p className="text-gray-500">
            You're about to submit your payment application. Please confirm to
            proceed.
          </p>

          <div className="text-sm text-gray-500">
            <span className="font-medium text-gray-700">Note:</span> This action
            will take you to the next step of the payment process.
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Confirm & Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
