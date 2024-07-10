"use client";

import { validateRegister } from "@/helpers/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function RegisterForm() {
  const initialvalue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    country: "",
    city: "",
  };
  return (
    <section className="h-full">
      <div className="container-fluid h-full px-6 py-24">
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background*/}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 ">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
            <Formik
              initialValues={initialvalue}
              onSubmit={(values) => {
                console.log(values);
              }}
              validate={(values) => validateRegister(values)}
            >
              <Form className="bg-light-blue shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Email
                  </label>
                  <Field
                    
                    type="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                  </div>

                  <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="password" component="div" />

                  </div>

                  <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="confirmPassword" component="div" />
                  </div>

                  <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="name" component="div" />
                  </div>
                  <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Address
                  </label>
                  <Field
                    type="text"
                    name="address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage name="address" component="div" />
                  </div>
                  <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Phone
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500"
                  />
                  </div>

                  <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    Country
                  </label>
                  <Field
                    type="text"
                    name="country"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500"
                  />
                  </div>
                  <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    City
                  </label>
                  <Field
                    type="text"
                    name="city"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-500"
                  />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold col-span-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Register
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
