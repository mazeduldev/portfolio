import React from "react";
import { Metadata } from "next";
import Cover from "@/components/home/Cover";
import Experience from "@/components/home/Experience";
import Portfolio from "@/components/home/Portfolio";
import Footer from "@/components/home/Footer";
import Contact from "@/components/home/contact/Contact";
import About from "@/components/home/About";

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
