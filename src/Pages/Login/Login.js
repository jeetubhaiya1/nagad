import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const onSubmit = data => console.log(data);
   
  
  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input {...register("firstName", { required: true, maxLength: 20 })} /> <br /> <br />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> <br /> <br />
      <input type="number" {...register("age", { min: 18, max: 99 })} /> <br /> <br />
      <input type="submit" />
      <h3>{data}</h3>
      <Link to="/about"><h1>Register</h1></Link>
    </form>
  );
};

export default Login;