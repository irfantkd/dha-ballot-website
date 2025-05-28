// import React, { useEffect } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { usePostMutation } from '../../services/apiService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link, useNavigate } from 'react-router-dom';
// import { login } from '@/features/AuthSlice/authSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import headerImage from '../../assets/images/header-image2.jpg';
// import Loader from '@/ui/Loader';

// export function SignIn() {
//   const [postMutation, { isLoading }] = usePostMutation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);

//   const validate = (values) => {
//     const errors = {};
//     if (!values.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!values.password) {
//       errors.password = 'Password is required';
//     } else if (values.password?.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//     }

//     return errors;
//   };

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       const response = await postMutation({
//         path: '/auth/login',
//         body: values,
//         method: 'POST',
//       });
//       if (response?.data?.meta?.token) {
//         await dispatch(login(response));
//         toast.success('Login successful! Redirecting...');
//         navigate('/dashboard');
//       } else {
//         toast.error(
//           response?.error?.data?.message ||
//             'Login failed. Please check your credentials.'
//         );
//       }
//     } catch (err) {
//       toast.error(
//         err?.data?.message || 'Login failed. Please check your credentials.'
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate('/dashboard');
//     }
//   }, [navigate, token]);

//   if (!token) {
//     return (
//       <>
//         <section className="mx-auto flex p-5 md:w-[90%] md:gap-10 md:p-0 lg:gap-0">
//           <div className="mt-20 w-auto self-center md:mt-4 md:w-3/5">
//             <div className="text-center">
//               <h2 className="mb-4 text-2xl font-bold">Sign In</h2>
//               <p className="text-lg text-gray-600">
//                 Enter your email and password to Sign In.
//               </p>
//             </div>

//             <Formik
//               initialValues={{ email: '', password: '' }}
//               validate={validate}
//               onSubmit={handleSubmit}
//             >
//               {({ isSubmitting }) => (
//                 <Form className="mx-auto mb-2 mt-8 lg:w-1/2">
//                   <div className="mb-1 flex flex-col gap-6">
//                     <label
//                       className="font-medium text-gray-600"
//                       htmlFor="email"
//                     >
//                       Your Email
//                     </label>
//                     <Field
//                       type="email"
//                       name="email"
//                       placeholder="name@gmail.com"
//                       className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <ErrorMessage
//                       name="email"
//                       component="div"
//                       className="text-sm text-red-600"
//                     />

//                     <label
//                       className="font-medium text-gray-600"
//                       htmlFor="password"
//                     >
//                       Password
//                     </label>
//                     <Field
//                       type="password"
//                       name="password"
//                       placeholder="********"
//                       className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <ErrorMessage
//                       name="password"
//                       component="div"
//                       className="text-sm text-red-600"
//                     />
//                   </div>

//                   <div className=" mb-2 mt-6 gap-5 text-end">
//                     <Link
//                       to="/auth/forget-password"
//                       className=" text-gray-600 underline "
//                     >
//                       Forgot Password
//                     </Link>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting || isLoading}
//                     className="mt-6 w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
//                   >
//                     {isLoading ? 'Signing In...' : 'Sign In'}
//                   </button>
//                 </Form>
//               )}
//             </Formik>
//           </div>

//           <div className="mt-10 hidden w-2/5 md:block">
//             <div
//               className="h-[90dvh] w-full rounded-2xl bg-cover bg-center"
//               style={{ backgroundImage: `url(${headerImage})` }}
//             ></div>
//           </div>
//         </section>
//         {isLoading && <Loader />}
//       </>
//     );
//   }
// }

// export default SignIn;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import headerImage from '../../assets/images/header-image2.jpg';

export function Registration() {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password?.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Simulate successful login
    toast.success('Login successful! Redirecting...');
    navigate('/dashboard');
    setSubmitting(false);
  };

  return (
    <section className="mx-auto flex p-5 md:w-[90%] md:gap-10 md:p-0 lg:gap-0">
      <div className="mt-20 w-auto self-center md:mt-4 md:w-3/5">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Hello! Register to get started
          </h2>
        </div>

        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mx-auto mb-2 mt-8 lg:w-1/2">
              <div className="mb-1 flex flex-col gap-6">
                <label className="font-medium text-gray-600" htmlFor="email">
                  Your Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="name@gmail.com"
                  className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-600"
                />

                <label className="font-medium text-gray-600" htmlFor="password">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="********"
                  className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-600"
                />
              </div>

              <div className="mb-2 mt-6 gap-5 text-end">
                <Link
                  to="/auth/forget-password"
                  className="text-gray-600 underline"
                >
                  Forgot Password
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
              >
                {isSubmitting ? 'Signing In...' : 'Register Now'}
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="mt-10 hidden w-2/5 md:block">
        <div
          className="h-[90dvh] w-full rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${headerImage})` }}
        ></div>
      </div>
    </section>
  );
}

export default Registration;
