"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = () => {
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
              onSubmit={(values) => {
                console.log(values);
              }}
              validate={(values) => {
                const errors = {} as any;
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
            >
              <Form className="bg-light-blue shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
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
                <label className="block text-white text-sm font-bold mb-2">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
