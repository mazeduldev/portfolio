import { NextSeo } from "next-seo";
import React from "react";
import { ToastProvider } from "react-toast-notifications";
import About from "../components/about";
import Contact from "../components/contact";
import Cover from "../components/cover";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo
        description="Mazedul Islam. Fullstack software engineer experienced in JavaScript, Typescript, Angular, ReactJS, NodeJS, Express, Java, Spring-boot, Python, FastAPI, CI/CD pipeline, Docker, Kubernetes, Microservice, MySQL, MongoDB, Postgres etc. for Web Development."
        additionalMetaTags={[
          { name: "viewport", content: "width=device-width, initial-scale=1" },
        ]}
      />
      <ToastProvider>
        <Navbar></Navbar>

        <main>
          <Cover id="home"></Cover>
          <Portfolio id="portfolio"></Portfolio>
          <Experience id="experience"></Experience>
          <About id="about"></About>
          <Contact id="contact"></Contact>
        </main>

        <Footer></Footer>
      </ToastProvider>
    </>
  );
}
