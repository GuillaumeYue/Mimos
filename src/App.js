import React from "react";
import Trusted from "./components/Trusted";
import Catalog from "./components/Catalog";
import Featured from "./components/Featured";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section className="section-hero" id="hero">
          <video className="hero-bg-video" autoPlay muted loop playsInline>
            <source src="/assets/mimos-video.mp4" type="video/mp4" />
          </video>
          <div className="video-filter" />
          <div className="hero">
            <div className="hero-cta">
              <a href="https://mimospet.ca/" target="_blank" rel="noreferrer">
                Check our warehouse details
                <ion-icon class="hero-cta-icon" name="arrow-forward"></ion-icon>
              </a>
            </div>
            <h1 className="heading-primary hero-heading">
              Everything Your Pet Needs
              <br />
              All in One Place
            </h1>
          </div>
        </section>
        <Trusted />
        <Catalog />
        <Featured />
        <About />
        <Advantages />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
