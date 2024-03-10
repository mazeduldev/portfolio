import React from "react";
import About from "@/components/about";
import Cover from "@/components/cover";
import Experience from "@/components/experience";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
import Contact from "./Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Fullstack software engineer experienced in JavaScript, Typescript, ReactJS, Next.js, Angular, NodeJS, Express, Java, Spring-boot, Python, FastAPI, CI/CD pipeline, Docker, Kubernetes, Microservice, MySQL, MongoDB, Postgres, DynamoDB, AWS, Azure, GCP etc. for Web Development.",
};

export default function HomePage() {
  return (
    <main>
      <Cover id="home" />
      <Portfolio id="portfolio" />
      <Experience id="experience" />
      <About id="about" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}
