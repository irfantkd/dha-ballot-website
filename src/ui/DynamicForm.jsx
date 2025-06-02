// import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { useRef } from 'react';
// import { useForm } from 'react-hook-form';
// import Button from './Button';
// import FormField from './FormField';
// import ConfirmationDialog from './ConfirmationDialog';

// export default function DynamicForm({
//   title,
//   subtitle,
//   fields = [],
//   onSubmit,
//   currentStep = 1,
//   onCancel,
//   submitText = 'Save',
//   cancelText = 'Discard',
//   isCancel = true,
//   isSubmit = true,
//   submitButtonProps = {},
//   cancelButtonProps = {},
//   initialData = {},
//   className = '',
//   loading = false,
//   confirmSubmit = {
//     title: 'Save Changes?',
//     message: 'Are you sure you want to save these changes?',
//   },
//   confirmCancel = {
//     title: 'Discard Changes?',
//     message:
//       'Are you sure you want to discard your changes? This action cannot be undone.',
//   },
//   showConfirmation = true,
// }) {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [confirmDialog, setConfirmDialog] = useState({
//     isOpen: false,
//     type: null,
//     data: null,
//   });

//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//     watch,
//     setValue,
//     reset,
//   } = useForm({
//     defaultValues: initialData,
//     mode: 'onChange',
//   });
//   const recaptchaRef = useRef(null);
//   const [captchaError, setCaptchaError] = useState(false);
//   const captchaSubmit = async () => {
//     const token = recaptchaRef.current?.getValue();

//     if (!token) {
//       setCaptchaError(true);
//       return;
//     }

//     setCaptchaError(false);
//     // Proceed with your form submission
//   };
//   const getValidationRules = (field) => {
//     const rules = {};
//     if (field.required) {
//       rules.required = `${field.label} is required`;
//     }
//     if (field.validation) {
//       Object.assign(rules, field.validation);
//     }
//     return rules;
//   };

//   const onSubmitHandler = async (data) => {
//     if (showConfirmation) {
//       setConfirmDialog({
//         isOpen: true,
//         type: 'submit',
//         data,
//       });
//     } else {
//       await executeSubmit(data);
//     }
//   };

//   const executeSubmit = async (data) => {
//     setIsSubmitting(true);
//     try {
//       await onSubmit(data);
//     } catch (error) {
//       console.error('Form submission error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     if (showConfirmation) {
//       setConfirmDialog({
//         isOpen: true,
//         type: 'cancel',
//         data: null,
//       });
//     } else {
//       executeCancel();
//     }
//   };

//   const executeCancel = () => {
//     onCancel && onCancel();
//     reset();
//   };

//   const handleConfirmation = async () => {
//     setConfirmDialog({ isOpen: false, type: null, data: null });
//     if (confirmDialog.type === 'submit') {
//       await executeSubmit(confirmDialog.data);
//     } else if (confirmDialog.type === 'cancel') {
//       executeCancel();
//     }
//   };

//   const handleDialogClose = () => {
//     setConfirmDialog({ isOpen: false, type: null, data: null });
//   };

//   const getDialogContent = () => {
//     switch (confirmDialog.type) {
//       case 'submit':
//         return confirmSubmit;
//       case 'cancel':
//         return confirmCancel;
//       default:
//         return { title: 'Are you sure?', message: null };
//     }
//   };

//   const dialogContent = getDialogContent();

//   return (
//     <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
//       <div className={`rounded-lg border-2 bg-white p-2 sm:p-6   ${className}`}>
//         <div className="mb-6 text-center">
//           <h1 className="mb-2 text-2xl font-bold text-gray-900">{title}</h1>
//           {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
//         </div>

//         <form onSubmit={handleSubmit(onSubmitHandler)}>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             {fields
//               .filter(
//                 (field) => field && typeof field === 'object' && field.name
//               )
//               .map((field) => (
//                 <FormField
//                   key={field.name}
//                   field={field}
//                   register={register}
//                   control={control}
//                   validationRules={getValidationRules(field)}
//                   error={errors[field.name]}
//                   watch={watch}
//                   setValue={setValue}
//                 />
//               ))}
//             {currentStep === 5 &&
//               watch('paymentMethod')?.value === 'BankChallan' && (
//                 <div className="col-span-2 grid grid-cols-1 items-start gap-6 md:grid-cols-2">
//                   {/* Bank Dropdown */}
//                   <div>
//                     <label className="mb-1 block text-sm font-medium text-gray-700">
//                       Bank
//                     </label>
//                     <div className="relative w-full max-w-[296px]">
//                       <select className="h-[40px] w-full appearance-none rounded-md border border-gray-300 bg-white px-4 pr-10 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400">
//                         <option value="">Select</option>
//                         <option value="HBL">HBL</option>
//                         <option value="UBL">UBL</option>
//                       </select>
//                       <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
//                         <span className="mb-1 me-2 text-gray-400">|</span>
//                         <svg
//                           className="h-4 w-4"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>

//                   {/* reCAPTCHA + Error + Button */}
//                   <div className="flex flex-col items-start gap-2">
//                     <ReCAPTCHA
//                       sitekey="your-site-key"
//                       onSubmit={captchaSubmit}
//                       ref={recaptchaRef}
//                       onChange={() => setCaptchaError(false)}
//                     />
//                     {captchaError && (
//                       <p className="mt-1 text-sm text-red-500">
//                         Please verify that you are not a robot.
//                       </p>
//                     )}
//                     <button
//                       type="button"
//                       onClick={handleSubmit}
//                       className="mt-2 rounded bg-gray-800 px-5 py-2 text-white transition hover:bg-gray-900"
//                     >
//                       Submit Application
//                     </button>
//                   </div>
//                 </div>
//               )}
//             {currentStep === 5 &&
//               watch('paymentMethod')?.value === 'CreditCard' && (
//                 <div className="col-span-2 mt-4 space-y-3">
//                   <div className="flex items-center gap-3">
//                     <img src="/images/hbl-logo.png" alt="HBL" className="h-8" />
//                     <span className="text-sm">Secure Payment Gateway</span>
//                   </div>
//                   <div>
//                     {/* Google reCAPTCHA placeholder */}
//                     <div
//                       className="g-recaptcha"
//                       data-sitekey="your-site-key"
//                     ></div>
//                   </div>
//                   <div>
//                     <label className="flex items-center gap-2 text-sm">
//                       <input type="checkbox" required />I agree to the Credit
//                       Card Payment Terms and Condition
//                     </label>
//                   </div>
//                 </div>
//               )}
//           </div>

//           <div className="mt-6 flex flex-col justify-end gap-4 sm:flex-row">
//             {isCancel ? (
//               <Button
//                 type="button"
//                 variant="secondary"
//                 onClick={handleCancel}
//                 disabled={isSubmitting}
//                 {...cancelButtonProps}
//                 className="bg-[#6C2C2C] text-white hover:bg-[#5a2424] focus:ring-[#6C2C2C] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 {cancelText}
//               </Button>
//             ) : null}
//             {/* <Button
//               type="button"
//               variant="secondary"
//               onClick={handleCancel}
//               disabled={isSubmitting}
//               {...cancelButtonProps}
//               className="bg-[#6C2C2C] text-white hover:bg-[#5a2424] focus:ring-[#6C2C2C] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             >
//               {cancelText}
//             </Button> */}
//             {isSubmit ? (
//               <Button
//                 type="submit"
//                 variant="primary"
//                 loading={isSubmitting || loading}
//                 disabled={isSubmitting || loading}
//                 {...submitButtonProps}
//                 className="bg-[#333333] text-white hover:bg-[#5a2424] focus:ring-[#333333] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 {submitText}
//               </Button>
//             ) : null}
//             {/* <Button
//               type="submit"
//               variant="primary"
//               loading={isSubmitting || loading}
//               disabled={isSubmitting || loading}
//               {...submitButtonProps}
//               className="bg-[#333333] text-white hover:bg-[#5a2424] focus:ring-[#333333] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             >
//               {submitText}
//             </Button> */}
//           </div>
//         </form>
//       </div>

//       {showConfirmation && (
//         <ConfirmationDialog
//           isOpen={confirmDialog.isOpen}
//           onClose={handleDialogClose}
//           onConfirm={handleConfirmation}
//           title={dialogContent.title}
//           message={dialogContent.message}
//         />
//       )}
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { useRef } from 'react';
// import { useForm } from 'react-hook-form';
// import Button from './Button';
// import FormField from './FormField';
// import ConfirmationDialog from './ConfirmationDialog';

// export default function DynamicForm({
//   title,
//   subtitle,
//   fields = [],
//   onSubmit,
//   currentStep = 1,
//   onCancel,
//   submitText = 'Save',
//   cancelText = 'Discard',
//   isCancel = true,
//   isSubmit = true,
//   submitButtonProps = {},
//   cancelButtonProps = {},
//   initialData = {},
//   className = '',
//   loading = false,
//   confirmSubmit = {
//     title: 'Save Changes?',
//     message: 'Are you sure you want to save these changes?',
//   },
//   confirmCancel = {
//     title: 'Discard Changes?',
//     message:
//       'Are you sure you want to discard your changes? This action cannot be undone.',
//   },
//   showConfirmation = true,
// }) {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [confirmDialog, setConfirmDialog] = useState({
//     isOpen: false,
//     type: null,
//     data: null,
//   });
//   const [selectedBank, setSelectedBank] = useState('');
//   const [creditCardAgreed, setCreditCardAgreed] = useState(false);

//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//     watch,
//     setValue,
//     reset,
//   } = useForm({
//     defaultValues: initialData,
//     mode: 'onChange',
//   });

//   const recaptchaRef = useRef(null);
//   const [captchaError, setCaptchaError] = useState(false);
//   const [captchaVerified, setCaptchaVerified] = useState(false);

//   const captchaSubmit = async () => {
//     const token = recaptchaRef.current?.getValue();

//     if (!token) {
//       setCaptchaError(true);
//       return;
//     }

//     setCaptchaError(false);
//     setCaptchaVerified(true);
//     // Proceed with your form submission
//   };

//   const handleCaptchaChange = (value) => {
//     if (value) {
//       setCaptchaError(false);
//       setCaptchaVerified(true);
//     } else {
//       setCaptchaVerified(false);
//     }
//   };

//   const getValidationRules = (field) => {
//     const rules = {};
//     if (field.required) {
//       rules.required = `${field.label} is required`;
//     }
//     if (field.validation) {
//       Object.assign(rules, field.validation);
//     }
//     return rules;
//   };

//   const onSubmitHandler = async (data) => {
//     if (showConfirmation) {
//       setConfirmDialog({
//         isOpen: true,
//         type: 'submit',
//         data,
//       });
//     } else {
//       await executeSubmit(data);
//     }
//   };

//   const executeSubmit = async (data) => {
//     setIsSubmitting(true);
//     try {
//       await onSubmit(data);
//     } catch (error) {
//       console.error('Form submission error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     if (showConfirmation) {
//       setConfirmDialog({
//         isOpen: true,
//         type: 'cancel',
//         data: null,
//       });
//     } else {
//       executeCancel();
//     }
//   };

//   const executeCancel = () => {
//     onCancel && onCancel();
//     reset();
//   };

//   const handleConfirmation = async () => {
//     setConfirmDialog({ isOpen: false, type: null, data: null });
//     if (confirmDialog.type === 'submit') {
//       await executeSubmit(confirmDialog.data);
//     } else if (confirmDialog.type === 'cancel') {
//       executeCancel();
//     }
//   };

//   const handleDialogClose = () => {
//     setConfirmDialog({ isOpen: false, type: null, data: null });
//   };

//   const getDialogContent = () => {
//     switch (confirmDialog.type) {
//       case 'submit':
//         return confirmSubmit;
//       case 'cancel':
//         return confirmCancel;
//       default:
//         return { title: 'Are you sure?', message: null };
//     }
//   };

//   const handleBankChallanSubmit = async () => {
//     const token = recaptchaRef.current?.getValue();

//     if (!token) {
//       setCaptchaError(true);
//       return;
//     }

//     if (!selectedBank) {
//       alert('Please select a bank');
//       return;
//     }

//     setCaptchaError(false);
//     // Handle bank challan submission
//     const formData = watch();
//     await executeSubmit({
//       ...formData,
//       selectedBank,
//       paymentMethod: 'BankChallan',
//     });
//   };

//   const handleCreditCardSubmit = async () => {
//     const token = recaptchaRef.current?.getValue();

//     if (!token) {
//       setCaptchaError(true);
//       return;
//     }

//     if (!creditCardAgreed) {
//       alert('Please agree to the Credit Card Payment Terms and Conditions');
//       return;
//     }

//     setCaptchaError(false);
//     // Handle credit card submission
//     const formData = watch();
//     await executeSubmit({
//       ...formData,
//       paymentMethod: 'CreditCard',
//       creditCardAgreed,
//     });
//   };

//   const dialogContent = getDialogContent();
//   const paymentMethod = watch('paymentMethod')?.value;

//   return (
//     <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
//       <div className={`rounded-lg border-2 bg-white p-2 sm:p-6 ${className}`}>
//         <div className="mb-6 text-center">
//           <h1 className="mb-2 text-2xl font-bold text-gray-900">{title}</h1>
//           {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
//         </div>

//         <form onSubmit={handleSubmit(onSubmitHandler)}>
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             {fields
//               .filter(
//                 (field) => field && typeof field === 'object' && field.name
//               )
//               .map((field) => (
//                 <FormField
//                   key={field.name}
//                   field={field}
//                   register={register}
//                   control={control}
//                   validationRules={getValidationRules(field)}
//                   error={errors[field.name]}
//                   watch={watch}
//                   setValue={setValue}
//                 />
//               ))}
//           </div>

//           {/* Bank Challan Payment Method */}

//           {/* Bank Challan Payment Method */}
//           {currentStep === 5 && paymentMethod === 'BankChallan' && (
//             <div className="mt-6 flex justify-between space-y-4 ">
//               <div className="flex flex-col items-start gap-6 sm:flex-row">
//                 {/* Left Side - Bank Selection and reCAPTCHA */}
//                 <div className="flex flex-col gap-4">
//                   {/* Bank Selection */}
//                   <div>
//                     <label className="mb-2 block text-sm font-medium text-gray-700">
//                       Bank
//                     </label>
//                     <div className="relative w-full max-w-[296px]">
//                       <select
//                         value={selectedBank}
//                         onChange={(e) => setSelectedBank(e.target.value)}
//                         className="h-[40px] w-full appearance-none rounded-md border border-gray-300 bg-white px-4 pr-10 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400"
//                       >
//                         <option value="">Select</option>
//                         <option value="HBL">HBL</option>
//                         <option value="UBL">UBL</option>
//                       </select>
//                       <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
//                         <span className="mb-1 me-2 text-gray-400">|</span>
//                         <svg
//                           className="h-4 w-4"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>

//                   {/* reCAPTCHA below Bank */}
//                   <div>
//                     <ReCAPTCHA
//                       sitekey="your-site-key"
//                       ref={recaptchaRef}
//                       onChange={handleCaptchaChange}
//                     />
//                     {captchaError && (
//                       <p className="mt-2 text-sm text-red-500">
//                         Please verify that you are not a robot.
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Right Side - Submit Button */}
//               </div>
//               <div className="flex items-end">
//                 <button
//                   type="button"
//                   onClick={handleBankChallanSubmit}
//                   disabled={!captchaVerified || !selectedBank}
//                   className="rounded bg-gray-800 px-6 py-2 text-white "
//                 >
//                   Submit Application
//                 </button>
//               </div>
//             </div>
//           )}
//           {/* Credit Card Payment Method */}
//           {currentStep === 5 && paymentMethod === 'CreditCard' && (
//             <div className="mt-6 space-y-4">
//               {/* HBL Logo and Secure Payment Gateway */}
//               <div className="flex items-center gap-3">
//                 <div className=" flex h-8 w-12 items-center justify-center rounded">
//                   <h1 className="font-bold text-green-800">HBL</h1>
//                   <span className="mb-1 ms-3 text-gray-400">|</span>
//                 </div>
//                 <span className="text-sm text-gray-600">
//                   Secure Payment Gateway
//                 </span>
//               </div>

//               {/* reCAPTCHA */}
//               <div>
//                 <ReCAPTCHA
//                   sitekey="your-site-key"
//                   ref={recaptchaRef}
//                   onChange={handleCaptchaChange}
//                 />
//                 {captchaError && (
//                   <p className="mt-2 text-sm text-red-500">
//                     Please verify that you are not a robot.
//                   </p>
//                 )}
//               </div>

//               {/* Terms and Conditions Checkbox */}
//               <div>
//                 <label className="flex items-start gap-2 text-sm text-gray-700">
//                   <input
//                     type="checkbox"
//                     checked={creditCardAgreed}
//                     onChange={(e) => setCreditCardAgreed(e.target.checked)}
//                     className="mt-0.5 flex-shrink-0"
//                   />
//                   <span>
//                     I agree to the Credit Card Payment Terms and Condition
//                   </span>
//                 </label>
//               </div>

//               {/* Pay Button */}
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleCreditCardSubmit}
//                   disabled={!captchaVerified || !creditCardAgreed}
//                   className="rounded bg-gray-900 px-6 py-2 text-white "
//                 >
//                   Pay
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Default Form Buttons - Only show when not in payment step */}
//           {!(
//             currentStep === 5 &&
//             (paymentMethod === 'BankChallan' || paymentMethod === 'CreditCard')
//           ) && (
//             <div className="mt-6 flex flex-col justify-end gap-4 sm:flex-row">
//               {isCancel && (
//                 <Button
//                   type="button"
//                   variant="secondary"
//                   onClick={handleCancel}
//                   disabled={isSubmitting}
//                   {...cancelButtonProps}
//                   className="bg-[#6C2C2C] text-white hover:bg-[#5a2424] focus:ring-[#6C2C2C] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                 >
//                   {cancelText}
//                 </Button>
//               )}
//               {isSubmit && (
//                 <Button
//                   type="submit"
//                   variant="primary"
//                   loading={isSubmitting || loading}
//                   disabled={isSubmitting || loading}
//                   {...submitButtonProps}
//                   className="bg-[#333333] text-white hover:bg-[#5a2424] focus:ring-[#333333] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                 >
//                   {submitText}
//                 </Button>
//               )}
//             </div>
//           )}
//         </form>
//       </div>

//       {showConfirmation && (
//         <ConfirmationDialog
//           isOpen={confirmDialog.isOpen}
//           onClose={handleDialogClose}
//           onConfirm={handleConfirmation}
//           title={dialogContent.title}
//           message={dialogContent.message}
//         />
//       )}
//     </div>
//   );
// }

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import FormField from './FormField';
import ConfirmationDialog from './ConfirmationDialog';
import { usePostMutation } from '../services/apiService'; // Add this import

export default function DynamicForm({
  title,
  subtitle,
  fields = [],
  onSubmit,
  currentStep = 1,
  onCancel,
  submitText = 'Save',
  cancelText = 'Discard',
  isCancel = true,
  isSubmit = true,
  submitButtonProps = {},
  cancelButtonProps = {},
  initialData = {},
  className = '',
  loading = false,
  confirmSubmit = {
    title: 'Save Changes?',
    message: 'Are you sure you want to save these changes?',
  },
  confirmCancel = {
    title: 'Discard Changes?',
    message:
      'Are you sure you want to discard your changes? This action cannot be undone.',
  },
  showConfirmation = true,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    type: null,
    data: null,
  });
  const [selectedBank, setSelectedBank] = useState('');
  const [creditCardAgreed, setCreditCardAgreed] = useState(false);
  const [error, setError] = useState(null); // Add error state
  const [postPaymentRequest, { isLoading: isPaymentLoading }] =
    usePostMutation(); // Add payment mutation

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: initialData,
    mode: 'onChange',
  });

  const recaptchaRef = useRef(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const captchaSubmit = async () => {
    const token = recaptchaRef.current?.getValue();

    // if (!token) {
    //   setCaptchaError(true);
    //   return;
    // }

    setCaptchaError(false);
    setCaptchaVerified(true);
    // Proceed with your form submission
  };

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaError(false);
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const getValidationRules = (field) => {
    const rules = {};
    if (field.required) {
      rules.required = `${field.label} is required`;
    }
    if (field.validation) {
      Object.assign(rules, field.validation);
    }
    return rules;
  };

  const onSubmitHandler = async (data) => {
    if (showConfirmation) {
      setConfirmDialog({
        isOpen: true,
        type: 'submit',
        data,
      });
    } else {
      await executeSubmit(data);
    }
  };

  const executeSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (showConfirmation) {
      setConfirmDialog({
        isOpen: true,
        type: 'cancel',
        data: null,
      });
    } else {
      executeCancel();
    }
  };

  const executeCancel = () => {
    onCancel && onCancel();
    reset();
  };

  const handleConfirmation = async () => {
    setConfirmDialog({ isOpen: false, type: null, data: null });
    if (confirmDialog.type === 'submit') {
      await executeSubmit(confirmDialog.data);
    } else if (confirmDialog.type === 'cancel') {
      executeCancel();
    }
  };

  const handleDialogClose = () => {
    setConfirmDialog({ isOpen: false, type: null, data: null });
  };

  const getDialogContent = () => {
    switch (confirmDialog.type) {
      case 'submit':
        return confirmSubmit;
      case 'cancel':
        return confirmCancel;
      default:
        return { title: 'Are you sure?', message: null };
    }
  };

  const handleBankChallanSubmit = async () => {
    const token = recaptchaRef.current?.getValue();

    // if (!token) {
    //   setCaptchaError(true);
    //   return;
    // }

    if (!selectedBank) {
      alert('Please select a bank');
      return;
    }

    setCaptchaError(false);
    // Handle bank challan submission
    const formData = watch();
    await executeSubmit({
      ...formData,
      selectedBank,
      paymentMethod: 'BankChallan',
    });
  };

  const handleCreditCardSubmit = async () => {
    const token = recaptchaRef.current?.getValue();

    // if (!token) {
    //   setCaptchaError(true);
    //   return;
    // }

    if (!creditCardAgreed) {
      alert('Please agree to the Credit Card Payment Terms and Conditions');
      return;
    }

    setCaptchaError(false);
    setError(null); // Clear previous errors

    try {
      // Get form data
      const formData = watch();
      console.log(formData);

      // Make API call for credit card payment
      const result = await postPaymentRequest({
        path: '/hbl/initiate-payment',
        body: {
          // Required fields from your form data
          armyNumber: formData.armyNumber,
          cnicNicop: formData.cnicNicop,
          country: formData.country?.value || formData.country,
          district: formData.district?.value || formData.district,
          kinAddress: formData.kinAddress,
          kinCnic: formData.kinCnic,
          kinName: formData.kinName,
          kinPhone: formData.kinPhone,
          mailingAddress: formData.mailingAddress,
          name: formData.name,
          nonRefundableAmount: formData.nonRefundableAmount,
          paymentMethod:
            formData.paymentMethod?.value || formData.paymentMethod,
          phoneNumber: formData.phoneNumber,
          plotType: formData.plotType?.value || formData.plotType,
          province: formData.province?.value || formData.province,
          quota: formData.quota?.value || formData.quota,
          refundableAmount: formData.refundableAmount,
          retirementDate: formData.retirementDate,

          // Set payment type for credit card
          paymentType: 'card_payment',

          // Keep existing fields if they're still needed
          arM: formData.plotReferenceNo,
          membershipNo: formData.membershipNo,
          cnic: formData.cnic,
          depositorName: formData.depositorName,
          remarks: formData.remarks,
          purposeOfDeposit: formData.purposeOfDeposit,
          email: formData.email?.toLowerCase(),
          address: formData.address,
          amount: formData.amount,
        },
      }).unwrap();

      if (result && result.data) {
        // Redirect to payment gateway
        window.location.href = result.data;
      } else {
        throw new Error('Payment URL not received');
      }
    } catch (err) {
      console.log(err);
      setError(
        'Payment initiation failed. Please verify your details and try again. If the problem persists, contact support.'
      );
      console.error('Payment error:', err);
    }
  };

  const dialogContent = getDialogContent();
  const paymentMethod = watch('paymentMethod')?.value;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div className={`rounded-lg border-2 bg-white p-2 sm:p-6 ${className}`}>
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fields
              .filter(
                (field) => field && typeof field === 'object' && field.name
              )
              .map((field) => (
                <FormField
                  key={field.name}
                  field={field}
                  register={register}
                  control={control}
                  validationRules={getValidationRules(field)}
                  error={errors[field.name]}
                  watch={watch}
                  setValue={setValue}
                />
              ))}
          </div>

          {/* Bank Challan Payment Method */}
          {currentStep === 5 && paymentMethod === 'BankChallan' && (
            <div className="mt-6 flex justify-between space-y-4 ">
              <div className="flex flex-col items-start gap-6 sm:flex-row">
                {/* Left Side - Bank Selection and reCAPTCHA */}
                <div className="flex flex-col gap-4">
                  {/* Bank Selection */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Bank
                    </label>
                    <div className="relative w-full max-w-[296px]">
                      <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                        className="h-[40px] w-full appearance-none rounded-md border border-gray-300 bg-white px-4 pr-10 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400"
                      >
                        <option value="">Select</option>
                        <option value="HBL">HBL</option>
                        <option value="UBL">UBL</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                        <span className="mb-1 me-2 text-gray-400">|</span>
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* reCAPTCHA below Bank */}
                  <div>
                    <ReCAPTCHA
                      sitekey="your-site-key"
                      ref={recaptchaRef}
                      onChange={handleCaptchaChange}
                    />
                    {captchaError && (
                      <p className="mt-2 text-sm text-red-500">
                        Please verify that you are not a robot.
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Side - Submit Button */}
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={handleBankChallanSubmit}
                  disabled={!captchaVerified || !selectedBank}
                  className="rounded bg-gray-800 px-6 py-2 text-white "
                >
                  Submit Application
                </button>
              </div>
            </div>
          )}

          {/* Credit Card Payment Method */}
          {currentStep === 5 && paymentMethod === 'CreditCard' && (
            <div className="mt-6 space-y-4">
              {/* HBL Logo and Secure Payment Gateway */}
              <div className="flex items-center gap-3">
                <div className=" flex h-8 w-12 items-center justify-center rounded">
                  <h1 className="font-bold text-green-800">HBL</h1>
                  <span className="mb-1 ms-3 text-gray-400">|</span>
                </div>
                <span className="text-sm text-gray-600">
                  Secure Payment Gateway
                </span>
              </div>

              {/* reCAPTCHA */}
              <div>
                <ReCAPTCHA
                  sitekey="your-site-key"
                  ref={recaptchaRef}
                  onChange={handleCaptchaChange}
                />
                {captchaError && (
                  <p className="mt-2 text-sm text-red-500">
                    Please verify that you are not a robot.
                  </p>
                )}
              </div>

              {/* Terms and Conditions Checkbox */}
              <div>
                <label className="flex items-start gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={creditCardAgreed}
                    onChange={(e) => setCreditCardAgreed(e.target.checked)}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <span>
                    I agree to the Credit Card Payment Terms and Condition
                  </span>
                </label>
              </div>

              {/* Pay Button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCreditCardSubmit}
                  disabled={!creditCardAgreed || isPaymentLoading}
                  className="rounded bg-gray-900 px-6 py-2 text-white disabled:opacity-50"
                >
                  {isPaymentLoading ? 'Processing...' : 'Pay'}
                </button>
              </div>
            </div>
          )}

          {/* Default Form Buttons - Only show when not in payment step */}
          {!(
            currentStep === 5 &&
            (paymentMethod === 'BankChallan' || paymentMethod === 'CreditCard')
          ) && (
            <div className="mt-6 flex flex-col justify-end gap-4 sm:flex-row">
              {isCancel && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                  {...cancelButtonProps}
                  className="bg-[#6C2C2C] text-white hover:bg-[#5a2424] focus:ring-[#6C2C2C] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {cancelText}
                </Button>
              )}
              {isSubmit && (
                <Button
                  type="submit"
                  variant="primary"
                  loading={isSubmitting || loading}
                  disabled={isSubmitting || loading}
                  {...submitButtonProps}
                  className="bg-[#333333] text-white hover:bg-[#5a2424] focus:ring-[#333333] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {submitText}
                </Button>
              )}
            </div>
          )}
        </form>
      </div>

      {showConfirmation && (
        <ConfirmationDialog
          isOpen={confirmDialog.isOpen}
          onClose={handleDialogClose}
          onConfirm={handleConfirmation}
          title={dialogContent.title}
          message={dialogContent.message}
        />
      )}
    </div>
  );
}
