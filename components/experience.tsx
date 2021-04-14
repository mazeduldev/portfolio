import React from "react"
import { MdWork } from "react-icons/md"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import Image from 'next/image'
import classes from "./experience.module.scss"
import Tag from "./ui/tag"

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
    <section id={props.id} className="bg semi-light">
      <div className="container">
        <div className="title-container light">
          <h2 className="title">Experience</h2>
          <h3 className="subtitle">My jobs</h3>
        </div>

        <div className={classes.content}>
          <VerticalTimeline className={classes.verticalTimeline}>
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

                <div className={classes.headerContainer}>
                  <div className={classes.logoContainer}>
                    <Image
                      src="/images/impel.png"
                      alt="Impel"
                      width={100}
                      height={50}
                      layout="responsive"
                    />
                  </div>
                  <div className={classes.titleContainer}>
                    <div className={`vertical-timeline-element-title ${classes.elementTitle}`}>
                      <strong>Full-Stack Web Developer</strong>
                    </div>
                    <div className={`vertical-timeline-element-subtitle ${classes.elementSubtitle}`}>
                      <strong>Impel IT Solutions</strong>
                    </div>
                  </div>
                </div>

                <div className={classes.elementBody}>
                  <p>Working as a full-stack software engineer:</p>
                  <ul className={classes.ul}>
                    <li>Designing and developing REST APIs using Java, Spring-boot, JPA, Hibernate and QueryDSL</li>
                    <li>Developing multi language supported client application using Typescript and Angular 9</li>
                    <li>Writing automated tests for Angular application using Jasmine and Karma</li>
                  </ul>
                </div>

                <div className={classes.tagContainer}>
                  <Tag>spring-boot</Tag>
                  <Tag>java</Tag>
                  <Tag>angular</Tag>
                  <Tag>bootstrap</Tag>
                  <Tag>mysql</Tag>
                  <Tag>querydsl</Tag>
                </div>

              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Experience
