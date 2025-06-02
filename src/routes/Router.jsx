import { useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from '../utils/ScrollToTop';
import Loader from '../ui/Loader';
import AppLayout from '../ui/AppLayout';
import NotFound from '../pages/NotFound';
// import { BILL, HOME, ballotform, applicationstatus } from './RouteConstants';

import {
  ABOUTUS,
  BANKCONTACTS,
  BILL,
  CONTACTUS,
  FAQS,
  HOME,
  PRIVACYPOLICY,
  REFUNDPOLICY,
  TERMANDCONDITIONS,
  ballotform,
  applicationstatus,
} from './RouteConstants';
import Home from '../pages/home/Home';
// import SignIn, { Registration } from '../pages/auth/Registration'; // Import the SignIn component (adjust the path as needed)
import BillsPayment from '../pages/Billpyment/BillsPayment';
import { Registration } from '../pages/auth/Registration';
import Login from '../pages/auth/Login';
import BallotForm from '../pages/BallotForm/BallotForm';
import ViewApplication from '../pages/applicationstatus/ApplicationStatusForm';
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy';
import TermAndConditions from '../pages/termAndConditions/TermAndConditions';
import RefundPolicy from '../pages/refundPolicy/RefundPolicy';
import ContactUs from '../pages/contactUs/ContactUs';
import Faqs from '../pages/Faqs/Faqs';
import BankContacts from '../pages/bankContacts/BankContacts';
import AboutUs from '../pages/aboutus/AboutUs';
import ApplicationStatusForm from '../pages/applicationstatus/ApplicationStatusForm';
import PaymentPage from '../pages/paymentpage/PaymentPage';
const LoadingFallback = () => <Loader />;

export default function Router() {
  const routes = useRoutes([
    {
      path: '/register',
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <Registration />
        </Suspense>
      ),
    },
    {
      path: '/login',
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: '/payment',
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <PaymentPage />
        </Suspense>
      ),
    },
    {
      path: '*',
      element: <NotFound />,
    },
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          path: HOME,
          element: <Home />,
        },
        {
          path: BILL,
          element: <BillsPayment />,
        },
        {
          index: true,
          path: ballotform,
          element: <BallotForm />,
        },
        {
          index: true,
          path: applicationstatus,
          element: <ApplicationStatusForm />,
        },
        {
          path: PRIVACYPOLICY,
          element: <PrivacyPolicy />,
        },
        {
          path: TERMANDCONDITIONS,
          element: <TermAndConditions />,
        },
        {
          path: REFUNDPOLICY,
          element: <RefundPolicy />,
        },
        {
          path: CONTACTUS,
          element: <ContactUs />,
        },
        {
          path: FAQS,
          element: <Faqs />,
        },
        {
          path: BANKCONTACTS,
          element: <BankContacts />,
        },
        {
          path: ABOUTUS,
          element: <AboutUs />,
        },
      ],
    },
  ]);

  return (
    <>
      <ScrollToTop />
      {routes}
    </>
  );
}
