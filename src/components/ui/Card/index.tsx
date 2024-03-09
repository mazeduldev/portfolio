import { PropsWithChildren } from "react";
import { TiltOptions } from "vanilla-tilt";
import classes from "./index.module.scss";
import Tilt from "./Tilt";

type CardProps = PropsWithChildren<{
  tiltOptions?: TiltOptions;
}>;

const defaultTiltOptions: TiltOptions = {
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const Card = (props: CardProps) => {
  const { children, tiltOptions = defaultTiltOptions, ...restProps } = props;
  return (
    <Tilt className={classes.card} options={tiltOptions} {...restProps}>
      {children}
    </Tilt>
  );
};

export default Card;
