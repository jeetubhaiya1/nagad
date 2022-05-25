import React from "react";
import { useForm } from "react-hook-form";

const TextField = ({type, id, placeholder, name, required}) => {
  const { register } = useForm();

  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      {...register(name, { required })}
    />
  );
};

export default TextField;
