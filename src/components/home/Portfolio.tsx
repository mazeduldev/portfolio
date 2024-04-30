import React from "react";
import cn from "classnames";
import classes from "./Portfolio.module.scss";
import GlassyCard from "../ui/glassy-card/GlassyCard";
import Tag from "../ui/tag/Tag";
import Image from "next/image";
import { Project } from "../../model/project";
import {
  FaAngular,
  FaAws,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiSpring, SiTypescript } from "react-icons/si";
import { getProjects } from "@/actions/getProjects";

interface PortfolioProps {
  id: string;
}

const Portfolio: React.FC<PortfolioProps> = async ({ id }: PortfolioProps) => {
  const projects = await getProjects();

  return (
    <section id={id} className={cn("bg", classes.starDark, "py-24")}>
      {techLogos}

      <div className={classes.portfolioContainer}>
        <div className="title-container dark">
          <h2 className="title">Portfolio</h2>
          <h3 className="subtitle">My works</h3>
        </div>
        <div className={classes.content}>
          {projects.map((project: Project, idx: number) => (
            <GlassyCard key={`card_${idx}`}>
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                placeholder={project.imagePlaceholder ?? "blur"}
                width={300}
                className={classes.cardImage}
              />
              <div className={classes.cardBody}>
                <h4 className={classes.cardTitle}>{project.title}</h4>
                <p className={classes.cardDescription}>{project.description}</p>
                <div className={classes.cardTagContainer}>
                  {project.tags.map((tag: string, tag_idx: number) => (
                    <Tag key={`card_${idx}_tag_${tag_idx}`}>{tag}</Tag>
                  ))}
                </div>
                {(project.sourceUrl ||
                  project.demoUrl ||
                  project.liveUrl ||
                  project.articleUrl) && (
                  <div className={classes.cardButtonContainer}>
                    {project.sourceUrl && (
                      <a
                        className={classes.cardButton}
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        className={classes.cardButton}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live URL
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        className={classes.cardButton}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo URL
                      </a>
                    )}
                    {project.articleUrl && (
                      <a
                        className={classes.cardButton}
                        href={project.articleUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </a>
                    )}
                  </div>
                )}
              </div>
            </GlassyCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

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
  <FaAws
    key={"logo_7"}
    style={{ color: "#DF8B00" }}
    className={classes.techLogo}
  />,
  <FaSass
    key={"logo_8"}
    style={{ color: "#C76494" }}
    className={classes.techLogo}
  />,
  <FaJs
    key={"logo_9"}
    style={{ color: "#F7DF1E" }}
    className={classes.techLogo}
  />,
  <SiTypescript
    key={"logo_10"}
    style={{ color: "#2F74C0" }}
    className={classes.techLogo}
  />,
  <SiSpring
    key={"logo_11"}
    style={{ color: "#5FB832" }}
    className={classes.techLogo}
  />,
  <FaJava
    key={"logo_12"}
    style={{ color: "#5382A1" }}
    className={classes.techLogo}
  />,
  <SiMysql
    key={"logo_13"}
    style={{ color: "#DF8B00" }}
    className={classes.techLogo}
  />,
];
