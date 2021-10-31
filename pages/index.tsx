import Head from "next/head";
import Navbar from "../components/navbar";
import Cover from "../components/cover";
import About from "../components/about";
import React from "react";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";
import Experience from "../components/experience";
import { ToastProvider } from "react-toast-notifications";
import { NextSeo } from "next-seo";

export default function Home(): JSX.Element {
  return (
    <>
      <NextSeo
        description="I'm Mazedul Islam. Fullstack software engineer experienced in JavaScript, Angular, ReactJS,
        Spring-boot, NodeJS, Python, Java, Web Development, CI/CD pipeline, Docker, Kubernetes, Microservices etc."
        canonical="https://mazedulislam.com"
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
