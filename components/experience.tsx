import React from "react"
import { MdWork } from "react-icons/md"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import Image from 'next/image'
import classes from "./experience.module.scss"

const Experience = (props) => {
  const lightCrimson = "#FF8289"

  const contentStyle = {
    color: "#111",
    borderTop: `3px solid ${lightCrimson}`,
  }

  const iconStyle = {
    background: lightCrimson,
    color: "#fff"
  }

  return (
    <section id={props.id} className="bg-dark">
      <div className="container">
        <div className="title-container">
          <h2 className="title">Experience</h2>
          <h3 className="subtitle">My jobs</h3>
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={contentStyle}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="2011 - present"
            dateClassName={classes.date}
            iconStyle={iconStyle}
            icon={<MdWork />}
          >
            <div className={classes.contentContainer}>
              <div className={classes.logoContainer}>
                <Image
                  src="/images/impel.png"
                  alt="Impel"
                  width={100}
                  height={55}
                  layout="responsive"
                />
              </div>
              <div>
                <h3 className="vertical-timeline-element-title">
                  Full-Stack Web Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Impel IT Solutions
                </h4>
                <p>Working as a full-stack software engineer:</p>
                <ul className={classes.ul}>
                  <li>Designing and developing REST APIs using Java, Spring-boot, JPA, Hibernate and QueryDSL</li>
                  <li>Developing multi language supported client application using Typescript and Angular 9</li>
                  <li>Writing automated tests for Angular application using Jasmine and Karma</li>
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience
