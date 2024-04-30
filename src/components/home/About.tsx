import React from "react";
import classes from "./About.module.scss";
import Image from "next/image";
import myImage from "@/public/images/me.webp";
import TypeMyTitle from "./TypeMyTitle";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface AboutProps {
  id: string;
}

const recommendations = [
  {
    imageUrl:
      "https://media.licdn.com/dms/image/D5603AQFqIkSM8sFetQ/profile-displayphoto-shrink_100_100/0/1699890032578?e=1720051200&v=beta&t=uxBdBIobmrSJrTi6zhMUtPb5WnSKwYUbtM4DRnWv2xI",
    profileUrl: "https://www.linkedin.com/in/zlnaing",
    name: "Zaw Lin Naing",
    title: "Software Engineer",
    date: "April 29, 2024",
    relation: "Zaw Lin worked with Mazedul on the same team",
    body: "I had the opportunities to work with Mazedul in both Brikl and Oozou. During that time, Mazedul displayed excellent technical skills, problem-solving abilities, and dedication to delivering high-quality work. Throughout our collaboration, Mazedul demonstrated exceptional proficiency in React.js, Node.js, and Javascript ecosystem for both front-end and back-end development. He possesses a strong understanding of software development principles and consistently applies best practices to produce efficient and scalable solutions. Moreover, he is a valuable team player who communicates effectively and is always willing to lend a helping hand proactively. He has the technical expertise, work ethic, and interpersonal skills necessary to thrive in today's dynamic work environment.",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/C5603AQHrNRybPHv2Gw/profile-displayphoto-shrink_100_100/0/1516806424381?e=1720051200&v=beta&t=6BhkUPJaGrfkqweET2K-12ZTVTRw7cho5K_FiuH219g",
    profileUrl: "https://www.linkedin.com/in/multilemon",
    name: "Kirati Likitsaichon",
    title: "Android Developer | Team Leader",
    date: "April 26, 2024",
    relation: "Kirati worked with Mazedul on the same team",
    body: "I had the pleasure of working alongside Mazedul on a challenging hospital application project. While our time collaborating was brief, I was impressed by his work ethic, technical skills, and positive attitude as he tackled the project's backend tasks as a full-stack developer.  The project involved integrating a legacy system with a newly built one, which presented its own set of challenges. Mazedul's positive attitude and timely completion of tasks ensured a smooth workflow for the project, even though we weren't directly paired on coding. In short, Mazedul is a reliable developer with a positive attitude. I have no doubt he would be a valuable asset to any team.",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/C5603AQFVEvEvBSeHwQ/profile-displayphoto-shrink_100_100/0/1603813545517?e=1720051200&v=beta&t=_LLeba0mV4jSMAsaBMgPgEU6M7Hba235hRjLDfJeucA",
    profileUrl: "https://www.linkedin.com/in/nitanta-adhikari",
    name: "Nitanta Adhikari",
    title: "iOS Developer at OOZOU",
    date: "April 24, 2024",
    relation: "Nitanta worked with Mazedul on the same team",
    body: "I highly recommend Mazedul for his exceptional talent, hard work, and professionalism. He consistently goes above and beyond, yet remains humble and approachable. Mazedul is a true asset to any team or organization.",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/C4D03AQEOshhQW9-nIg/profile-displayphoto-shrink_100_100/0/1641402075986?e=1720051200&v=beta&t=Uaoq9UnfY56COFZvuMLCKG8IYEH42hsVM_CIlANJvJ4",
    profileUrl: "https://www.linkedin.com/in/livia-delea-7626abab",
    name: "Livia Delea",
    title: "Development Team Lead la Vantage Labs",
    date: "March 18, 2024",
    relation: "Livia worked with Mazedul on the same team",
    body: "Mazedul is a talented software engineer very efficient on both, fronted and backed aspects of the development. He was a great addition to Vantage development team.  I worked with Mazedul on a project using AWS audio to text transcription service and I was very impressed with his work. I recommend him as a full-stack developer.",
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQGzmwJ2lPD5vQ/profile-displayphoto-shrink_100_100/0/1517710937576?e=1720051200&v=beta&t=QIx2X_25idsTymeBsbxp3Xct18M9dQfr5OJoOnDz8Ho",
    profileUrl: "https://www.linkedin.com/in/marcel-buchner-762a7a6",
    name: "Marcel Buchner",
    title: "Mede-eigenaar bij AtMetis BV",
    date: "September 21, 2022",
    relation: "Marcel was Mazedul’s client",
    body: "We have been working closely together and created beautiful solutions. Quick learner and an asset to our team👍",
  },
];

const About: React.FC<AboutProps> = ({ id }: AboutProps) => {
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
              <Card key={`recommendation_${idx}`}>
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
                    href="https://www.linkedin.com/in/mazedul-islam/details/recommendations/?detailScreenTabIndex=0"
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
