import React from "react";
import { MdWork } from "react-icons/md";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import classes from "./ExperienceElement.module.scss";
import { Tag } from "@/components/ui";
import TimeUtil from "@/utils/timeUtil";
import { WorkExperience } from "@/model/work-experience";

type ExperienceElementProps = {
  exp: WorkExperience;
};

function ExperienceElement(props: ExperienceElementProps) {
  const { exp } = props;
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <VerticalTimelineElement
      visible={inView}
      contentStyle={{
        color: "#222",
        borderTop: "3px solid #1763A6",
        background: "linear-gradient(135deg, #F7FAFC, #DFF1FE)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #F7FAFC" }}
      date={TimeUtil.formatDuration(exp.duration)}
      dateClassName={classes.date}
      iconClassName={classes.iconStyle}
      icon={<MdWork />}
    >
      <div className={classes.contentContainer} ref={ref}>
        <div className={classes.headerContainer}>
          <div className={classes.logoContainer}>
            <a href={exp.company.website} target="_blank" rel="noreferrer">
              <Image
                src={exp.company.logoPath}
                alt={exp.company.logoAlt}
                placeholder="blur"
                width={60}
                height={60}
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
              <li key={`element_point_${p_idx}`}>{point}</li>
            ))}
          </ul>
        </div>

        <div className={classes.tagContainer}>
          {exp.tags.map((tag: string, t_idx: number) => (
            <Tag key={`element_tag_${t_idx}`}>{tag}</Tag>
          ))}
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default ExperienceElement;
