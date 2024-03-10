import React from "react";
import classes from "./portfolio.module.scss";
import Card from "./ui/Card";
import Tag from "./ui/Tag";
import Image from "next/image";
import { Project } from "../model/project";
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
import crTrackerImage from "../../public/images/cr_tracker.webp";
import timelineImage from "../../public/images/timeline_collage.webp";
import bsSpacingImage from "../../public/images/bs_spacing.webp";
import portfolioImage from "../../public/images/portfolio_cover.webp";
import slimwikiImage from "../../public/images/slimwiki.svg";
import briklStorefrontImage from "../../public/images/brikl_storefront.webp";

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
                placeholder={project.imagePlaceholder ?? "blur"}
                width={300}
                height={200}
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const projects: Project[] = [
  // {
  //   title: "MediaLib",
  //   description:
  //     "Display popular movies, TV shows and Animes using TMDB and Anilist API connected with GraphQL.",
  //   sourceUrl: "https://github.com/mazid1/media-lib",
  //   demoUrl: "https://media-lib-mzd.vercel.app/",
  //   imageUrl: mediaLibImage,
  //   imageAlt: "MediaLib",
  //   tags: ["nextjs", "graphql", "prisma"],
  //   type: "project",
  // },
  {
    title: "OOZOU | SlimWiki",
    description: "Easy-to-use Wikis for Teams & Individuals",
    liveUrl: "https://beta.slimwiki.com",
    imageUrl: slimwikiImage,
    imagePlaceholder: "empty",
    imageAlt: "SlimWiki",
    tags: ["reactjs", "nextjs", "nodejs", "postgres", "dynamodb", "aws"],
  },
  {
    title: "Brikl | Storefront",
    description: "Create your own storefront under 15 minutes.",
    liveUrl: "https://brikl.com",
    imageUrl: briklStorefrontImage,
    imageAlt: "Brikl-Storefront",
    tags: ["reactjs", "nextjs", "jotai", "netlify"],
  },
  {
    title: "Orbitax | Change Reports Tracker",
    description:
      "Track worldwide tax law changes daily across 50 different tax topics.",
    demoUrl: "https://youtu.be/yc73lMz5zJk?si=923YBlqf2fMKbWi-",
    articleUrl: "https://orbitax.com/solutions/change-reports-tracker",
    imageUrl: crTrackerImage,
    imageAlt: "Change Reports Tracker",
    tags: ["angular", "angular-material", "ngrx"],
  },
  {
    title: "ngx-mzd-timeline",
    description:
      "Angular material theme supported minimalist's vertical timeline library for Angular applications.",
    sourceUrl: "https://github.com/mazid1/ngx-mzd-timeline",
    liveUrl: "https://mazid1.github.io/ngx-mzd-timeline/",
    imageUrl: timelineImage,
    imageAlt: "Timeline",
    tags: ["angular", "angular-material"],
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio website developed using reactjs and nextjs.",
    liveUrl: "#",
    imageUrl: portfolioImage,
    imageAlt: "Portfolio",
    tags: ["reactjs", "nextjs", "vercel"],
  },
  {
    title: "bs-spacing",
    description:
      "An article on how to generate bootstrap like spacing classes using Sass.",
    sourceUrl: "https://github.com/mazid1/bs-spacing",
    articleUrl:
      "https://dev.to/mazid1/generate-bootstrap-like-spacing-classes-using-sass-49g8",
    imageUrl: bsSpacingImage,
    imageAlt: "Timeline",
    tags: ["sass", "scss", "css"],
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
