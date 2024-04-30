"use client";
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { WorkExperience } from "@/model/work-experience";
import ExperienceElement from "./ExperienceElement";
import classes from "./ExperienceTimeline.module.scss";

type ExperienceTimelineProps = {
  experiences: WorkExperience[];
};

function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <VerticalTimeline
      className={classes.verticalTimeline}
      layout="1-column"
      lineColor=""
    >
      {experiences.map((exp: WorkExperience, idx: number) => (
        <ExperienceElement exp={exp} key={idx} />
      ))}
    </VerticalTimeline>
  );
}

export default ExperienceTimeline;
