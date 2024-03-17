import React from "react";
import classes from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }: InputProps) => {
  return (
    <div className={classes.input}>
      <label className={classes.label}>{label}</label>
      <input className={classes.inputElement} {...rest} />
    </div>
  );
};

export default Input;
