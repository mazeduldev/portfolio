"use server";

import type { WorkExperience } from "@/model/work-experience";
import meteorWalletLogo from "@/public/images/meteor_wallet.webp";
import oozouLogo from "@/public/images/oozou.webp";
import briklLogo from "@/public/images/brikl.webp";
import impelLogo from "@/public/images/impel.webp";
import liilabLogo from "@/public/images/liilab.webp";
import orbitaxLogo from "@/public/images/orbitax.webp";
import relisourceLogo from "@/public/images/relisource.webp";
import vantageLogo from "@/public/images/vantage.webp";

export async function getExperiences() {
  const experiences: WorkExperience[] = [
    {
      company: {
        name: "Meteor Wallet",
        logoPath: meteorWalletLogo,
        logoAlt: "Meteor Wallet",
        website: "https://meteorwallet.app/",
      },
      title: "Senior Full-stack Developer (TS)",
      description: {
        title: "Building the best crypto wallet for NEAR blockchain.",
        points: [
          "● Implemented UI design system components based on Figma design using Tamagui, Expo and React-native.",
          "● Developed a secure authentication system for non-custodial wallet App supporting biometric authentication.",
          "● Integrated the NEAR blockchain API to enable wallet functionalities, including token and NFT transactions, staking, and unstaking NEAR.",
        ],
      },
      tags: [
        "react-native",
        "expo",
        "tamagui",
        "typescript",
        "blockchain",
        "near-blockchain",
        "web3",
      ],
      duration: {
        start: new Date("7/1/2024"),
        end: null,
      },
    },
    {
      company: {
        name: "OOZOU",
        logoPath: oozouLogo,
        logoAlt: "OOZOU",
        website: "https://oozou.com/",
      },
      title: "Full-stack Web Developer (JS/TS)",
      description: {
        title: "Working as a fullstack Javascript/Typescript developer.",
        points: [
          "● Implemented a highly scalable Event-Driven architecture for a VoIP calling system, integrating Twilio, Firebase Cloud Messaging (FCM), Apple Push Notification (APN), and leveraging technologies such as MongoDB, Azure Event Hubs, Azure Storage Account, Azure Functions, Azure Queue Storage, Azure JavaScript SDK, Node.js and Typescript.",
          "● Revamped SlimWiki's security with a JWT token invalidation system and expiring password reset links upon email updates using AWS DynamoDB and Postgres database.",
          "● Enhanced SlimWiki's customer onboarding experience by implementing visually appealing UI including SVG animations using React, Next.js and TailwindCSS.",
        ],
      },
      tags: [
        "nodejs",
        "mongodb",
        "dynamodb",
        "azure",
        "reactjs",
        "nextjs",
        "express",
        "koa",
      ],
      duration: {
        start: new Date("9/4/2023"),
        end: new Date("4/30/2024"),
      },
    },
    {
      company: {
        name: "Brikl",
        logoPath: briklLogo,
        logoAlt: "Brikl",
        website: "https://www.brikl.com/",
      },
      title: "Senior Software Engineer (Frontend)",
      description: {
        title:
          "Helped Brikl to implement it's e-commerce platform for setting up a shop under 15 minutes.",
        points: [
          "● Implemented many features in the Brikl dashboard to improve merchants' productivity including but not limited to bulk product upload from csv files, override suppliers' product SKU in microstore.",
          "● Practiced many agile ceremonies like scrum, sprint planning, sprint poker, sprint review, retrospective etc. to improve overall team performance.",
          "● Actively participated in code review process and provided suggestions for improving code quality. Also learned from others codes and suggestions.",
        ],
      },
      tags: ["reactjs", "nextjs", "gatsby", "graphql", "typescript", "netlify"],
      duration: {
        start: new Date("12/1/2022"),
        end: new Date("7/31/2023"),
      },
    },
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
          "● Implementing admin dashboard for e-commerce websites using ReactJS, Redux, Material UI, Spring-boot, Jhipster, Keycloak, Postgres, etc.",
          "● Working with an Agile team, following Scrum practices, and maintaining Kanban board in Jira.",
        ],
      },
      tags: [
        "spring-boot",
        "java",
        "reactjs",
        "redux",
        "typescript",
        "postgres",
      ],
      duration: {
        start: new Date("5/21/2022"),
        end: new Date("11/30/2022"),
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
        title:
          "Remotely worked as a full-stack software engineer for Atmetis.nl",
        points: [
          "● Developed Risk Management & Valuation, Enterprise Application for our client using Java, Spring-boot, JPA, Hibernate, MySQL and Angular",
          "● Implemented web service using Flask framework of Python for parsing csv or xlsx files submitted by our end users",
          "● Proactively introduced CI/CD pipeline to team members and implemented automated deployment system for our Maven application using GitLab CI/CD Pipeline",
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
        start: new Date("3/1/2020"),
        end: new Date("5/20/2022"),
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
          "● Developed Web application in Salesforce platform using APEX, Visualforce and SOQL",
          "● Refactored and modernized existing Javascript code base of AngularJS application",
          "● Participated in code reviews as a reviewer",
          "● Mentored junior co-workers",
        ],
      },
      tags: ["salesforce", "angularjs", "javascript", "html", "css"],
      duration: {
        start: new Date("8/1/2019"),
        end: new Date("2/1/2020"),
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
          "● Developed robust and highly functional UI for SPA using Angular 6, NgRx and Typescript",
          "● Contributed to development and bug fixing of .NET Core application in microservice based architecture",
          "● Experienced in using GraphQL and REST APIs and JSON",
          "● Accustomed to JIRA based project management, issue tracking and product releases",
        ],
      },
      tags: ["angular", ".net-core", "graphql", "rest-api", "ngrx", "jira"],
      duration: {
        start: new Date("3/1/2018"),
        end: new Date("7/1/2019"),
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
          "● Developed multiple image editing applications using Android SDK and open source libraries",
          "● Implemented automatic similar color removal feature using Flood Fill algorithm",
        ],
      },
      tags: ["android", "java"],
      duration: {
        start: new Date("8/1/2017"),
        end: new Date("2/1/2018"),
      },
    },
  ];
  return experiences;
}
