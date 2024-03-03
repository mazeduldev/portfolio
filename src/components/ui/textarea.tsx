import React from "react";
import classes from "./input.module.scss";

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea: React.FC<InputProps> = ({ label, ...rest }: InputProps) => {
  return (
    <div className={classes.input}>
      <label className={classes.label}>{label}</label>
      <textarea className={classes.inputElement} {...rest} />
    </div>
  );
};

export default Textarea;
