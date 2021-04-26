import React from "react";
import classes from "./portfolio.module.scss";
import Button from "./ui/button";
import Card from "./ui/card";
import Image from "next/image";
import Tag from "./ui/tag";
import { Project } from "../model/project";
import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiSpring, SiTypescript } from "react-icons/si";

interface PortfolioProps {
  id: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ id }: PortfolioProps) => {
  return (
    <section id={id} className={`bg ${classes.starDark}`}>
      {techLogos}

      <div className={classes.portfolioContainer}>
        <div className="title-container dark">
          <h2 className="title">Portfolio</h2>
          <h3 className="subtitle">My works</h3>
        </div>
        <div className={classes.content}>
          {projects.map((project: Project, idx: number) => (
            <Card key={`card_${idx}`}>
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                width={300}
                height={200}
                layout="intrinsic"
                className={classes.cardImage}
              />
              <div className={classes.cardBody}>
                <h5 className={classes.cardTitle}>{project.title}</h5>
                <p className={classes.cardDescription}>{project.description}</p>
                <div className={classes.cardTagContainer}>
                  {project.tags.map((tag: string, tag_idx: number) => (
                    <Tag key={`card_${idx}_tag_${tag_idx}`}>{tag}</Tag>
                  ))}
                </div>
                {project.sourceUrl || project.demoUrl ? (
                  <div className={classes.cardButtonContainer}>
                    {project.sourceUrl ? (
                      <Button classNames={classes.cardButton}>
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                      </Button>
                    ) : null}
                    {project.demoUrl ? (
                      <Button classNames={classes.cardButton}>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </Button>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const projects: Project[] = [
  {
    title: "Vertical Timeline",
    description:
      "Angular material theme supported minimalist's vertical timeline library for Angular applications.",
    sourceUrl: "https://github.com/mazid1/ngx-mzd-timeline",
    demoUrl: "https://mazid1.github.io/ngx-mzd-timeline/",
    imageUrl: "/images/timeline_collage.png",
    imageAlt: "Timeline",
    tags: ["angular", "angular-material"],
  },
];

const techLogos = [
  <FaAngular
    key={"logo_1"}
    style={{ color: "#D6002F" }}
    className={classes.techLogo}
  />,
  <FaReact
    key={"logo_2"}
    style={{ color: "#61DAFB" }}
    className={classes.techLogo}
  />,
  <FaNodeJs
    key={"logo_3"}
    style={{ color: "#5E9A59" }}
    className={classes.techLogo}
  />,
  <SiMongodb
    key={"logo_4"}
    style={{ color: "#4CA449" }}
    className={classes.techLogo}
  />,
  <FaCss3Alt
    key={"logo_5"}
    style={{ color: "#2862E9" }}
    className={classes.techLogo}
  />,
  <FaHtml5
    key={"logo_6"}
    style={{ color: "#E96228" }}
    className={classes.techLogo}
  />,
  <FaSass
    key={"logo_7"}
    style={{ color: "#C76494" }}
    className={classes.techLogo}
  />,
  <FaJs
    key={"logo_8"}
    style={{ color: "#F7DF1E" }}
    className={classes.techLogo}
  />,
  <SiTypescript
    key={"logo_9"}
    style={{ color: "#2F74C0" }}
    className={classes.techLogo}
  />,
  <SiSpring
    key={"logo_10"}
    style={{ color: "#5FB832" }}
    className={classes.techLogo}
  />,
  <FaJava
    key={"logo_11"}
    style={{ color: "#5382A1" }}
    className={classes.techLogo}
  />,
  <SiMysql
    key={"logo_12"}
    style={{ color: "#DF8B00" }}
    className={classes.techLogo}
  />,
];
