import React from "react";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Image from "next/image";
import classes from "./experience.module.scss";
import Tag from "./ui/tag";
import { WorkExperience } from "../model/work-experience";
import TimeUtil from "../services/timeUtil";
import vantageLogo from "../public/images/vantage.webp";
import impelLogo from "../public/images/impel.webp";
import relisourceLogo from "../public/images/relisource.webp";
import orbitaxLogo from "../public/images/orbitax.webp";
import liilabLogo from "../public/images/liilab.webp";

interface ExperienceProps {
  id: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }: ExperienceProps) => {
  const contentStyle = {
    color: "#111",
    borderTop: "3px solid #1763A6",
  };

  const timelineElements = experiences.map(
    (exp: WorkExperience, idx: number) => {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date={TimeUtil.formatDuration(exp.duration)}
          dateClassName={classes.date}
          iconClassName={classes.iconStyle}
          icon={<MdWork />}
          key={`element_${idx}`}
        >
          <div className={classes.contentContainer}>
            <div className={classes.headerContainer}>
              <div className={classes.logoContainer}>
                <a href={exp.company.website} target="_blank" rel="noreferrer">
                  <Image
                    src={exp.company.logoPath}
                    alt={exp.company.logoAlt}
                    placeholder="blur"
                    width={60}
                    height={60}
                    layout="responsive"
                    className={classes.logo}
                  />
                </a>
              </div>
              <div className={classes.titleContainer}>
                <div
                  className={`vertical-timeline-element-title ${classes.elementTitle}`}
                >
                  <strong>{exp.title}</strong>
                </div>
                <a
                  className={`vertical-timeline-element-subtitle ${classes.elementSubtitle}`}
                  href={exp.company.website ? exp.company.website : "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{exp.company.name}</strong>
                </a>
              </div>
            </div>

            <div className={classes.elementBody}>
              <p>{exp.description.title}</p>
              <ul className={classes.ul}>
                {exp.description.points.map((point: string, p_idx: number) => (
                  <li key={`element_${idx}_point_${p_idx}`}>{point}</li>
                ))}
              </ul>
            </div>

            <div className={classes.tagContainer}>
              {exp.tags.map((tag: string, t_idx: number) => (
                <Tag key={`element_${idx}_tag_${t_idx}`}>{tag}</Tag>
              ))}
            </div>
          </div>
        </VerticalTimelineElement>
      );
    }
  );

  return (
    <section id={id} className="bg semi-light">
      <div className="container">
        <div className="title-container light">
          <h2 className="title">Experience</h2>
          <h3 className="subtitle">My jobs</h3>
        </div>

        <div className={classes.content}>
          <VerticalTimeline className={classes.verticalTimeline}>
            {timelineElements}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;

const experiences: WorkExperience[] = [
  {
    company: {
      name: "Vantage Labs LLC",
      logoPath: vantageLogo,
      logoAlt: "Vantage",
      website: "https://www.vantage.com/",
    },
    title: "Software Engineer (full-stack)",
    description: {
      title:
        "Remotely working as a full-stack engineer with a multicultural international team",
      points: [
        "Implementing admin dashboard for e-commerce websites using ReactJS, Redux, Material UI, Spring-boot, Jhipster, Keycloak, Postgres, etc.",
        "Working with an Agile team, following Scrum practices, and maintaining Kanban board in Jira.",
      ],
    },
    tags: ["spring-boot", "java", "reactjs", "redux", "typescript", "postgres"],
    duration: {
      start: new Date("21/may/2022"),
      end: null,
    },
  },
  {
    company: {
      name: "Impel IT Solutions",
      logoPath: impelLogo,
      logoAlt: "Impel",
      website: "http://www.impelitsolutions.com/",
    },
    title: "Software Engineer (full-stack)",
    description: {
      title: "Remotely worked as a full-stack software engineer for Atmetis.nl",
      points: [
        "Developed Risk Management & Valuation, Enterprise Application for our client using Java, Spring-boot, JPA, Hibernate, MySQL and Angular",
        "Implemented web service using Flask framework of Python for parsing csv or xlsx files submitted by our end users",
        "Proactively introduced CI/CD pipeline to team members and implemented automated deployment system for our Maven application using GitLab CI/CD Pipeline",
      ],
    },
    tags: [
      "spring-boot",
      "java",
      "angular",
      "mysql",
      "ci/cd pipeline",
      "docker",
    ],
    duration: {
      start: new Date("01/mar/2020"),
      end: new Date("20/may/2022"),
    },
  },
  {
    company: {
      name: "Relisource Technologies Ltd.",
      logoPath: relisourceLogo,
      logoAlt: "Relisource",
      website: "https://www.relisource.com/",
    },
    title: "Web Developer (salesforce)",
    description: {
      title: "Worked as a full-stack software developer",
      points: [
        "Developed Web application in Salesforce platform using APEX, Visualforce and SOQL",
        "Refactored and modernized existing Javascript code base of AngularJS application",
        "Participated in code reviews as a reviewer",
        "Mentored junior co-workers",
      ],
    },
    tags: ["salesforce", "angularjs", "javascript", "html", "css"],
    duration: {
      start: new Date("01/aug/2019"),
      end: new Date("01/feb/2020"),
    },
  },
  {
    company: {
      name: "Orbitax Bangladesh Ltd.",
      logoPath: orbitaxLogo,
      logoAlt: "Orbitax",
      website: "https://www.orbitax.com/",
    },
    title: "Associate Software Engineer",
    description: {
      title: "Worked as a full-stack software developer",
      points: [
        "Developed robust and highly functional UI for SPA using Angular 6, NgRx and Typescript",
        "Contributed to development and bug fixing of .NET Core application in microservice based architecture",
        "Experienced in using GraphQL and REST APIs and JSON",
        "Accustomed to JIRA based project management, issue tracking and product releases",
      ],
    },
    tags: ["angular", ".net-core", "graphql", "rest-api", "ngrx", "jira"],
    duration: {
      start: new Date("01/mar/2018"),
      end: new Date("01/jul/2019"),
    },
  },
  {
    company: {
      name: "LII Lab",
      logoPath: liilabLogo,
      logoAlt: "LiiLab",
      website: "https://liilab.com/",
    },
    title: "Software Engineer (Android)",
    description: {
      title: "Worked as an Android application developer",
      points: [
        "Developed multiple image editing applications using Android SDK and open source libraries",
        "Implemented automatic similar color removal feature using Flood Fill algorithm",
      ],
    },
    tags: ["android", "java"],
    duration: {
      start: new Date("01/aug/2017"),
      end: new Date("01/feb/2018"),
    },
  },
];
