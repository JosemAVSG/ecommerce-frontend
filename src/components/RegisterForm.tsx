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
    <div>
      <Formik
        initialValues={initialvalue}
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={(values) => validateRegister(values)}
      >
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
