import React from "react";
import { TiltOptions } from "vanilla-tilt";
import classes from "./card.module.scss";
import Tilt from "./tilt";

interface CardProps {
  children?: React.ReactNode;
  tiltOptions?: TiltOptions;
}

const defaultTiltOptions: TiltOptions = {
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const Card: React.FC<CardProps> = ({
  children,
  tiltOptions = defaultTiltOptions,
  ...restProps
}: CardProps) => {
  return (
    <Tilt className={classes.card} options={tiltOptions} {...restProps}>
      {children}
    </Tilt>
  );
};

export default Card;
