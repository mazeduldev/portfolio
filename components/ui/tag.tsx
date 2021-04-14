import React from 'react';
import classes from './tag.module.scss';

const Tag = (props) => {
  return (
    <div className={`${classes.tag} ${props.classes}`} {...props}>{props.children}</div>
  )
}

export default Tag
