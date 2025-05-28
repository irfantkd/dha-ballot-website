import { useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import LoaderMain from '../pages/Homepage/components/loader/LoaderMain';
import ScrollToTop from '../utils/ScrollToTop';
import Loader from '../ui/Loader';
import AppLayout from '../ui/AppLayout';
import NotFound from '../pages/NotFound';
import { APPLICATION, HOME } from './RouteConstants';
import Home from '../pages/home/Home';
import NewApplicationForm from '../pages/applicationForm/NewApplicationForm';

const LoadingFallback = () => <Loader />;
export default function Router() {
  const routes = useRoutes([
    {
      path: '/sign-in',
      element: <Suspense fallback={<LoadingFallback />}> </Suspense>,
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
          path: APPLICATION,
          element: <NewApplicationForm />,
        },
      ],
    },
  ]);
  // return routes;
  return (
    <>
      {/* ScrollToTop ensures scrolling to the top on every route change */}
      <ScrollToTop />
      {routes}
    </>
  );
}
