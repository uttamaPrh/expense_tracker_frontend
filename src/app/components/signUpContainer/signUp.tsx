"use client";
import React from "react";
import InputField from "./components/inputField";
import useSignUp from "./hook/useSignUp";
const SignUp = () => {
  const { formik } = useSignUp();
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-6">
          <InputField
            fieldName="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Enter Username"
            type="text"
          />
          <InputField
            fieldName="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter Email"
            type="email"
          />
          <InputField
            fieldName="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter Password"
            type="password"
          />
          <button type="submit">Submit Form</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
