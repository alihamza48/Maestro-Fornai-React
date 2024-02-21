import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default Button;
