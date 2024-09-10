"use client";
import React from "react";

interface ISignUpProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
  placeholder?: string;
  value: string;
  error?: string;
}

const InputField = ({
  error,
  type,
  fieldName,
  placeholder,
  value,
  onChange,
  ...rest
}: ISignUpProps) => {
  return (
    <input
      type={type}
      name={fieldName}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="white-color border border-white px-2 py-3 rounded-lg bg-neutral-500 text-white"
      {...rest}
    />
  );
};

export default InputField;
