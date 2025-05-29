import { useRoutes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from '../utils/ScrollToTop';
import Loader from '../ui/Loader';
import AppLayout from '../ui/AppLayout';
import NotFound from '../pages/NotFound';
import { HOME } from './RouteConstants';
import Home from '../pages/home/Home';
import { Registration } from '../pages/auth/Registration';
import Login from '../pages/auth/Login';

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
