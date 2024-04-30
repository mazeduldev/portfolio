import { PropsWithChildren } from "react";
import { TiltOptions } from "vanilla-tilt";
import classes from "./GlassyCard.module.scss";
import Tilt from "./Tilt";

type GlassyCardProps = PropsWithChildren<{
  tiltOptions?: TiltOptions;
}>;

const defaultTiltOptions: TiltOptions = {
  glare: true,
  "max-glare": 0.05,
  gyroscope: false,
};

const GlassyCard: React.FC<GlassyCardProps> = (props) => {
  const { children, tiltOptions = defaultTiltOptions, ...restProps } = props;
  return (
    <Tilt className={classes.card} options={tiltOptions} {...restProps}>
      {children}
    </Tilt>
  );
};

export default GlassyCard;
