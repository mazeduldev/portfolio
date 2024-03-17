"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import classes from "./Cover.module.scss";
import TypeMyTitle from "./TypeMyTitle";

interface CoverProps {
  id: string;
}

const Cover: React.FC<CoverProps> = ({ id }: CoverProps) => {
  return (
    <section id={id} className={classes.cover}>
      <div className={`container ${classes.coverContent}`}>
        <div className={classes.text1}>Hello, my name is</div>
        <div className={classes.text2}>Mazedul Islam</div>
        <div className={classes.text3}>
          I&apos;m a <TypeMyTitle />
        </div>
        <Link
          to="portfolio"
          smooth={true}
          offset={-64}
          className={classes.arrow}
        >
          <FaArrowDown></FaArrowDown>
        </Link>
      </div>
    </section>
  );
};

export default Cover;
