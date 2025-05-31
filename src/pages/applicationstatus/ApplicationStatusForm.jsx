import React from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import FormField from '../../ui/FormField';
import Button from '../../ui/Button'; // Import your Button component

export default function ApplicationStatusForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [applicationCaptcha, setApplicationCaptcha] = React.useState(null);
  const [cnicCaptcha, setCnicCaptcha] = React.useState(null);
  const [isSearchingApplication, setIsSearchingApplication] =
    React.useState(false);
  const [isSearchingCnic, setIsSearchingCnic] = React.useState(false);

  const onSubmitApplication = async (data) => {
    if (!applicationCaptcha) {
      alert('Please complete the CAPTCHA for Application Number search.');
      return;
    }

    setIsSearchingApplication(true);
    try {
      console.log('Searching by Application Number:', data);
      // Handle application number search API call here
      // await searchByApplicationNumber(data);
    } catch (error) {
      console.error('Error searching by application number:', error);
    } finally {
      setIsSearchingApplication(false);
    }
  };

  const onSubmitCnic = async (data) => {
    if (!cnicCaptcha) {
      alert('Please complete the CAPTCHA for CNIC search.');
      return;
    }

    setIsSearchingCnic(true);
    try {
      console.log('Searching by CNIC:', data);
      // Handle CNIC search API call here
      // await searchByCnic(data);
    } catch (error) {
      console.error('Error searching by CNIC:', error);
    } finally {
      setIsSearchingCnic(false);
    }
  };

  const handleApplicationSearch = () => {
    handleSubmit(onSubmitApplication)();
  };

  const handleCnicSearch = () => {
    handleSubmit(onSubmitCnic)();
  };

  const fields = [
    {
      name: 'applicationNumber',
      label: 'Application Number (Online Application Only)',
      type: 'text',
      placeholder: 'DM59DC',
      required: true,
      validationRules: { required: 'Application Number is required' },
    },
    {
      name: 'applicationCaptchaCode',
      label: 'Validation Code',
      type: 'text',
      placeholder: 'Enter the above code here',
      required: true,
      validationRules: { required: 'Validation code is required' },
    },
    {
      name: 'cnic',
      label: 'CNIC/NICOP (Only Online Application Record will be Shown)',
      type: 'text',
      placeholder: '12754YK',
      required: true,
      validationRules: { required: 'CNIC/NICOP is required' },
    },
    {
      name: 'cnicCaptchaCode',
      label: 'Validation Code',
      type: 'text',
      placeholder: 'Enter the above code here',
      required: true,
      validationRules: { required: 'Validation code is required' },
    },
  ];

  return (
    <div className="min-h-screen w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-none">
        <h2 className="mb-6 text-center text-2xl font-bold text-blue-800">
          Application Status
        </h2>
        <div></div>
        <div className="space-y-8">
          {/* Application Number Section */}
          <div className=" w-full rounded-md border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-blue-800">
              Search By Application No
            </h3>
            <div className=" mx-auto grid w-screen grid-cols-1 ">
              {/* Application Number */}
              <div className="flex w-full max-w-2xl items-center gap-4">
                <label className="w-60 text-sm font-medium text-gray-700">
                  {fields[0].label}
                </label>
                <FormField
                  field={fields[0]}
                  control={control}
                  register={register}
                  validationRules={fields[0].validationRules}
                  error={errors.applicationNumber}
                  setValue={setValue}
                />
              </div>

              {/* Application CAPTCHA */}
              <div className=" my-4 flex w-full max-w-2xl items-center gap-4">
                <label className="w-60 text-sm font-medium text-gray-700">
                  CAPTCHA
                </label>
                <div>
                  <ReCAPTCHA
                    sitekey="your-recaptcha-site-key-here"
                    onChange={(value) => setApplicationCaptcha(value)}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Can't read the image?{' '}
                    <a href="#" className="text-blue-800">
                      Click here to refresh
                    </a>
                  </p>
                </div>
              </div>

              {/* Application CAPTCHA Code */}
              <div className="flex w-full max-w-2xl items-center gap-4">
                <label className="w-60 text-sm font-medium text-gray-700">
                  {fields[1].label}
                </label>
                <FormField
                  field={fields[1]}
                  control={control}
                  register={register}
                  validationRules={fields[1].validationRules}
                  error={errors.applicationCaptchaCode}
                  setValue={setValue}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                onClick={handleApplicationSearch}
                loading={isSearchingApplication}
                disabled={isSearchingApplication}
                type="primary"
                size="medium"
                className="bg-blue-800 hover:bg-blue-700 focus:ring-blue-500"
              >
                Search [Application Number]
              </Button>
            </div>
          </div>

          {/* CNIC/NICOP Section */}
          <div className="w-full rounded-md border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-blue-800">
              Search By CNIC / NICOP
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {/* CNIC */}
              <div className="flex w-full max-w-2xl items-center gap-4">
                <label className="w-60 text-sm font-medium text-gray-700">
                  {fields[2].label}
                </label>
                <FormField
                  field={fields[2]}
                  control={control}
                  register={register}
                  validationRules={fields[2].validationRules}
                  error={errors.cnic}
                  setValue={setValue}
                />
              </div>

              {/* CNIC CAPTCHA */}
              <div className="flex w-full max-w-2xl items-center gap-4">
                <label className="w-60 text-sm font-medium text-gray-700">
                  CAPTCHA
                </label>
                <div>
                  <ReCAPTCHA
                    sitekey="your-recaptcha-site-key-here"
                    onChange={(value) => setCnicCaptcha(value)}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Can't read the image?{' '}
                    <a href="#" className="text-blue-800">
                      Click here to refresh
                    </a>
                  </p>
                </div>
              </div>

              {/* CNIC CAPTCHA Code */}
              <div className="flex w-full max-w-2xl items-center gap-4">
                <label className="w-60 text-sm font-medium text-gray-700">
                  {fields[3].label}
                </label>
                <FormField
                  field={fields[3]}
                  control={control}
                  register={register}
                  validationRules={fields[3].validationRules}
                  error={errors.cnicCaptchaCode}
                  setValue={setValue}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                onClick={handleCnicSearch}
                loading={isSearchingCnic}
                disabled={isSearchingCnic}
                type="primary"
                size="medium"
                className="bg-blue-800 hover:bg-blue-700 focus:ring-blue-500"
              >
                Search [CNIC]
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
