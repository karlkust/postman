import React from "react";
import "./Button.css";

const Button = ({ type, text }) => {
  return <button className={type ? "submit " + type : "submit"}>{text}</button>;
};

export default Button;
