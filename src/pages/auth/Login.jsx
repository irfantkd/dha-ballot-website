import React, { useEffect } from "react";
import { Formik, Form, useField } from "formik"; // Using useField for custom fields
import { usePostMutation } from "../../services/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import headerImage from "../../assets/images/header-image2.jpg";
import Loader from "../../ui/Loader";
import dhaLogo from "../../assets/images/logo/logo.png";
// import { LogIn } from "lucide-react";
// Custom Field component using useField hook
const CustomField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label className="block text-gray-600" htmlFor={props.name}>
        {label}
      </label>
      <input
        {...field}
        {...props}
        className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default function Login() {
  const [postMutation, { isLoading }] = usePostMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth); // This should now work

  const validate = (values) => {
    const errors = {};
    if (!values.phoneNumber && !values.email) {
      errors.phoneNumber = "Phone number or email is required";
    } else if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password?.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await postMutation({
        path: "/authentication/login",
        body: values,
        method: "POST",
      });
      if (response?.data?.meta?.token) {
        await dispatch(login(response));
        toast.success("Login successful! Redirecting...");
        navigate("/dashboard");
      } else {
        toast.error(
          response?.error?.data?.message ||
            "Login failed. Please check your credentials."
        );
      }
    } catch (err) {
      toast.error(
        err?.data?.message || "Login failed. Please check your credentials."
      );
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, token]);

  if (!token) {
    return (
      <>
        <section className="flex flex-col md:flex-row md:w-[90%] p-5 md:p-0 mx-auto items-center justify-center gap-6 min-h-screen ">
          <div className="w-full md:w-1/2 bg-white p-6 ">
            <div className="text-center">
              <img src={dhaLogo} alt="DHA Logo" className="mx-auto w-30 mb-4" />
              <h2 className="font-bold text-2xl mb-4 text-left">
                Welcome back! Glad to see you again
              </h2>
            </div>

            <Formik
              initialValues={{ email: "", password: "" }}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="mt-4 md:w-10/12">
                  {/* <CustomField
                    label="Phone Number"
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                  /> */}
                  <CustomField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                  <CustomField
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />

                  <div className="mb-4 text-right">
                    <Link
                      to="/auth/forget-password"
                      className="text-[#5B3D22] underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || isLoading}
                    className="w-full rounded-md bg-gray-800 py-2 text-white hover:bg-gray-900"
                  >
                    {isLoading ? "Signing In..." : "Login"}
                  </button>

                  <p className="mt-4 text-center text-[#5B3D22]">
                    Don't have an account?{" "}
                    <Link to="/register" className="underline">
                      Register Now
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>

          <div className="w-2/5 hidden md:block mt-10">
            <div
              className="w-full h-[90dvh] bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${headerImage})` }}
            ></div>
          </div>
        </section>
        {isLoading && <Loader />}
      </>
    );
  }
}