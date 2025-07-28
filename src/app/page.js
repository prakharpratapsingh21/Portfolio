'use client'
//----------------------------My Portfolio-------------------------------

import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
// import ThemeProvider from "@/app/MyPortfolio/context/ThemeProvider";

export default function HomePage({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Prakhar | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"/>
      </Head>
        <Header />
        <main className="bg-gray-200">
          <Hero />
          <About />
          <Qualification/>
          <Services />
          <Skills/>
          <Projects />
          <Contact />
        </main>
        <Footer />
    </>
  );
}
