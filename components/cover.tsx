import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import classes from "./cover.module.scss";
import TypingAnimation from "./typing-animation";

const myTitles = ["Software Engineer", "Web Developer", "Fullstack Developer"];

const Cover = (props) => {
  return (
    <section id={props.id} className={classes.cover}>
      <div className={`container ${classes.coverContent}`}>
        <div className={classes.text1}>Hello, my name is</div>
        <div className={classes.text2}>Mazedul Islam</div>
        <div className={classes.text3}>
          And I'm a<TypingAnimation texts={myTitles}></TypingAnimation>
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
