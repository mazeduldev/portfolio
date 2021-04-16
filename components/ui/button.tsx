import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import classes from './button.module.scss'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: string,
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, classNames, loading, ...rest }) => {
  return (
    <button className={`${classes.button} ${classNames}`} {...rest}>
      {loading && <FaSpinner className={classes.spinner} />}
      <span className={classes.buttonText}>{children}</span>
    </button>
  )
}

export default Button
