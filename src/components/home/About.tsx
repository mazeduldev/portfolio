import React from "react";
import classes from "./About.module.scss";
import Image from "next/image";
import myImage from "@/public/images/me.webp";
import TypeMyTitle from "./TypeMyTitle";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getRecommendations } from "@/actions/getRecommendations";

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = async ({ id }: AboutProps) => {
  const { recommendationPageUrl, recommendations } = await getRecommendations();
  return (
    <>
      <section id={id} className="bg dark py-24">
        <div className="container">
          <div className="title-container dark">
            <h2 className="title">About me</h2>
            <h3 className="subtitle">Who I am</h3>
          </div>
          <div className={classes.content}>
            <div className={classes.proPic}>
              <Image
                src={myImage}
                alt="Mazid"
                placeholder="blur"
                width={350}
                height={350}
                className={classes.rounded}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className={classes.description}>
              <div className={classes.descriptionTitle}>
                I&apos;m Mazedul, <br className={classes.br}></br>{" "}
                <TypeMyTitle />
              </div>
              <p>
                Dynamic and results-oriented Software Engineer with a diverse
                background spanning backend and frontend development,
                specializing in JavaScript technologies.
              </p>
              <p>
                Proven expertise in architecting and implementing scalable
                solutions, such as an Event-Driven architecture for VoIP calling
                systems and security enhancements for web applications.
              </p>
              <p>
                Adept at leveraging a wide array of technologies, including
                React, Next.js, Angular, Node.js, Express.js, Spring-boot, and
                cloud services like AWS, Azure, and GCP.
              </p>
              <p>
                Experienced in Agile methodologies and fostering team growth
                through active participation in code reviews and continuous
                skill enhancement.
              </p>
              <p>
                Holds a Bachelor of Science in Computer Science and Engineering
                from the{" "}
                <a href="https://www.du.ac.bd/body/CSE" target="_blank">
                  University of Dhaka
                </a>
                .
              </p>
              <p>
                Passionate about innovation and delivering high-quality software
                solutions that drive business value.
              </p>
              <a
                href="/files/Mohammad_Mazedul_Islam.pdf"
                download="Resume__Mohammad_Mazedul_Islam.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="recommendations" className="bg semi-light py-24">
        <div className="container">
          <div className="title-container">
            <h2 className="title">Recommendations</h2>
            <h3 className="subtitle">What others are saying</h3>
          </div>

          <div className="mx-auto grid grid-cols-1 gap-6 px-10 md:grid-cols-2">
            {recommendations.map((recommendation, idx) => (
              <Card
                key={`recommendation_${idx}`}
                className="bg-gradient-to-br from-sky-100 to-slate-100"
              >
                <CardHeader>
                  <div className="flex flex-row items-center space-x-2">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={recommendation.imageUrl}
                        alt={recommendation.name}
                      />
                      <AvatarFallback>{`${recommendation.name
                        .split(" ")
                        .at(0)
                        ?.at(0)}${recommendation.name
                        .split(" ")
                        .at(-1)
                        ?.at(0)}`}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col mt-0">
                      <a
                        href={recommendation.profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#1763a6] font-semibold"
                      >
                        {recommendation.name}
                      </a>
                      <p className="text-[#595959] font-light text-sm">
                        {recommendation.title}
                      </p>
                    </div>
                  </div>
                  {/* <p>{recommendation.date}</p> */}
                  <a
                    className="text-[#595959] font-light text-xs ml-14"
                    target="_blank"
                    rel="noreferrer"
                    href={recommendationPageUrl}
                  >
                    {recommendation.relation}
                  </a>
                </CardHeader>
                <CardContent>{recommendation.body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
