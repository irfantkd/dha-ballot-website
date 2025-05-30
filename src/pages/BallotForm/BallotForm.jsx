// import React from 'react'

// function BallotFoam() {
//   return (
//     <div>
//       hello world
//     </div>
//   )
// }

// export default BallotFoam



import React, { useState } from 'react';
import DynamicForm from '../../ui/DynamicForm';
function BallotForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 4; // REQ’D INFO, NEXT OF KIN, MORE DETAILS, PAYMENT

  // Form data state to persist across steps
  const [formData, setFormData] = useState({
    partType: '',
    title: '',
    name: '',
    province: '',
    city: '',
    meetingAddress: '',
    dateDue: '',
  });

  // Fields for Step 1: REQ’D INFO
  const step1Fields = [
    {
      name: 'partType',
      label: 'Part Type',
      type: 'select',
      required: true,
      options: [
        { value: 'IND01', label: 'IND01' },
        { value: 'IND02', label: 'IND02' },
      ],
      width: 'full',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'select',
      required: true,
      options: [
        { value: 'Mr', label: 'Mr' },
        { value: 'Mrs', label: 'Mrs' },
        { value: 'Ms', label: 'Ms' },
      ],
      width: 'full',
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      placeholder: 'Momo Herbst',
      width: 'full',
    },
    {
      name: 'province',
      label: 'Province',
      type: 'text',
      required: true,
      width: 'full',
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      required: true,
      width: 'full',
    },
    {
      name: 'meetingAddress',
      label: 'Meeting Address',
      type: 'text',
      required: true,
      width: 'full',
    },
    {
      name: 'dateDue',
      label: 'Date Due',
      type: 'date',
      required: true,
      width: 'full',
    },
  ];

  // Handle form submission for the current step
  const handleSubmit = (data) => {
    setFormData({ ...formData, ...data });
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      console.log('Final Form Submission:', formData);
      // Handle final submission (e.g., API call)
    }
  };

  // Handle going back to the previous step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Render the current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <DynamicForm
            title="Application for Public Ballot"
            subtitle="REQ’D INFO"
            fields={step1Fields}
            onSubmit={handleSubmit}
            onCancel={handleBack}
            submitText="NEXT"
            cancelText={step > 1 ? 'BACK' : 'CANCEL'}
            initialData={formData}
            showConfirmation={false}
          />
        );
      case 2:
        return (
          <DynamicForm
            title="Application for Public Ballot"
            subtitle="NEXT OF KIN"
            fields={[]} // Add fields for this step
            onSubmit={handleSubmit}
            onCancel={handleBack}
            submitText="NEXT"
            cancelText="BACK"
            initialData={formData}
            showConfirmation={false}
          />
        );
      case 3:
        return (
          <DynamicForm
            title="Application for Public Ballot"
            subtitle="MORE DETAILS"
            fields={[]} // Add fields for this step
            onSubmit={handleSubmit}
            onCancel={handleBack}
            submitText="NEXT"
            cancelText="BACK"
            initialData={formData}
            showConfirmation={false}
          />
        );
      case 4:
        return (
          <DynamicForm
            title="Application for Public Ballot"
            subtitle="PAYMENT"
            fields={[]} // Add fields for this step
            onSubmit={handleSubmit}
            onCancel={handleBack}
            submitText="SUBMIT"
            cancelText="BACK"
            initialData={formData}
            showConfirmation={true}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100   p-4">
      {/* Step Navigation */}
      <div className="w-full max-w-2xl mb-4">
        <div className="flex justify-between bg-gray-800 text-white p-2 rounded-t-md">
          <div className={`flex-1 text-center py-2 ${step === 1 ? 'bg-gray-600' : ''}`}>
            REQ’D INFO
          </div>
          <div className={`flex-1 text-center py-2 ${step === 2 ? 'bg-gray-600' : ''}`}>
            NEXT OF KIN
          </div>
          <div className={`flex-1 text-center py-2 ${step === 3 ? 'bg-gray-600' : ''}`}>
            MORE DETAILS
          </div>
          <div className={`flex-1 text-center py-2 ${step === 4 ? 'bg-gray-600' : ''}`}>
            PAYMENT
          </div>
        </div>
      </div>
      {renderStep()}
    </div>
  );
}

export default BallotForm;