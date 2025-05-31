import React, { useEffect } from "react";
import { Formik, Form, useField } from "formik";
import { usePostMutation } from "../../services/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import headerImage from "../../assets/images/header-image2.jpg";
import Loader from "../../ui/Loader";
import dhaLogo from "../../assets/images/logo/logo.png";

const CustomField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label className="block text-black" htmlFor={props.name}>
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

const VerificationCodeField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newValue = field.value.split("");
      newValue[index] = value;
      helpers.setValue(newValue.join(""));
      if (value && index < 3) {
        document.getElementById(`${props.name}-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !field.value[index] && index > 0) {
      document.getElementById(`${props.name}-${index - 1}`).focus();
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-black text-center leading-loose text-2xl" htmlFor={props.name}>
        {label}
      </label>
      <div className="flex gap-2 justify-center">
        {Array(4)
          .fill()
          .map((_, index) => (
            <input
              key={index}
              id={`${props.name}-${index}`}
              type="text"
              maxLength="1"
              value={field.value[index] || ""}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
          ))}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-600">{meta.error}</div>
      ) : null}
      <p className="text-sm text-gray-600 mt-1 text-center">
        Didn't receive code?{" "}
        <Link to="/resend-code" className="underline text-[#5B3D22]">
          Resend it
        </Link>
      </p>
    </div>
  );
};

export function Registration() {
  const [postMutation, { isLoading }] = usePostMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const validate = (values) => {
    const errors = {};
    if (!values.phoneNumber && !values.email) {
      errors.phoneNumber = "Phone number or email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password?.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!values.verificationCode || values.verificationCode.length !== 4) {
      errors.verificationCode = "Please enter a 4-digit verification code";
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await postMutation({
        path: "/authentication/register",
        body: values,
        method: "POST",
      });
      if (response?.data?.meta?.token) {
        await dispatch(register(response));
        toast.success("Registration successful! Redirecting...");
        navigate("/dashboard");
      } else {
        toast.error(
          response?.error?.data?.message ||
            "Registration failed. Please check your credentials."
        );
      }
    } catch (err) {
      toast.error(
        err?.data?.message ||
          "Registration failed. Please check your credentials."
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
        <section className="mx-auto flex min-h-screen flex-col items-center justify-center gap-8 p-5 md:w-[90%] md:flex-row md:p-0">
          <div className="w-full md:w-1/2 p-6 flex flex-col min-h-[500px]">
            <div className="text-center">
              <img src={dhaLogo} alt="DHA Logo" className="mx-auto w-30 mb-4" />
              <h2 className="font-bold text-2xl text-left mb-4">
                Hello! Register to get started
              </h2>
              <p className="text-black font-semibold text-start text-xl leading-relaxed">
                OTP Method
              </p>
              <div className="flex justify-start gap-4 mb-4 mt-2">
                <label>
                  <input type="radio" name="otpMethod" value="mobile" /> Mobile
                </label>
                <label>
                  <input type="radio" name="otpMethod" value="email" /> Email
                </label>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-start">
              <Formik
                initialValues={{
                  phoneNumber: "",
                  email: "",
                  password: "",
                  verificationCode: "",
                  otpMethod: "mobile",
                }}
                validate={validate}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="mt-4 md:w-10/12">
                    <CustomField
                      label="Phone Number"
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter phone number"
                    />
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
                    <VerificationCodeField
                      label="Enter the verification code"
                      name="verificationCode"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || isLoading}
                      className="w-full rounded-md bg-gray-900 py-2 text-white hover:bg-gray-700 mt-4"
                    >
                      {isLoading ? "Registering..." : "Register Now"}
                    </button>
                    <p className="mt-4 text-center text-[#5B3D22]">
                      Already have an account?{" "}
                      <Link to="/logIn" className="underline">
                        Login Now
                      </Link>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
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

export default Registration;