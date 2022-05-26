import React from "react";
import "./Label.scss";

const Label = ({ htmlFor, fieldName }) => {
  return (
    <label className="label" htmlFor={htmlFor}>
      {fieldName}
    </label>
  );
};

export default Label;
