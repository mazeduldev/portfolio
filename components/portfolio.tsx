import React from "react";
import classes from "./portfolio.module.scss";
import Button from "./ui/button";
import Card from "./ui/card";
import Image from "next/image";
import Tag from "./ui/tag";
import { Project } from "../model/project";

const Portfolio = (props) => {
  return (
    <section id={props.id} className={`bg ${classes.starDark}`}>
      <div className={classes.background}></div>
      <div className={classes.midground}></div>
      <div className={classes.foreground}></div>

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
                      <Button classes={classes.cardButton}>
                        <a
                          href={project.sourceUrl}
                          target="blank"
                        >
                          Source Code
                      </a>
                      </Button>
                    ) : null}
                    {project.demoUrl ? (
                      <Button classes={classes.cardButton}>
                        <a
                          href={project.demoUrl}
                          target="blank"
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
