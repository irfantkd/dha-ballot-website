import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ConfirmationModal from './ConfirmationModal';
import { FaArrowLeft } from 'react-icons/fa';
import { useGetQuery, usePostMutation } from '../../services/apiService';
import ReCAPTCHA from 'react-google-recaptcha';

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(
      /^92\d{10}$/,
      'Phone number must start with 92 followed by 10 digits'
    )
    .required('Phone number is required'),
  depositorName: Yup.string().required('Depositor name is required'),
  amount: Yup.number()
    .required('Amount is required')
    .positive('Amount must be positive'),
  purposeOfDeposit: Yup.string().required('Purpose of deposit is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  country: Yup.string().required('Country is required'),
  province: Yup.string().required('Province is required'),
  district: Yup.string().required('District is required'),
  remarks: Yup.string(), // Optional field, no validation required
  address: Yup.string().required('Address is required'),
  paymentOption: Yup.string().required('Payment option is required'),
  termsAccepted: Yup.boolean()
    .required('You must accept the terms and conditions')
    .oneOf([true], 'You must accept the terms and conditions'),
  recaptchaValue: Yup.string().required('Please complete the captcha'),
});

const PaymentForm = ({ verificationData, onProceedToConfirmation, onBack }) => {
  // const [captchaCode, setCaptchaCode] = useState('cmyrb5');

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [formValues, setFormValues] = useState(null);
  // Add these at the top with other API calls
  const { data: countries } = useGetQuery({
    path: '/legacy/countries',
  });
  const { data: provinces, isLoading: isLoadingProvinces } = useGetQuery({
    path: '/legacy/provinces',
  });

  const { data: districts, isLoading: isLoadingDistricts } = useGetQuery({
    path: '/legacy/districts',
  });

  // const handleRecaptchaChange = (value) => {
  //   setRecaptchaValue(value);
  // };

  return (
    <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-4 shadow-lg sm:p-6 md:p-8">
      {/* Header Section */}
      <div className="mb-6 text-center sm:mb-8">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Online Payment Form
        </h2>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          Complete the form below to proceed with your payment
        </p>
      </div>

      <Formik
        initialValues={{
          plotReferenceNo: verificationData?.chalan[0]?.PLOTNO,
          name: verificationData?.chalan[0]?.MEMBERNAME,
          cnic: verificationData?.chalan[0]?.NEWIDCARD,
          membershipNo: verificationData?.chalan[0]?.MEMBERSHIPNO,
          phoneNumber: '',
          depositorName: '',
          amount: '',
          purposeOfDeposit: '',
          email: '',
          country: '',
          province: '',
          district: '',
          remarks: '',
          address: '',
          paymentOption: '',
          termsAccepted: false,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setShowConfirmModal(true);
          setFormValues(values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className="space-y-6 sm:space-y-8">
            {/* Read-only Information Section */}
            <div className="rounded-xl bg-gray-50 p-4 sm:p-6">
              <button
                onClick={onBack}
                className="mb-4 flex items-center gap-2 rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 sm:mb-5"
              >
                <FaArrowLeft className="text-base sm:text-lg" />
                <span className="text-sm sm:text-base">Back</span>
              </button>
              <h3 className="mb-3 text-base font-semibold text-gray-700 sm:mb-4 sm:text-lg">
                Plot Information
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                {/* Plot Reference */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    Plot Reference No
                  </label>
                  <Field
                    name="plotReferenceNo"
                    className="mt-1 block w-full rounded-lg border-0 bg-white p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:p-2.5 sm:text-base"
                    readOnly
                  />
                </div>

                {/* CNIC */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    CNIC
                  </label>
                  <Field
                    name="cnic"
                    className="mt-1 block w-full rounded-lg border-0 bg-white p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:p-2.5 sm:text-base"
                    readOnly
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    Name
                  </label>
                  <Field
                    name="name"
                    className="mt-1 block w-full rounded-lg border-0 bg-white p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:p-2.5 sm:text-base"
                    readOnly
                  />
                </div>

                {/* Membership No */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    Membership No
                  </label>
                  <Field
                    name="membershipNo"
                    className="mt-1 block w-full rounded-lg border-0 bg-white p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:p-2.5 sm:text-base"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Payment Details Section */}
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 sm:p-6">
              <h3 className="mb-3 text-base font-semibold text-gray-700 sm:mb-4 sm:text-lg">
                Payment Details
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    Phone Number
                  </label>
                  <Field
                    name="phoneNumber"
                    className="mt-1 block w-full rounded-lg border-0 p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:p-2.5 sm:text-base"
                    placeholder="923xxxxxxxxx"
                  />
                  <p className="mt-1 text-xs text-amber-600">
                    (923xxxxxxxxx SMS might not receive on converted/ported
                    numbers)
                  </p>
                  {errors.phoneNumber && touched.phoneNumber && (
                    <div className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.phoneNumber}
                    </div>
                  )}
                </div>

                {/* Depositor Name */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    Depositor Name
                  </label>
                  <Field
                    name="depositorName"
                    className="mt-1 block w-full rounded-lg border-0 p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:p-2.5 sm:text-base"
                  />
                  {errors.depositorName && touched.depositorName && (
                    <div className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.depositorName}
                    </div>
                  )}
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    Amount
                  </label>
                  <Field
                    name="amount"
                    type="number"
                    className="mt-1 block w-full rounded-lg border-0 p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:p-2.5 sm:text-base"
                  />
                  {errors.amount && touched.amount && (
                    <div className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.amount}
                    </div>
                  )}
                  <div className="mt-2 rounded-md bg-amber-50 p-2 text-xs text-amber-700 sm:p-3">
                    <p className="font-medium">Note:</p>
                    <ul className="mt-1 list-disc space-y-1 pl-4">
                      <li>
                        Transfer Service Charges from Credit Card/debit will be
                        deducted by Bank
                      </li>
                      <li>
                        Include Transfer Service Charges in principal amount
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Purpose of Deposit */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    Purpose of Deposit
                  </label>
                  <Field
                    as="select"
                    name="purposeOfDeposit"
                    className="mt-1 block w-full rounded-lg border-0 p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:p-2.5 sm:text-base"
                  >
                    <option value="">Select Purpose</option>
                    <option value="down_payment">Down Payment</option>
                    <option value="installment">Installment</option>
                    <option value="surcharge">Surcharge</option>
                    <option value="dev_charges">Development Charges</option>
                    <option value="maintenance_charges">
                      Maintenance Charges
                    </option>
                  </Field>
                  {errors.purposeOfDeposit && touched.purposeOfDeposit && (
                    <div className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.purposeOfDeposit}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="mt-1 block w-full rounded-lg border-0 p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:p-2.5 sm:text-base"
                  />
                  {errors.email && touched.email && (
                    <div className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Country Dropdown */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    Country
                  </label>
                  <Field
                    as="select"
                    name="country"
                    className="mt-1 block w-full rounded-lg border-0 p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:p-2.5 sm:text-base"
                    onChange={(e) => {
                      setFieldValue('country', e.target.value);
                      // Reset dependent fields
                      setFieldValue('province', '');
                      setFieldValue('district', '');
                    }}
                  >
                    <option value="">Select Country</option>
                    {countries?.map((country) => (
                      <option
                        key={country.country_short} // Make sure to use a unique identifier
                        value={country.country_short} // Use ID instead of name for value
                      >
                        {country.country_name}
                      </option>
                    ))}
                  </Field>
                  {errors.country && touched.country && (
                    <div className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.country}
                    </div>
                  )}
                </div>

                {/* Province Dropdown */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    Province
                  </label>
                  <Field
                    as="select"
                    name="province"
                    className="mt-1 block w-full rounded-lg border-0 p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:p-2.5 sm:text-base"
                    disabled={!values.country || isLoadingProvinces}
                    onChange={(e) => {
                      setFieldValue('province', e.target.value);
                      // Clear district when province changes
                      setFieldValue('district', '');
                    }}
                  >
                    <option value="">
                      {isLoadingProvinces
                        ? 'Loading provinces...'
                        : 'Select Province'}
                    </option>
                    {provinces?.map((province) => (
                      <option
                        key={province.province_code}
                        value={province.province_code}
                      >
                        {province.province_name || province._name}
                      </option>
                    ))}
                  </Field>
                  {errors.province && touched.province && (
                    <div className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.province}
                    </div>
                  )}
                </div>

                {/* District/City Dropdown */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    District
                  </label>
                  <Field
                    as="select"
                    name="district"
                    className="mt-1 block w-full rounded-lg border-0 p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:p-2.5 sm:text-base"
                    disabled={!values.province || isLoadingDistricts}
                  >
                    <option value="">
                      {isLoadingDistricts
                        ? 'Loading districts...'
                        : 'Select District'}
                    </option>
                    {districts
                      ?.filter(
                        (district) => district.province_code === values.province
                      )
                      ?.map((district) => (
                        <option
                          key={district.district_name}
                          value={district.district_name}
                        >
                          {district.district_name}
                        </option>
                      ))}
                  </Field>
                  {errors.district && touched.district && (
                    <div className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.district}
                    </div>
                  )}
                </div>

                {/* Remarks and Address Row */}
                <div className="col-span-1 space-y-4 md:col-span-2 md:grid md:grid-cols-1 md:gap-6 md:space-y-0 lg:grid-cols-2">
                  {/* Remarks */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                      Remarks (if any)
                    </label>
                    <Field
                      as="textarea"
                      name="remarks"
                      rows={4}
                      className="mt-1 block w-full rounded-lg border-0 p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:p-2.5 sm:text-base"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                      Address
                    </label>
                    <Field
                      as="textarea"
                      name="address"
                      rows={4}
                      className="mt-1 block w-full rounded-lg border-0 p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:p-2.5 sm:text-base"
                    />
                    {errors.address && touched.address && (
                      <div className="mt-1 text-xs text-red-600 sm:text-sm">
                        {errors.address}
                      </div>
                    )}
                  </div>
                </div>

                {/* Payment Option */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-xs font-medium text-gray-600 sm:text-sm">
                    Payment Option
                  </label>
                  <Field
                    as="select"
                    name="paymentOption"
                    className="mt-1 block w-full rounded-lg border-0 p-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:p-2.5 sm:text-base"
                  >
                    <option value="">Select Payment Option</option>
                    <option value="card_payment">Pay Via Credit Card</option>
                  </Field>
                  {errors.paymentOption && touched.paymentOption && (
                    <div className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.paymentOption}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Credit Card Section */}
            {values.paymentOption === 'card_payment' && (
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5 sm:p-6">
                <div className="mb-4 flex flex-col items-center gap-3 sm:mb-6 sm:flex-row sm:gap-4">
                  <img
                    src="https://crystalpng.com/wp-content/uploads/2024/10/HBL-logo.png"
                    alt="HBL Pay"
                    className="h-10 w-auto sm:h-12"
                  />
                  <div className="hidden h-px w-full bg-gray-200 sm:block sm:h-8 sm:w-px"></div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Secure Payment Gateway
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {/* Captcha */}
                  <div className="flex justify-center sm:justify-start">
                    <div className="scale-75 transform sm:transform-none">
                      <ReCAPTCHA
                        sitekey="6LdZs9QqAAAAANFMxQg7E15qC2W4sxBDYHrlLHgN"
                        onChange={(value) =>
                          setFieldValue('recaptchaValue', value)
                        }
                      />
                    </div>
                    {errors.recaptchaValue && touched.recaptchaValue && (
                      <div className="mt-1 text-xs text-red-600 sm:text-sm">
                        {errors.recaptchaValue}
                      </div>
                    )}
                  </div>

                  {/* Terms */}
                  <div className="">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Field
                        type="checkbox"
                        name="termsAccepted"
                        className="mt-1 h-3 w-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:h-4 sm:w-4"
                      />

                      <label className="text-xs text-gray-600 sm:text-sm">
                        I agree to the Credit Card Payment Terms and Conditions
                      </label>
                    </div>
                    {errors.termsAccepted && touched.termsAccepted && (
                      <div className="mt-1 text-xs text-red-600 sm:text-sm">
                        {errors.termsAccepted}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:px-4 sm:py-3 sm:text-sm"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={() => {
          if (formValues && typeof onProceedToConfirmation === 'function') {
            onProceedToConfirmation(formValues);
          }
          setShowConfirmModal(false);
        }}
      />
    </div>
  );
};

export default PaymentForm;
