import React, { useState } from 'react';
import Header from '../../ui/Header';
import CategoriesTabs from '../../ui/CategoriesTabs';
import PayNow from './PayNow';
import Contacts from './Contacts';
import HowToPay from './HowToPay';
import PaymentFaqs from './PaymentFaqs';
import PaymentDetails from './PaymentDetails';
import PaymentForm from './PaymentForm';
import DataConfirmationForm from './DataConfirmationForm';

const tabs = [
  { id: 1, name: 'How to Pay' },
  { id: 2, name: 'Payment Details / Pay Now' },
  { id: 3, name: 'Contacts' },
  { id: 4, name: 'Payments FAQs' },
];

const STEPS = {
  VERIFICATION: 'VERIFICATION',
  DETAILS: 'DETAILS',
  PAYMENT_FORM: 'PAYMENT_FORM',
  DATA_CONFIRMATION: 'DATA_CONFIRMATION',
};

function PaymentPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [currentStep, setCurrentStep] = useState(STEPS.VERIFICATION);
  const [verificationData, setVerificationData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const handleTabChange = (id) => {
    setActiveTab(id);
    if (id === 2) {
      setCurrentStep(STEPS.VERIFICATION);
      setVerificationData(null);
    }
  };

  const handleVerificationSuccess = (data) => {
    setVerificationData(data);
    setCurrentStep(STEPS.DETAILS);
  };

  const handleProceedToPayment = () => {
    setCurrentStep(STEPS.PAYMENT_FORM);
  };

  const handleProceedToConfirmation = (formData) => {
    setPaymentData(formData);
    setCurrentStep(STEPS.DATA_CONFIRMATION);
  };

  const handleBack = () => {
    switch (currentStep) {
      case STEPS.PAYMENT_FORM:
        setCurrentStep(STEPS.DETAILS);
        break;
      case STEPS.DATA_CONFIRMATION:
        setCurrentStep(STEPS.PAYMENT_FORM);
        break;
      case STEPS.DETAILS:
        setCurrentStep(STEPS.VERIFICATION);
        setVerificationData(null);
        break;
      default:
        break;
    }
  };

  const renderPaymentStep = () => {
    switch (currentStep) {
      case STEPS.VERIFICATION:
        return <PayNow onSuccess={handleVerificationSuccess} />;
      case STEPS.DETAILS:
        return (
          <PaymentDetails
            data={verificationData}
            onBack={handleBack}
            onOnlinePayment={handleProceedToPayment}
          />
        );
      case STEPS.PAYMENT_FORM:
        return (
          <PaymentForm
            verificationData={verificationData}
            onProceedToConfirmation={handleProceedToConfirmation}
            onBack={handleBack}
          />
        );
      case STEPS.DATA_CONFIRMATION:
        return (
          <DataConfirmationForm
            data={paymentData}
            onBack={() => setCurrentStep(STEPS.PAYMENT_FORM)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section>
      <Header>
        {{
          headingText: 'Payments',
        }}
      </Header>
      <div className="mx-auto my-10 w-[85%]">
        <CategoriesTabs
          dummyData={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onTabClick={handleTabChange}
        />
        <div className="mt-6">
          {activeTab === 1 && <HowToPay />}
          {activeTab === 2 && renderPaymentStep()}
          {activeTab === 3 && <Contacts />}
          {activeTab === 4 && <PaymentFaqs />}
        </div>
      </div>
    </section>
  );
}

export default PaymentPage;
