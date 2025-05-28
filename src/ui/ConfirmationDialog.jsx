import React from 'react';

const ConfirmationDialog = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "Are you sure?", 
  message = null,
  confirmText = "Yes",
  cancelText = "No",
  confirmButtonClass = "bg-gray-700 hover:bg-gray-800",
  cancelButtonClass = "bg-red-800 hover:bg-red-900"
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
        <h2 className="text-2xl font-medium text-gray-900 text-center mb-2">
          {title}
        </h2>
        {message && (
          <p className="text-gray-600 text-center mb-8">
            {message}
          </p>
        )}
        
        <div className="flex gap-4">
          <button 
            onClick={onConfirm}
            className={`flex-1 py-4 text-white rounded-xl font-medium text-lg transition-colors ${confirmButtonClass}`}
          >
            {confirmText}
          </button>
          
          <button 
            onClick={onClose}
            className={`flex-1 py-4 text-white rounded-xl font-medium text-lg transition-colors ${cancelButtonClass}`}
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;