"use client";
import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { styles } from "../../app/styles/style";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const SignUp: FC<Props> = ({ setRoute }) => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      const data = {
        name,
        email,
        password,
      };
      setRoute("Verification");
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="w-full">
      <h2 className={`${styles.title}`}>Sign Up with EduPulse</h2>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col gap-y-3">
          <label className="pl-2 text-gray-700 dark:text-gray-200">Name</label>
          <input
            type="text"
            name=""
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="Name"
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:bg-gray-700 text-gray-700 dark:text-gray-200"
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">{errors.name}</span>
          )}
          <label className="pl-2 text-gray-700 dark:text-gray-200">Email</label>
          <input
            type={"email"}
            name=""
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Email"
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:bg-gray-700 text-gray-700 dark:text-gray-200"
          />
          {errors.email && touched.email && (
            <span className="text-red-500 pt-2 block">{errors.email}</span>
          )}
          <label className="pl-2 text-gray-700 dark:text-gray-200">
            Password
          </label>
          <div className="w-full relative">
            <div className="sticky">
              <input
                type={!show ? "password" : "text"}
                name="password"
                value={values.password}
                onChange={handleChange}
                id="password"
                placeholder="Password"
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-gray-500 dark:focus:bg-gray-700 text-gray-700 dark:text-gray-200"
              />
              {!show ? (
                <AiOutlineEyeInvisible
                  className="absolute bottom-4 right-2 z-1 cursor-pointer mr-2"
                  size={20}
                  onClick={() => setShow(true)}
                />
              ) : (
                <AiOutlineEye
                  className="absolute bottom-4 right-2 z-1 cursor-pointer mr-2"
                  size={20}
                  onClick={() => setShow(false)}
                />
              )}
            </div>
            {errors.password && touched.password && (
              <span className="text-red-500 pt-2 block">{errors.password}</span>
            )}
          </div>
          <button className={`${styles.button}`}>
            <svg
              className="w-6 h-6 -ml-2"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <path d="M20 8v6M23 11h-6" />
            </svg>
            <span className="ml-3">Sign Up</span>
          </button>

          <span className="flex items-center ">
            <span className="h-px flex-1 bg-black dark:bg-white"></span>
            <span className="shrink-0 px-6 text-gray-900 dark:text-gray-200">
              Or Connect With Us
            </span>
            <span className="h-px flex-1 bg-black dark:bg-white"></span>
          </span>

          <button className="w-full font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline dark:bg-indigo-900 dark:text-gray-200 dark:hover:shadow-lg">
            <div className="bg-white p-2 rounded-full dark:bg-gray-800">
              <svg className="w-4" viewBox="0 0 533.5 544.3">
                <path
                  d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                  fill="#4285f4"
                />
                <path
                  d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                  fill="#34a853"
                />
                <path
                  d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                  fill="#fbbc04"
                />
                <path
                  d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                  fill="#ea4335"
                />
              </svg>
            </div>
            <span className="ml-4">Sign Up with Google</span>
          </button>
          <button className="w-full font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5 dark:bg-indigo-900 dark:text-gray-200 dark:hover:shadow-lg">
            <div className="bg-white p-1 rounded-full dark:bg-gray-800">
              <svg className="w-6" viewBox="0 0 32 32">
                <path
                  fillRule="evenodd"
                  d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                />
              </svg>
            </div>
            <span className="ml-4">Sign Up with GitHub</span>
          </button>
          <h5 className="text-center pt-4 font-Poppins text-[14px] text-gray-700 dark:text-gray-200">
            Already have an Account?{" "}
            <span
              onClick={() => {
                setRoute("Login");
              }}
              className="text-indigo-500 cursor-pointer"
            >
              Login
            </span>
          </h5>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
