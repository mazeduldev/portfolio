import Head from "next/head";
import Navbar from "../components/navbar";
import Cover from "../components/cover";
import About from "../components/about";
import React from "react";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";
import Experience from "../components/experience";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Mazid</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main>
        <Cover id="home"></Cover>
        <Portfolio id="portfolio"></Portfolio>
        <Experience id="experience"></Experience>
        <About id="about"></About>
        <Contact id="contact"></Contact>
      </main>

      <Footer></Footer>
    </div>
  );
}
