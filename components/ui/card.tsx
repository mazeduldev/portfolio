import React from "react";
import { TiltOptions } from "vanilla-tilt";
import classes from "./card.module.scss";
import Tilt from "./tilt";
import Image from "next/image";
import Button from "./button";

const Card = () => {
  const tiltOptions: TiltOptions = {
    glare: true,
    "max-glare": 0.2,
  };

  return (
    <Tilt className={classes.card} options={tiltOptions}>
      <Image
        src="/images/timeline_collage.png"
        alt="timeline"
        width={300}
        height={200}
        layout="intrinsic"
        className={classes.roundedImage}
      />
      <div className={classes.content}>
        <h5 className={classes.cardTitle}>Vertical Timeline</h5>
        <p className={classes.cardDescription}>
          Angular material theme supported minimalist's vertical timeline library for Angular applications.
        </p>
        <div className={classes.cardTagContainer}>
          <div className={classes.tag}>angular</div>
          <div className={classes.tag}>angular-material</div>
        </div>
        <div className={classes.cardButtonContainer}>
          <Button classes={classes.cardButton}><a href="https://github.com/mazid1/ngx-mzd-timeline" target="blank">Source Code</a></Button>
          <Button classes={classes.cardButton}><a href="https://mazid1.github.io/ngx-mzd-timeline/" target="blank">Live Demo</a></Button>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
