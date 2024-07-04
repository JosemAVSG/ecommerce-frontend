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
    <div className="flex flex-col items-center h-screen  ">
        <div className="flex flex-col rounded-xl bg-slate-700">
            <h2>Register</h2>
      <Formik
        initialValues={initialvalue}
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={(values) => validateRegister(values)}
        
      >
        <div className="flex  bg-slate-700">

        <Form className="flex flex-col bg-blue-500">
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <Field type="password" name="confirmPassword" />
          <ErrorMessage name="confirmPassword" component="div" />
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <Field type="text" name="address" />
          <ErrorMessage name="address" component="div" />
          <Field type="text" name="phone" />
          <ErrorMessage name="phone" component="div" />
          <Field type="text" name="country" />
          <ErrorMessage name="country" component="div" />
          <Field type="text" name="city" />
          <ErrorMessage name="city" component="div" />
          <button type="submit">Register</button>
        </Form>
        </div>
      </Formik>


        </div>
    </div>
  );
}
