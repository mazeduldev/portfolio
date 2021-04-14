import React from "react";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Image from "next/image";
import classes from "./experience.module.scss";
import Tag from "./ui/tag";

interface Company {
  name: string;
  logoPath: string;
  logoAlt: string;
}
interface Description {
  title: string;
  points: string[];
}
interface Duration {
  start: Date;
  end: Date;
}
interface Experience {
  title: string;
  company: Company;
  description: Description;
  tags: string[];
  duration: Duration;
}

const experiences: Experience[] = [
  {
    company: {
      name: "Impel IT Solutions",
      logoPath: "/images/impel.png",
      logoAlt: "Impel",
    },
    title: "Full-Stack Web Developer",
    description: {
      title: "Working as a full-stack software engineer:",
      points: [
        "Designing and developing REST APIs using Java, Spring-boot, JPA, Hibernate and QueryDSL",
        "Developing multi language supported client application using Typescript and Angular 9",
        "Writing automated tests for Angular application using Jasmine and Karma",
      ],
    },
    tags: ["spring-boot", "java", "angular", "mysql", "querydsl"],
    duration: {
      start: new Date("01/03/2020"),
      end: null
    }
  },
];

const getMonth = (date: Date): string => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return months[date.getMonth()]
}

const formatDuration = (duration: Duration): string => {
  const start = `${getMonth(duration.start)} ${duration.start.getFullYear()}`
  if (!duration.end) {
    return `${start} - Present`
  }
  const end = `${getMonth(duration.end)} ${duration.start.getFullYear()}`
  return `${start} - ${end}`
}

const Experience = (props) => {
  const lightCrimson = "#FF8289";

  const contentStyle = {
    color: "#111",
    borderTop: `3px solid ${lightCrimson}`,
  };

  const iconStyle = {
    background: lightCrimson,
    color: "#fff",
  };

  const timelineElements = experiences.map(
    (exp: Experience, idx: number) => {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={contentStyle}
          contentArrowStyle={{ borderRight: "7px solid #fff" }}
          date={formatDuration(exp.duration)}
          dateClassName={classes.date}
          iconStyle={iconStyle}
          icon={<MdWork />}
          key={`element_${idx}`}
        >
          <div className={classes.contentContainer}>
            <div className={classes.headerContainer}>
              <div className={classes.logoContainer}>
                <Image
                  src={exp.company.logoPath}
                  alt={exp.company.logoAlt}
                  width={100}
                  height={50}
                  layout="responsive"
                />
              </div>
              <div className={classes.titleContainer}>
                <div className={`vertical-timeline-element-title ${classes.elementTitle}`}>
                  <strong>{exp.title}</strong>
                </div>
                <div className={`vertical-timeline-element-subtitle ${classes.elementSubtitle}`}>
                  <strong>{exp.company.name}</strong>
                </div>
              </div>
            </div>

            <div className={classes.elementBody}>
              <p>{exp.description.title}</p>
              <ul className={classes.ul}>
                {
                  exp.description.points.map((point: string, p_idx: number) => (
                    <li key={`element_${idx}_point_${p_idx}`}>{point}</li>
                  ))
                }
              </ul>
            </div>

            <div className={classes.tagContainer}>
              {
                exp.tags.map((tag: string, t_idx: number) => (
                  <Tag key={`element_${idx}_tag_${t_idx}`}>{tag}</Tag>
                ))
              }
            </div>
          </div>
        </VerticalTimelineElement>
      );
    }
  );

  return (
    <section id={props.id} className="bg semi-light">
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
