import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import FormField from '../../ui/FormField';
import Button from '../../ui/Button';

export default function ApplicationStatusForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const applicationRecaptchaRef = useRef(null);
  const cnicRecaptchaRef = useRef(null);

  const [applicationCaptchaError, setApplicationCaptchaError] =
    React.useState(false);
  const [applicationCaptchaVerified, setApplicationCaptchaVerified] =
    React.useState(false);
  const [cnicCaptchaError, setCnicCaptchaError] = React.useState(false);
  const [cnicCaptchaVerified, setCnicCaptchaVerified] = React.useState(false);
  const [isSearchingApplication, setIsSearchingApplication] =
    React.useState(false);
  const [isSearchingCnic, setIsSearchingCnic] = React.useState(false);

  // Application CAPTCHA handlers
  const handleApplicationCaptchaChange = (value) => {
    if (value) {
      setApplicationCaptchaError(false);
      setApplicationCaptchaVerified(true);
    } else {
      setApplicationCaptchaVerified(false);
    }
  };

  // CNIC CAPTCHA handlers
  const handleCnicCaptchaChange = (value) => {
    if (value) {
      setCnicCaptchaError(false);
      setCnicCaptchaVerified(true);
    } else {
      setCnicCaptchaVerified(false);
    }
  };

  const onSubmitApplication = async (data) => {
    const token = applicationRecaptchaRef.current?.getValue();

    if (!token) {
      setApplicationCaptchaError(true);
      return;
    }

    setApplicationCaptchaError(false);
    setIsSearchingApplication(true);
    try {
      console.log('Searching by Application Number:', data);
      // Your search logic here
    } catch (error) {
      console.error('Error searching by application number:', error);
    } finally {
      setIsSearchingApplication(false);
    }
  };

  const onSubmitCnic = async (data) => {
    const token = cnicRecaptchaRef.current?.getValue();

    if (!token) {
      setCnicCaptchaError(true);
      return;
    }

    setCnicCaptchaError(false);
    setIsSearchingCnic(true);
    try {
      console.log('Searching by CNIC:', data);
      // Your search logic here
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
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-blue-800">
          Application Status
        </h2>

        <div className="space-y-8">
          {/* Application Number Section */}
          <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-blue-800">
              Search By Application No
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <label className="w-full text-sm font-medium text-gray-700 sm:w-60">
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

              <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
                <label className="w-full text-sm font-medium text-gray-700 sm:w-60">
                  CAPTCHA
                </label>
                <div className="w-full sm:w-auto">
                  <div className="origin-top-left scale-[0.85] sm:origin-center sm:scale-100">
                    <ReCAPTCHA
                      sitekey="your-site-key"
                      ref={applicationRecaptchaRef}
                      onChange={handleApplicationCaptchaChange}
                    />
                  </div>
                  {applicationCaptchaError && (
                    <p className="mt-2 text-sm text-red-500">
                      Please verify that you are not a robot.
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Can't read the image?{' '}
                    <a href="/" className="text-blue-800">
                      Click here to refresh
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <label className="w-full text-sm font-medium text-gray-700 sm:w-60">
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
                disabled={isSearchingApplication || !applicationCaptchaVerified}
                type="primary"
                size="medium"
                className="bg-blue-800 hover:bg-blue-700 focus:ring-blue-500"
              >
                Search [Application Number]
              </Button>
            </div>
          </div>

          {/* CNIC Section */}
          <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-blue-800">
              Search By CNIC / NICOP
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <label className="w-full text-sm font-medium text-gray-700 sm:w-60">
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

              <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
                <label className="w-full text-sm font-medium text-gray-700 sm:w-60">
                  CAPTCHA
                </label>
                <div className="w-full sm:w-auto">
                  <div className="origin-top-left scale-[0.85] sm:origin-center sm:scale-100">
                    <ReCAPTCHA
                      sitekey="your-site-key"
                      ref={cnicRecaptchaRef}
                      onChange={handleCnicCaptchaChange}
                    />
                  </div>
                  {cnicCaptchaError && (
                    <p className="mt-2 text-sm text-red-500">
                      Please verify that you are not a robot.
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Can't read the image?{' '}
                    <a href="/" className="text-blue-800">
                      Click here to refresh
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <label className="w-full text-sm font-medium text-gray-700 sm:w-60">
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
                disabled={isSearchingCnic || !cnicCaptchaVerified}
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
