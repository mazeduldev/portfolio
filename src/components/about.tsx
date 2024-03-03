import React from "react";
import classes from "./about.module.scss";
import Image from "next/image";
import TypingAnimation from "./typing-animation";
import myImage from "../../public/images/me.webp";

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
              Dynamic and results-oriented Software Engineer with a diverse
              background spanning backend and frontend development, specializing
              in JavaScript technologies.
            </p>
            <p>
              Proven expertise in architecting and implementing scalable
              solutions, such as an Event-Driven architecture for VoIP calling
              systems and security enhancements for web applications.
            </p>
            <p>
              Adept at leveraging a wide array of technologies, including React,
              Next.js, Angular, Node.js, Express.js, Spring-boot, and cloud
              services like AWS, Azure, and GCP.
            </p>
            <p>
              Experienced in Agile methodologies and fostering team growth
              through active participation in code reviews and continuous skill
              enhancement.
            </p>
            <p>
              Holds a Bachelor of Science in Computer Science and Engineering
              from the{" "}
              <a href="https://www.cse.du.ac.bd/">University of Dhaka</a>.
            </p>
            <p>
              Passionate about innovation and delivering high-quality software
              solutions that drive business value.
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
