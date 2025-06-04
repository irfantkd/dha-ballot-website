


import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation,  } from 'react-router-dom';
import { HiCheckCircle, HiExclamation, HiX, HiDocumentDownload } from 'react-icons/hi';
import {  useDownloadPaymentPDFMutation,  usePostMutation } from '../../services/apiService';


import { ArrowLeftIcon } from 'lucide-react';
import Loader from '../../ui/Loader';

const PaymentStatusPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [postPaymentConfirmation,{isLoading}] = usePostMutation();
  // const [downloadPDF] = usePostMutation(); // Define the mutation for downloading PDFs
  const [isDownloading, setIsDownloading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
const [downloadPaymentPDF]= useDownloadPaymentPDFMutation()
  
  const [statusInfo, setStatusInfo] = useState({
    type: 'loading',
    title: 'Processing Payment...',
    message: 'Please wait while we confirm your payment details.',
    color: 'gray'
  });

 


  useEffect(() => {
  
    const confirmPayment = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      let data = urlParams.get('data');
      
      if (data) {
          // Restore '+' where spaces were inserted
          data = data.replace(/\s/g, '+');
      }
      

      if (data) {
        try {
          const result = await postPaymentConfirmation({
            path: '/save-payment',
            body: { data }
          }).unwrap();
          
          processPaymentResponse(result);
        } catch (error) {
          console.error('Payment confirmation error:', error);
          setStatusInfo({
            type: 'error',
            title: 'Payment Failed',
            message: error?.data?.message || 'Failed to confirm payment. Please contact support.',
            color: 'red'
          });
        }
      }
    };
    confirmPayment();
  }, [location, postPaymentConfirmation]);
  // Process the API response
 
  const processPaymentResponse = (response) => {
     
    if (!response.error) {
      const paymentData = response.data.payment_details;
      const responseCode = response?.data?.responseCode;
      const responseMessage = response?.data?.responseMessage;
      setPaymentDetails(paymentData);
      // Set status based on the response code
      if (responseCode === "00") {
        setStatusInfo({
          type: 'success',
          title: 'Payment Successful!',
          message: responseMessage || 'Your transaction has been completed successfully.',
          color: 'emerald'
        });
      } else if (responseCode === "100") {
        setStatusInfo({
          type: 'success',
          title: 'Payment Successful!',
          message: responseMessage || 'Your payment is being processed. Please check back later.',
          color: 'emerald'
        });
      }
      else if (responseCode === "42") {
        setStatusInfo({
          type: 'success',
          title: 'Amount Deducted - Payment Time Limit Exceeded',
          message: responseMessage || 'Balance deduction successful but transaction exceeded payment time limit',
          color: 'emerald'
        });
      } 
      else if (responseCode === "481") {
        setStatusInfo({
          type: 'warning',
          title: 'Payment on Hold',
          message: responseMessage || 'Your payment is being processed. Please check back later.',
          color: 'yellow'
        });
      } else {
        setStatusInfo({
          type: 'error',
          title: 'Payment Failed',
          message: responseMessage || 'Your transaction could not be completed.',
          color: 'red'
        });
      }
    } else {
      setStatusInfo({
        type: 'error',
        title: 'Payment Failed',
        message: response.message || 'Payment confirmation failed',
        color: 'red'
      });
    }
  };

  // Now modify your handleDownloadPDF function:
// const handleDownloadPDF = async () => {
//   if (!paymentDetails || isDownloading) return;
//   setIsDownloading(true);
//   try {
//     const body = { tracking_number: paymentDetails.application_payment_track };
//     // Using the specific downloadPDF mutation
//     const pdfBlob = await downloadPDF({
//       path: '/download-payment-pdf',
//       body,
//     }).unwrap();
//     // Create a blob URL and trigger download
//     const url = window.URL.createObjectURL(new Blob([pdfBlob]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute(
//       'download',
//       `payment-receipt-${paymentDetails.application_payment_challan}.pdf`
//     );
//     document.body.appendChild(link);
//     link.click();
//     // Clean up
//     link.parentNode.removeChild(link);
//     window.URL.revokeObjectURL(url);
//     toast.success('Receipt downloaded successfully');
//   } catch (error) {
//     console.error('Download error:', error);
//     toast.error('Failed to download receipt. Please try again later.');
//   } finally {
//     setIsDownloading(false);
//   }
// };
const handleDownloadPDF = async () => {
  if (!paymentDetails) return;
  setIsDownloading(true);
  try {
    await downloadPaymentPDF(paymentDetails?.application_payment_track);
  } catch (error) {
    console.error('Error downloading PDF:', error);
  }
  setIsDownloading(false);
};
 
  // Determine which icon to display based on status
  const StatusIcon = () => {
    switch (statusInfo.type) {
      case 'success':
        return <HiCheckCircle className="h-14 w-14 text-white" />;
      case 'warning':
        return <HiExclamation className="h-14 w-14 text-white" />;
      case 'error':
        return <HiX className="h-14 w-14 text-white" />;
      default:
        return <HiCheckCircle className="h-14 w-14 text-white" />;
    }
  };
  // Color classes based on status
  const getColorClasses = () => {
    const colors = {
      emerald: {
        gradient: 'from-emerald-600 to-emerald-500',
        accent: 'bg-emerald-500/50',
        button: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500'
      },
      yellow: {
        gradient: 'from-yellow-500 to-yellow-400',
        accent: 'bg-yellow-400/50',
        button: 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400'
      },
      red: {
        gradient: 'from-red-600 to-red-500',
        accent: 'bg-red-500/50',
        button: 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
      },
      blue: {
        gradient: 'from-blue-600 to-blue-500',
        accent: 'bg-blue-500/50',
        button: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
      }
    };
    return colors[statusInfo.color] || colors.blue;
  };
  const colorClasses = getColorClasses();

  if (statusInfo||paymentDetails) {  
    return (
     <>
     
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg w-full">
          {/* Status Card */}
          <div className="overflow-hidden rounded-lg bg-white shadow-xl">
            {/* Top Banner */}
            <div className={`bg-gradient-to-r ${colorClasses.gradient} px-8 py-5`}>
              <div className="flex justify-center">
                <div className="rounded-full bg-white/30 p-3 backdrop-blur-sm">
                  <StatusIcon />
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="px-8 py-10">
              <div className="text-center">
                <h1 className="mb-3 text-3xl font-bold text-gray-900">
                  {statusInfo.title}
                </h1>
                <div className={`mx-auto mb-8 h-1 w-16 rounded ${colorClasses.accent}`}></div>
                <p className="leading-relaxed text-gray-600 mb-6">
                  {statusInfo.message}
                </p>
                {/* Payment Details */}
                {paymentDetails && (
                  <div className="mt-6 text-left bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">Payment Details</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="text-gray-600">Member Name:</span>
                        <span className="font-medium">{paymentDetails.application_payment_member}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="text-gray-600">Membership ID:</span>
                        <span className="font-medium">{paymentDetails.application_payment_membership}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="text-gray-600">CNIC:</span>
                        <span className="font-medium">{paymentDetails.application_payment_cnic}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="text-gray-600">Plot:</span>
                        <span className="font-medium">{paymentDetails.application_payment_plot}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="text-gray-600">Challan No:</span>
                        <span className="font-medium">{paymentDetails.application_payment_challan}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium">Rs. {Number(paymentDetails.application_payment_amount).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="text-gray-600">Payment Date:</span>
                        <span className="font-medium">{paymentDetails.application_payment_date}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200 py-2">
                        <span className="text-gray-600">Payment Type:</span>
                        <span className="font-medium">
                          {paymentDetails.application_payment_card_type || 'Bank Payment'}
                        </span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Purpose:</span>
                        <span className="font-medium capitalize">
                          {paymentDetails.application_payment_purpose?.replace(/_/g, ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Action Buttons */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
                {paymentDetails && (
                  <button
                    onClick={handleDownloadPDF}
                    disabled={isDownloading || statusInfo.type === 'error'}
                    className={`inline-flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      (isDownloading || statusInfo.type === 'error') ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isDownloading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Downloading...
                      </>
                    ) : (
                      <>
                        <HiDocumentDownload className="mr-2 h-4 w-4" />
                        Download Receipt
                      </>
                    )}
                  </button>
                )}
                <button
                  onClick={() => navigate('/payment')}
                  className={`inline-flex items-center justify-center rounded-lg ${colorClasses.button} px-6 py-3 text-sm font-medium text-white shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2`}
                >
                  <ArrowLeftIcon className="mr-2 h-4 w-5" />
                  Back
                </button>
              </div>
            </div>
            {/* Bottom Banner */}
            <div className="bg-gray-50 px-8 py-4 text-center">
              <span className="text-sm text-gray-500">
                Thank you for choosing our services
              </span>
            </div>
          </div>
        </div>
      </div>
      {isLoading &&   <Loader/>
      }
     </>
    );
  }
};
export default PaymentStatusPage;