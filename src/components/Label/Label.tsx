import React from "react";
import "./Label.scss"

const Label = ({ id, fieldName }) => {
  return <label className="label" htmlFor={id}>{fieldName}</label>;
};

export default Label;
