import React from "react";
import { TiltOptions } from "vanilla-tilt";
import classes from "./card.module.scss";
import Tilt from "./tilt";

const defaultTiltOptions: TiltOptions = {
  glare: true,
  "max-glare": 0.2,
};

const Card: React.FC<{ tiltOptions?: TiltOptions }> = ({
  tiltOptions = defaultTiltOptions,
  children,
  ...restProps
}) => {
  return (
    <Tilt className={classes.card} options={tiltOptions} {...restProps}>
      {children}
    </Tilt>
  );
};

export default Card;
