import React, { useState, useEffect } from "react";

function LoginForm() {
  const initialValues = { username: "", password: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hangleChange = (e) => {
    console.log("onchange", e.target.value);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormErrors(validate(formValues));
    setIsSubmitted(true);
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      "^(?=.*[A-Z])(?=.*[a-z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";

    if (!values.username) {
      errors.username = "Username is required ";
    }
    if (!values.email) {
      errors.email = "email is required ";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "email is not a valid format";
    }
    if (!values.password) {
      errors.password = "password is required ";
    } else if (!emailRegex.test(values.password)) {
      errors.password = "Password is not a valid format";
    }
    return errors;
  };

  useEffect(() => {
    console.log("called useEffect", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      console.log(formValues);
    }
  }, [formErrors]);
  return (
    <div className="container max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
      <form onSubmit={onSubmit}>
        <h1 className="text-white text-4xl mb-6">Login Form</h1>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-400 mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username"
            value={formValues.username}
            onChange={hangleChange}
          />
        </div>
        <p className="text-red-600">{formErrors?.username}</p>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            value={formValues.email}
            onChange={hangleChange}
          />
        </div>
        <p className="text-red-600">{formErrors?.email}</p>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-400 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            value={formValues.password}
            onChange={hangleChange}
          />
        </div>
        <p className="text-red-600">{formErrors?.password}</p>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
