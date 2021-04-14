import React from 'react';
import classes from './tag.module.scss';

const Tag = (props) => {
  return (
    <div className={`${classes.tag} ${props.classes}`} {...props}>
      <span>{props.children}</span>
    </div>
  )
}

export default Tag
