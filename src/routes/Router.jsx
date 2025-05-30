import { useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from '../utils/ScrollToTop';
import Loader from '../ui/Loader';
import AppLayout from '../ui/AppLayout';
import NotFound from '../pages/NotFound';
import { BILL, HOME,BALLOTFORM } from './RouteConstants';
import Home from '../pages/home/Home';
// import SignIn, { Registration } from '../pages/auth/Registration'; // Import the SignIn component (adjust the path as needed)
import BillsPayment from '../pages/Billpyment/BillsPayment';
import { Registration } from '../pages/auth/Registration';
import Login from '../pages/auth/Login';
import BallotForm from '../pages/BallotForm/BallotForm';
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
          index: true,
          path: HOME,
          element: <Home />,
        },
        {
          index: true,
          path: BILL,
          element: <BillsPayment />,
        },
        {
          index: true,
          path:BALLOTFORM ,
          element: <BallotForm  />,
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
