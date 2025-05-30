// import React, { useState } from 'react';
// import DynamicForm from '../../ui/DynamicForm';
// import BallotFrominstruction from './BallotFrominstruction';

// function BallotForm() {
//   const [step, setStep] = useState(1);
//   const totalSteps = 4; // REQ’D INFO, NEXT OF KIN, MORE DETAILS, PAYMENT

//   // Form data state to persist across steps
//   const [formData, setFormData] = useState({
//     category: '',
//     plotType: '',
//     name: '',
//     phoneNumber: '',
//     province: '',
//     country: '',
//     city: '',
//     cnicNicop: '',
//     mailingAddress: '',
//     applicationDate: '',
//     dueDate: '',
//   });

//   // Fields for Step 1: REQ’D INFO
//   const step1Fields = [
//     {
//       name: 'category',
//       label: 'Category',
//       type: 'select',
//       required: true,
//       options: [
//         { value: '', label: 'Select' },
//         { value: 'CAT01', label: 'CAT01' },
//         { value: 'CAT02', label: 'CAT02' },
//       ],
//       width: 'full',
//     },
//     {
//       name: 'plotType',
//       label: 'Plot Type',
//       type: 'select',
//       required: true,
//       options: [
//         { value: '', label: 'Select' },
//         { value: 'PLT01', label: 'PLT01' },
//         { value: 'PLT02', label: 'PLT02' },
//       ],
//       width: 'full',
//     },
//     {
//       name: 'name',
//       label: 'Name',
//       type: 'text',
//       required: true,
//       placeholder: 'Enter Name',
//       width: 'half',
//     },
//     {
//       name: 'phoneNumber',
//       label: 'Phone Number',
//       type: 'text',
//       required: true,
//       placeholder: '923xxxxxxx',
//       width: 'half',
//     },
//     {
//       name: 'province',
//       label: 'Province',
//       type: 'text',
//       required: true,
//       placeholder: 'Enter Province',
//       width: 'half',
//     },
//     {
//       name: 'country',
//       label: 'Country',
//       type: 'text',
//       required: true,
//       placeholder: 'Enter Country',
//       width: 'half',
//     },
//     {
//       name: 'city',
//       label: 'City',
//       type: 'text',
//       required: true,
//       placeholder: 'Enter City',
//       width: 'half',
//     },
//     {
//       name: 'cnicNicop',
//       label: 'CNIC/NICOP',
//       type: 'text',
//       required: true,
//       placeholder: 'Enter CNIC/NICOP',
//       width: 'half',
//     },
//     {
//       name: 'mailingAddress',
//       label: 'Mailing Address',
//       type: 'text',
//       required: true,
//       placeholder: 'Enter Mailing Address',
//       width: 'full',
//     },
//     {
//       name: 'applicationDate',
//       label: 'Application Date',
//       type: 'date',
//       required: true,
//       width: 'half',
//     },
//     {
//       name: 'dueDate',
//       label: 'Due Date',
//       type: 'date',
//       required: true,
//       width: 'half',
//     },
//   ];

//   // Handle form submission for the current step
//   const handleSubmit = (data) => {
//     setFormData({ ...formData, ...data });
//     if (step < totalSteps) {
//       setStep(step + 1);
//     } else {
//       console.log('Final Form Submission:', formData);
//       // Handle final submission (e.g., API call)
//     }
//   };

//   // Handle going back to the previous step
//   const handleBack = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   // Render the current step
//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <DynamicForm
//             title="Required Info"
//             subtitle="REQ’D INFO"
//             fields={step1Fields}
//             onSubmit={handleSubmit}
//             onCancel={handleBack}
//             submitText="Next"
//             cancelText={step > 1 ? 'Back' : 'Cancel'}
//             initialData={formData}
//             showConfirmation={false}
//             instructions={
//               <div className="rounded bg-gray-100 p-2">
//                 <ul className="list-disc pl-5">
//                   <li>
//                     Fill your form fields as per given format (like Cell Number
//                     923xxxxxxx)
//                   </li>
//                   <li>
//                     Enter valid email which should not contain special
//                     characters
//                   </li>
//                   <li>
//                     For country 'USA' or 'Canada' please select respective
//                     Province/State
//                   </li>
//                 </ul>
//               </div>
//             }
//           />
//         );
//       case 2:
//         return (
//           <DynamicForm
//             title="Application for Public Ballot"
//             subtitle="NEXT OF KIN"
//             fields={[]} // Add fields for this step
//             onSubmit={handleSubmit}
//             onCancel={handleBack}
//             submitText="Next"
//             cancelText="Back"
//             initialData={formData}
//             showConfirmation={false}
//           />
//         );
//       case 3:
//         return (
//           <DynamicForm
//             title="Application for Public Ballot"
//             subtitle="MORE DETAILS"
//             fields={[]} // Add fields for this step
//             onSubmit={handleSubmit}
//             onCancel={handleBack}
//             submitText="Next"
//             cancelText="Back"
//             initialData={formData}
//             showConfirmation={false}
//           />
//         );
//       case 4:
//         return (
//           <DynamicForm
//             title="Application for Public Ballot"
//             subtitle="PAYMENT"
//             fields={[]} // Add fields for this step
//             onSubmit={handleSubmit}
//             onCancel={handleBack}
//             submitText="Submit"
//             cancelText="Back"
//             initialData={formData}
//             showConfirmation={true}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       {/* Step Navigation */}
//       <div className="m-auto mb-4 w-full max-w-2xl">
//         <div className="flex justify-between rounded-t-md p-2 text-black">
//           <div
//             className={`flex-1 py-2 text-center ${
//               step === 1 ? 'bg-gray-600' : ''
//             }`}
//           >
//             REQ’D INFO
//           </div>
//           <div
//             className={`flex-1 py-2 text-center ${
//               step === 2 ? 'bg-gray-600' : ''
//             }`}
//           >
//             NEXT OF KIN
//           </div>
//           <div
//             className={`flex-1 py-2 text-center ${
//               step === 3 ? 'bg-gray-600' : ''
//             }`}
//           >
//             MORE DETAILS
//           </div>
//           <div
//             className={`flex-1 py-2 text-center ${
//               step === 4 ? 'bg-gray-600' : ''
//             }`}
//           >
//             PAYMENT
//           </div>
//         </div>
//       </div>
//       <div className="flex">
//         {renderStep()}
//         <div className=" w-96 flex self-start">
//           <BallotFrominstruction />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BallotForm;


import React, { useState } from 'react';
import DynamicForm from '../../ui/DynamicForm';
import BallotFrominstruction from './BallotFrominstruction';

function BallotForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    category: '',
    plotType: '',
    name: '',
    phoneNumber: '',
    province: '',
    country: '',
    city: '',
    cnicNicop: '',
    mailingAddress: '',
    applicationDate: '',
    dueDate: '',
  });

  const step1Fields = [
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'CAT01', label: 'CAT01' },
        { value: 'CAT02', label: 'CAT02' },
      ],
      width: 'full',
    },
    {
      name: 'plotType',
      label: 'Plot Type',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'PLT01', label: 'PLT01' },
        { value: 'PLT02', label: 'PLT02' },
      ],
      width: 'full',
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      placeholder: 'Enter Name',
      width: 'half',
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
      required: true,
      placeholder: '923xxxxxxx',
      width: 'half',
    },
    {
      name: 'province',
      label: 'Province',
      type: 'text',
      required: true,
      placeholder: 'Enter Province',
      width: 'half',
    },
    {
      name: 'country',
      label: 'Country',
      type: 'text',
      required: true,
      placeholder: 'Enter Country',
      width: 'half',
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      required: true,
      placeholder: 'Enter City',
      width: 'half',
    },
    {
      name: 'cnicNicop',
      label: 'CNIC/NICOP',
      type: 'text',
      required: true,
      placeholder: 'Enter CNIC/NICOP',
      width: 'half',
    },
    {
      name: 'mailingAddress',
      label: 'Mailing Address',
      type: 'text',
      required: true,
      placeholder: 'Enter Mailing Address',
      width: 'full',
    },
    {
      name: 'applicationDate',
      label: 'Application Date',
      type: 'date',
      required: true,
      width: 'half',
    },
    {
      name: 'dueDate',
      label: 'Due Date',
      type: 'date',
      required: true,
      width: 'half',
    },
  ];

  const handleSubmit = (data) => {
    setFormData({ ...formData, ...data });
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      console.log('Final Form Submission:', formData);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <DynamicForm
            title="Required Info"
            subtitle="REQ’D INFO"
            fields={step1Fields}
            onSubmit={handleSubmit}
            onCancel={handleBack}
            submitText="Next"
            cancelText={step > 1 ? 'Back' : 'Cancel'}
            initialData={formData}
            showConfirmation={false}
            instructions={
              <div className="rounded bg-gray-100 p-2">
                <ul className="list-disc pl-5 text-sm">
                  <li>Fill your form fields as per given format (like Cell Number 923xxxxxxx)</li>
                  <li>Enter valid email which should not contain special characters</li>
                  <li>For country 'USA' or 'Canada' please select respective Province/State</li>
                </ul>
              </div>
            }
          />
        );
      case 2:
        return (
          <DynamicForm
            title="Application for Public Ballot"
            subtitle="NEXT OF KIN"
            fields={[]}
            onSubmit={handleSubmit}
            onCancel={handleBack}
            submitText="Next"
            cancelText="Back"
            initialData={formData}
            showConfirmation={false}
          />
        );
      case 3:
        return (
          <DynamicForm
            title="Application for Public Ballot"
            subtitle="MORE DETAILS"
            fields={[]}
            onSubmit={handleSubmit}
            onCancel={handleBack}
            submitText="Next"
            cancelText="Back"
            initialData={formData}
            showConfirmation={false}
          />
        );
      case 4:
        return (
          <DynamicForm
            title="Application for Public Ballot"
            subtitle="PAYMENT"
            fields={[]}
            onSubmit={handleSubmit}
            onCancel={handleBack}
            submitText="Submit"
            cancelText="Back"
            initialData={formData}
            showConfirmation={true}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Step Navigation */}
      <div className="mx-auto mb-4 w-full max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-sm font-medium">
          <div className={`py-2 rounded-md ${step === 1 ? 'bg-gray-600 text-white' : 'bg-white'}`}>REQ’D INFO</div>
          <div className={`py-2 rounded-md ${step === 2 ? 'bg-gray-600 text-white' : 'bg-white'}`}>NEXT OF KIN</div>
          <div className={`py-2 rounded-md ${step === 3 ? 'bg-gray-600 text-white' : 'bg-white'}`}>MORE DETAILS</div>
          <div className={`py-2 rounded-md ${step === 4 ? 'bg-gray-600 text-white' : 'bg-white'}`}>PAYMENT</div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto">
        <div className="w-full lg:flex-1">{renderStep()}</div>
        <div className="w-full lg:w-[400px] shrink-0">
          <BallotFrominstruction />
        </div>
      </div>
    </div>
  );
}

export default BallotForm;
