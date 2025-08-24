import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Catalog from "./components/Catalog";
import Featured from "./components/Featured";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trusted />
        <Catalog />
        <Featured />
        <About />
        <Advantages />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
