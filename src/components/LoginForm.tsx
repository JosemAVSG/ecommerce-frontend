'use client'
import { Formik, Form, Field, ErrorMessage } from "formik"


const LoginForm = () => {
  return (
    <div>
       <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validate={(values) => {
          const errors = {} as any
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}

       >
        <Form>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Login</button>
        </Form>
      
       </Formik>
    </div>
  )
}

export default LoginForm
