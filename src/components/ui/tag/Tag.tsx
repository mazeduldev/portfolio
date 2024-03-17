import React from "react";
import classes from "./Tag.module.scss";

interface TagProps {
  children?: React.ReactNode;
  classNames?: string;
}

const Tag: React.FC<TagProps> = ({
  children,
  classNames,
  ...rest
}: TagProps) => {
  return (
    <div className={`${classes.tag} ${classNames}`} {...rest}>
      <span>{children}</span>
    </div>
  );
};

export default Tag;
