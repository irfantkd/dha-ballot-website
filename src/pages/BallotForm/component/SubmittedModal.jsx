import React from 'react';
import { CheckCircle, Download } from 'lucide-react';

const ApplicationSubmittedModal = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg border border-gray-300 bg-white px-6 py-8 text-center shadow-lg">
        <div className="mb-4 flex justify-center">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h2 className="mb-2 text-xl font-semibold text-gray-800">
          Application Submitted
        </h2>
        <p className="mb-6 text-gray-600">
          You have submitted your Application
        </p>

        <button
          //   onClick={onDownload}
          className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-900"
        >
          Download Challan
          <Download className="h-4 w-4" />
        </button>
        <button
          onClick={onClose}
          className="ms-2 inline-flex items-center gap-2 rounded-md bg-gray-300 px-4 py-2 text-sm font-medium  transition hover:bg-gray-400"
        >
          Cencal
        </button>
      </div>
    </div>
  );
};

export default ApplicationSubmittedModal;
