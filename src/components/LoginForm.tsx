"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateLogin } from "@/helpers/validations";
import { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContex";
import Cookies from 'js-cookie';


interface ValuesLogin {
  email: string;
  password: string;
}

const LoginForm =  () => {
  const [valid , setValid] = useState(false)
  const {state, dispatch} = useContext<any>(AuthContext)
  
  
   const login = async (values :ValuesLogin) => {
    
    try {
      const response = await fetch('https://nest-demo-latest-plw3.onrender.com/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      localStorage.setItem("token", data.token);
      Cookies.set('token', data.token);
      // dispatch({ type: "LOGIN", payload: data });
      
      if (response.ok) {
        console.log('Login successful:', data);
        return data;
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.log('An error occurred during login:', error);
    }
  };

  return (
    <section className=" h-full ">
      <div className="container h-full px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background*/}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12 gap-4">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={  (values) => {
                 login(values)
              }}
              validate={(values) => {
                if(values.email == "" && values.password == ""){
                  setValid(false)
                }else{
                  setValid(true)
                }
                const errors = validateLogin(values);
              
                return errors
              }}
            >
              <Form className="bg-light-blue shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
              <h2 className="text-2xl font-bold mb-4 text-white text-center">Login</h2>
                <div className=" relative mb-6">
                
                   <Field
                    data-status ={valid ? "true" : "false"}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`peer block min-h-[auto]  w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-white data-[status=true]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-white dark:autofill:shadow-autofill dark:peer-focus:text-white [&:not([data-status=true])]:placeholder:opacity-0`}
                  /> 
                  <label data-status = {valid ? "true" : "false"} className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[status=true]:-translate-y-[1.15rem] peer-data-[status=true]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-white">
                    Email
                  </label>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className=" relative mb-6">
                  <Field
                    type="password"
                    name="password"
                    // placeholder="Password"
                    data-status ={valid ? "true" : "false"}

                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text- data-[status=true]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-white [&:not([data-status=true])]:placeholder:opacity-0"
                  />
                  <label data-status = {valid ? "true" : "false"} className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-white peer-data-[status=true]:-translate-y-[1.15rem] peer-data-[status=true]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-white">
                    Password
                  </label>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Remember me checkbox */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                    <input
                      className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                      type="checkbox"
                      defaultValue=""
                      id="exampleCheck3"
                    />
                    <label
                      className="inline-block ps-[0.15rem] hover:cursor-pointer text-white"
                      htmlFor="exampleCheck3"
                    >
                      Remember me
                    </label>
                  </div>
                  {/* Forgot password link */}
                  <a
                    href="#!"
                    className="text-white focus:outline-none dark:text-primary-400"
                  >
                    Forgot password?
                  </a>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-blue-400 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init=""
                  data-twe-ripple-color="light"
                  defaultChecked={true}
                >
                  Sign in
                </button>
                {/* Divider */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>
                {/* Social login buttons */}
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                  data-twe-ripple-init=""
                  data-twe-ripple-color="light"
                >
                  {/* Facebook */}
                  <span className="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>
                  Continue with Facebook
                </a>
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                  data-twe-ripple-init=""
                  data-twe-ripple-color="light"
                >
                  {/* X */}
                  <span className="me-2 fill-white [&>svg]:h-3.5 [&>svg]:w-3.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </span>
                  Continue with X
                </a>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
