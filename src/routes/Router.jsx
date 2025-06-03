import { useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from '../utils/ScrollToTop';
import Loader from '../ui/Loader';
import AppLayout from '../ui/AppLayout';
import NotFound from '../pages/NotFound';
import Home from '../pages/home/Home';
import BillsPayment from '../pages/Billpyment/BillsPayment';
import { Registration } from '../pages/auth/Registration';
import Login from '../pages/auth/Login';
import BallotForm from '../pages/BallotForm/BallotForm';
import ApplicationStatusForm from '../pages/applicationstatus/ApplicationStatusForm';
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy';
import TermAndConditions from '../pages/termAndConditions/TermAndConditions';
import RefundPolicy from '../pages/refundPolicy/RefundPolicy';
import ContactUs from '../pages/contactUs/ContactUs';
import Faqs from '../pages/Faqs/Faqs';
import BankContacts from '../pages/bankContacts/BankContacts';
import AboutUs from '../pages/aboutUs/AboutUs';
import HowToApply from '../pages/howToApply/HowToApply'; // Kept only one import
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
  howtoapply,
} from './RouteConstants';

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
      path: '*',
      element: <NotFound />,
    },
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true, // Only this route should have index: true
          path: HOME,
          element: <Home />,
        },
        {
          path: BILL,
          element: <BillsPayment />,
        },
        {
          path: ballotform, // Removed index: true
          element: <BallotForm />,
        },
        {
          path: applicationstatus, // Removed index: true
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
        {
          path: howtoapply, // Removed index: true
          element: <HowToApply />,
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
