import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { useGetQuery } from '../../services/apiService';
import { FaIdCard, FaMapMarkerAlt } from 'react-icons/fa';

const FormSection = ({ onSuccess }) => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [skipQuery, setSkipQuery] = useState(true);
  const [queryParams, setQueryParams] = useState(null);

  const { data, isLoading, error } = useGetQuery(queryParams, {
    skip: skipQuery,
  });

  const formik = useFormik({
    initialValues: {
      plot_no: '',
      cnic: '',
    },
    validationSchema: Yup.object({
      plot_no: Yup.string().required('Plot number is required.'),
      cnic: Yup.string().required('CNIC is required.'),
      // .matches(
      //   /^[0-9]{5}-[0-9]{7}-[0-9]$/,
      //   'Invalid CNIC format. Use XXXXX-XXXXXXX-X.'
      // ),
    }),
    onSubmit: async (values) => {
      if (!recaptchaValue) {
        toast.error('Please verify you are human!');
        return;
      }

      try {
        setQueryParams({
          path: '/legacy/challans',
          params: {
            plot_no: values.plot_no,
            cnic: values.cnic,
          },
        });
        setSkipQuery(false);

        if (data) {
          toast.success('Verification successful!');
        }
      } catch (err) {
        toast.error('Verification failed. Please try again.');
      }
    },
  });

  React.useEffect(() => {
    if (data) {
      onSuccess(data);
      setRecaptchaValue(null);
      setSkipQuery(true);
      toast.success('Successfully fetch data');
    }
    if (error) {
      toast.error(error?.data?.message || 'An error occurred');
      setSkipQuery(true);
    }
  }, [data, error, onSuccess]);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your plot number and CNIC to proceed with payment
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Plot Number
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaMapMarkerAlt className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="01/OL/GP0001"
                className={`block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                  formik.errors.plot_no && formik.touched.plot_no
                    ? 'ring-red-500'
                    : 'ring-gray-300'
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600`}
                {...formik.getFieldProps('plot_no')}
              />
            </div>
            <div className="mt-2 rounded-md bg-gray-50 p-3">
              <p className="text-xs text-gray-600">Reference Number Example:</p>
              <div className="mt-1 grid gap-1 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Old Format:</span>
                  <code className="rounded bg-gray-100 px-1 py-0.5">
                    01/OL/GP2914/B
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">New Format:</span>
                  <code className="rounded bg-gray-100 px-1 py-0.5">
                    01/OL2/CP2914/C
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Allocation:</span>
                  <code className="rounded bg-gray-100 px-1 py-0.5">
                    01/OL/000111/
                  </code>
                </div>
              </div>
            </div>
            {formik.touched.plot_no && formik.errors.plot_no && (
              <p className="mt-2 text-sm text-red-600">
                {formik.errors.plot_no}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              CNIC Number
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaIdCard className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="12345-1234567-1"
                className={`block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 shadow-sm ring-1 ring-inset ${
                  formik.errors.cnic && formik.touched.cnic
                    ? 'ring-red-500'
                    : 'ring-gray-300'
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600`}
                {...formik.getFieldProps('cnic')}
              />
            </div>
            <div className="mt-2 rounded-md bg-gray-50 p-3">
              <div className="mt-1 grid gap-1 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="font-medium">CNIC Format:</span>
                  <code className="rounded bg-gray-100 px-1 py-0.5">
                    12345-1234567-1
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">NICOP Format:</span>
                  <code className="rounded bg-gray-100 px-1 py-0.5">
                    12345-1234567-1
                  </code>
                </div>
              </div>
            </div>
            {formik.touched.cnic && formik.errors.cnic && (
              <p className="mt-2 text-sm text-red-600">{formik.errors.cnic}</p>
            )}
          </div>

          <div className="flex">
            <ReCAPTCHA
              sitekey="6LdZs9QqAAAAANFMxQg7E15qC2W4sxBDYHrlLHgN"
              onChange={handleRecaptchaChange}
            />
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    {error.message || 'An error occurred'}
                  </p>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="flex justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-blue-300"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                <span>Verifying...</span>
              </div>
            ) : (
              'Verify & Continue'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
