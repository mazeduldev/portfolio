import React from "react";
import classes from "./about.module.scss";
import Image from "next/image";
import TypingAnimation from "./typing-animation";
import myImage from "../public/images/me.webp";

const myTitles = ["Software Engineer", "Web Developer", "Fullstack Developer"];

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }: AboutProps) => {
  return (
    <section id={id} className="bg dark">
      <div className="container">
        <div className="title-container dark">
          <h2 className="title">About me</h2>
          <h3 className="subtitle">Who I am</h3>
        </div>
        <div className={classes.content}>
          <div className={classes.proPic}>
            <Image
              src={myImage}
              alt="Mazid"
              placeholder="blur"
              width={350}
              height={350}
              className={classes.rounded}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className={classes.description}>
            <div className={classes.descriptionTitle}>
              I&apos;m Mazedul, <br className={classes.br}></br>{" "}
              <TypingAnimation texts={myTitles}></TypingAnimation>
            </div>
            <p>
              Fullstack Software Engineer with a demonstrated history of working
              in the computer software industry. Skilled in JavaScript,
              Typescript, Angular, ReactJS, NodeJS, Express, Java, Spring-boot,
              Python, FastAPI, CI/CD pipeline, Docker, Kubernetes, Microservice,
              MySQL, MongoDB etc. for Web Development. Strong engineering
              professional with a Bachelor of Science focused in Computer
              Science and Engineering from{" "}
              <a href="https://www.cse.du.ac.bd/">University of Dhaka</a>.
            </p>
            <a
              href="/files/Mohammad_Mazedul_Islam.pdf"
              download="Resume__Mohammad_Mazedul_Islam.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
