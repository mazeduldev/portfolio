"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import TypeMyTitle from "./TypeMyTitle";
import classes from "./Cover.module.scss";
import cn from "classnames";

interface CoverProps {
  id: string;
}

const Cover: React.FC<CoverProps> = ({ id }: CoverProps) => {
  return (
    <section id={id} className={cn(classes.cover, "py-24")}>
      <div className={`container ${classes.coverContent}`}>
        <div className={classes.text1}>Hello, my name is</div>
        <div className={classes.text2}>Mazedul Islam</div>
        <div className={classes.text3}>
          I&apos;m a <TypeMyTitle />
        </div>
        <Link
          to="portfolio"
          offset={-64}
          duration={200}
          className={classes.arrow}
        >
          <FaArrowDown></FaArrowDown>
        </Link>
      </div>
    </section>
  );
};

export default Cover;
