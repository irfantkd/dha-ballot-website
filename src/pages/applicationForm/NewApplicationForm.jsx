// NewApplicationForm.jsx
import DynamicForm from '../../ui/DynamicForm';
export default function NewApplicationForm() {
  const formConfig = {
    title: 'New Application',
    subtitle:
      'Please make sure that you provide only correct information. Making false statements will result in cancellation of your application.\n* Fields are mandatory',
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        required: true,
        width: 'full',
        placeholder: 'Enter your full name',
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        placeholder: 'Enter your email',
        validation: {
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address',
          },
        },
      },
      {
        name: 'phoneNumber',
        label: 'Phone Number',
        type: 'tel',
        required: true,
        placeholder: 'Enter phone number',
        validation: {
          pattern: {
            value: /^[+]?[0-9\s\-()]{10,}$/,
            message: 'Please enter a valid phone number',
          },
        },
      },
      {
        name: 'relation',
        label: 'Relation',
        type: 'select',
        required: true,
        options: [
          { value: 'S', label: 'Son (S)' },
          { value: 'D', label: 'Daughter (D)' },
          { value: 'W', label: 'Wife (W)' },
          { value: 'O', label: 'Other (O)' },
        ],
      },
      {
        name: 'relationDetail',
        label: 'S/O,D/O,W/O',
        type: 'text',
        required: true,
        placeholder: 'Enter relation detail',
      },
      {
        name: 'country',
        label: 'Country',
        type: 'text',
        required: true,
        placeholder: 'Enter country',
      },
      {
        name: 'cnicNicop',
        label: 'CNIC/NICOP',
        type: 'text',
        required: true,
        placeholder: 'Enter CNIC/NICOP',
        validation: {
          pattern: {
            value: /^\d{5}-\d{4}-\d{3}-\d{1}$/,
            message: 'Please enter CNIC/NICOP in format: 0000-0000-000-0',
          },
        },
      },

      {
        name: 'mailingAddress',
        label: 'Mailing Address',
        type: 'textarea',
        required: true,
        width: 'full',
        rows: 3,
        placeholder: 'Enter your complete mailing address',
      },
      {
        name: 'province',
        label: 'Province',
        type: 'text',
        required: true,
        placeholder: 'Enter province',
      },
      {
        name: 'district',
        label: 'District',
        type: 'text',
        required: true,
        placeholder: 'Enter district',
      },
      {
        name: 'armyNo',
        label: 'Army No',
        type: 'text',
        required: true,
        placeholder: 'Enter army number',
      },
      {
        name: 'retirementDate',
        label: 'Retirement Date',
        type: 'date',
        required: true,
      },
    ],
  };

  const handleSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    alert('Application submitted successfully!');
  };

  const handleCancel = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to discard this application?')) {
      console.log('Application cancelled');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <DynamicForm
        {...formConfig}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitText="Save"
        cancelText="Discard"
        cancelButtonProps={{ type: 'danger' }}
      />
    </div>
  );
}
