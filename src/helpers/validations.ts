interface ValuesRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  phone: string;
  country: string;
  city: string;
}
interface ValuesLogin {
  email: string;
  password: string;
}



export const validateLogin = (values: ValuesLogin) => {
  const errors = {} as any; 
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export const validateRegister = (values: ValuesRegister) => {
  const errors = {} as any;
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters or more";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!values.name) {
    errors.name = "Required";
  }else if (values.name.length < 3) {
    errors.name = "Must be 3 characters or more";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.phone) {
    errors.phone = "Required";
  }

  if (!values.country) {
    errors.country = "Required";
  }


  if (!values.city) {
    errors.city = "Required";
  }

  return errors;
};
