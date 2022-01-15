import Link from "next/link";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import classes from "./cover.module.scss";
import TypingAnimation from "./typing-animation";

const myTitles = ["Software Engineer", "Web Developer", "Fullstack Developer"];

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
          I&apos;m a<TypingAnimation texts={myTitles}></TypingAnimation>
        </div>
        <Link href={{ pathname: "/", hash: "#portfolio" }} passHref>
          <a>
            <FaArrowDown className={classes.arrow}></FaArrowDown>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Cover;
