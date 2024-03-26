import React from "react";
import Cover from "@/components/home/Cover";
import Experience from "@/components/home/experience/Experience";
import Portfolio from "@/components/home/Portfolio";
import Footer from "@/components/home/Footer";
import Contact from "@/components/home/contact/Contact";
import About from "@/components/home/About";

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
