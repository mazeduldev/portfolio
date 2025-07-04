"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import VanillaTilt, { TiltOptions } from "vanilla-tilt";

type TiltProps = PropsWithChildren<{
  options: TiltOptions;
  className?: string;
}>;

const Tilt = ({ options, ...rest }: TiltProps) => {
  const tilt = useRef(null);

  useEffect(() => {
    if (tilt.current === null) {
      return;
    }
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
};

export default Tilt;

/**
{
  reverse:                false,  // reverse the tilt direction
  max:                    35,     // max tilt rotation (degrees)
  startX:                 0,      // the starting tilt on the X axis, in degrees.
  startY:                 0,      // the starting tilt on the Y axis, in degrees.
  perspective:            1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:                  1,      // 2 = 200%, 1.5 = 150%, etc..
  speed:                  300,    // Speed of the enter/exit transition
  transition:             true,   // Set a transition on enter/exit.
  axis:                   null,   // What axis should be disabled. Can be X or Y.
  reset:                  true    // If the tilt effect has to be reset on exit.
  easing:                 "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  glare:                  false   // if it should have a "glare" effect
  "max-glare":            1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
  "glare-prerender":      false,  // false = VanillaTilt creates the glare elements for you, otherwise
                                  // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  "mouse-event-element":  null    // css-selector or link to HTML-element what will be listen mouse events
                                  // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  gyroscope:              true    // Boolean to enable/disable device orientation detection,
  gyroscopeMinAngleX:     -45     // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
  gyroscopeMaxAngleX:     45      // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
  gyroscopeMinAngleY:     -45     // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
  gyroscopeMaxAngleY:     45      // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
}
 */
