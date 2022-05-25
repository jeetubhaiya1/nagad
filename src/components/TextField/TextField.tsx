import React from "react";
import { useForm } from "react-hook-form";
import "./TextField.scss";

const TextField = ({ type, id, placeholder, name, required }) => {
  const { register } = useForm();

  return (
    <input
      className="textfield"
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      {...register(name, { required })}
    />
  );
};

export default TextField;
