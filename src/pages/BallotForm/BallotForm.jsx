import React, { useState } from 'react';
import DynamicForm from '../../ui/DynamicForm';
import BallotFrominstruction from './BallotFrominstruction';
import Header from '../../ui/Header';

function BallotForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    quota: '',
    plotType: '',
    refundableAmount: '',
    nonRefundableAmount: '',
    name: '',
    phoneNumber: '',
    country: '',
    province: '',
    district: '',
    cnicNicop: '',
    mailingAddress: '',
    kinName: '',
    kinCnic: '',
    kinPhone: '',
    kinAddress: '',
    armyNumber: '',
    retirementDate: '',
    paymentMethod: '',
  });

  const step1Fields = [
    {
      name: 'quota',
      label: 'Quota',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'Quota01', label: 'Quota01' },
        { value: 'Quota02', label: 'Quota02' },
      ],
      width: 'half',
    },
    {
      name: 'plotType',
      label: 'Plot Type',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'Residential', label: 'Residential' },
        { value: 'Commercial', label: 'Commercial' },
      ],
      width: 'half',
    },
    {
      name: 'refundableAmount',
      label: 'Refundable Amount',
      type: 'text',
      required: true,
      placeholder: 'Enter Refundable Amount',
      width: 'half',
    },
    {
      name: 'nonRefundableAmount',
      label: 'Non-Refundable Amount',
      type: 'text',
      required: true,
      placeholder: 'Enter Non-Refundable Amount',
      width: 'half',
    },
  ];

  const step2Fields = [
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
      placeholder: '923xxxxxxxxx',
      width: 'half',
    },
    {
      name: 'country',
      label: 'Country',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'Pakistan', label: 'Pakistan' },
        { value: 'USA', label: 'USA' },
        { value: 'Canada', label: 'Canada' },
      ],
      width: 'half',
    },
    {
      name: 'province',
      label: 'Province',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'Punjab', label: 'Punjab' },
        { value: 'Sindh', label: 'Sindh' },
        { value: 'KPK', label: 'KPK' },
        { value: 'Balochistan', label: 'Balochistan' },
      ],
      width: 'half',
    },
    {
      name: 'district',
      label: 'District',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'Lahore', label: 'Lahore' },
        { value: 'Karachi', label: 'Karachi' },
        { value: 'Islamabad', label: 'Islamabad' },
      ],
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
      width: 'half',
    },
  ];

  const step3Fields = [
    {
      name: 'kinName',
      label: 'Next of Kin Name',
      type: 'text',
      required: true,
      width: 'half',
    },
    {
      name: 'kinCnic',
      label: 'CNIC/NICOP',
      type: 'text',
      required: true,
      width: 'half',
    },
    {
      name: 'kinPhone',
      label: 'Phone Number',
      type: 'text',
      required: true,
      width: 'half',
    },
    {
      name: 'kinAddress',
      label: 'Mailing Address',
      type: 'text',
      required: true,
      width: 'half',
    },
  ];

  const step4Fields = [
    {
      name: 'armyNumber',
      label: 'Army Number',
      type: 'text',
      required: true,
      width: 'half',
    },
    {
      name: 'retirementDate',
      label: 'Date of Retirement',
      type: 'date',
      required: true,
      width: 'half',
    },
  ];

  const step5Fields = [
    {
      name: 'paymentMethod',
      label: 'Payment Method',
      type: 'select',
      required: true,
      options: [
        { value: '', label: 'Select' },
        { value: 'BankChallan', label: 'Pay via Bank Challan' },
        { value: 'CreditCard', label: 'Pay via Credit Card' },
      ],
      width: 'half',
    },
  ];

  const handleSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      console.log('Final Form Submission:', { ...formData, ...data });
      // TODO: Send to API here
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    const commonProps = {
      onSubmit: handleSubmit,
      onCancel: handleBack,
      cancelText: step > 1 ? 'Back' : 'Cancel',
      initialData: formData,
      showConfirmation: step === totalSteps,
    };

    switch (step) {
      case 1:
        return (
          <DynamicForm
            title="Required Info"
            subtitle="Step 1: Required Info"
            fields={step1Fields}
            submitText="Next"
            {...commonProps}
          />
        );
      case 2:
        return (
          <DynamicForm
            title="Basic Info"
            subtitle="Step 2: Basic Info"
            fields={step2Fields}
            submitText="Next"
            {...commonProps}
          />
        );
      case 3:
        return (
          <DynamicForm
            title="Next of Kin"
            subtitle="Step 3: Next of Kin"
            fields={step3Fields}
            submitText="Next"
            {...commonProps}
          />
        );
      case 4:
        return (
          <DynamicForm
            title="More Details"
            subtitle="Step 4: More Details"
            fields={step4Fields}
            submitText="Next"
            {...commonProps}
          />
        );
      case 5:
        return (
          <DynamicForm
            title="Payment"
            subtitle="Step 5: Payment"
            fields={step5Fields}
            submitText="Download"
            currentStep={step}
            isCancel={false}
            isSubmit={false}
            {...commonProps}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header>
        {{
          headingText: 'Application for Public Ballot', // Pass the text as headingText
        }}
      </Header>{' '}
      <div className="w-full px-4 py-10">
        {/* <h1 className="mb-2 text-center text-3xl font-bold">
          Application for Public Ballot
        </h1> */}
        <p className="mx-auto max-w-lg text-center text-sm leading-relaxed">
          Please make sure that you provide only correct information. Making
          false statements will result in cancellation of your application.
        </p>
        <p className="mb-7 text-center text-red-600">* Fields are mandatory</p>

        {/* Step Navigation */}

        <div className="mx-auto mb-9 w-full max-w-5xl px-2">
          <div className="flex flex-wrap justify-center gap-2 text-center text-sm font-medium">
            {[
              'Required Info',
              'Basic Info',
              'Next of Kin',
              'More Details',
              'Payment',
            ].map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => setStep(index + 1)}
                className={`min-w-[130px] flex-1 rounded-md px-3 py-3 text-xs transition sm:text-sm ${
                  step === index + 1
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Form and Sidebar */}
        <div className="mx-auto flex w-11/12 flex-col lg:flex-row ">
          <div className="w-full px-3 lg:flex-1">{renderStep()}</div>
          <div className="w-full lg:w-[400px]">
            <BallotFrominstruction />
          </div>
        </div>
      </div>

      {/* Form and Sidebar */}
      <div className="mx-auto flex w-11/12 flex-col lg:flex-row ">
        <div className="w-full px-3 lg:flex-1">{renderStep()}</div>
        <div className="w-full lg:w-[400px]">
          <BallotFrominstruction />
        </div>
      </div>
    </div>
  );
}

export default BallotForm;
