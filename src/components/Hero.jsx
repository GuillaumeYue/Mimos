import React from "react";

export default function Hero() {
  return (
    <section className="section-hero" id="hero">
      <video className="hero-bg-video" autoPlay muted loop playsInline>
        <source src="/assets/mimos-video.mp4" type="video/mp4" />
      </video>

      <div className="video-filter" />

      <div className="hero">
        <div className="hero-text-box">
          <div className="hero-cta">
            <a href="https://mimospet.ca/" target="_blank" rel="noreferrer">
              Check our warehouse details
              <ion-icon className="hero-cta-icon" name="arrow-forward"></ion-icon>
            </a>
          </div>

          <h1 className="heading-primary hero-heading">
            Everything Your Pet Needs
            <br />
            All in One Place
          </h1>
        </div>
      </div>
    </section>
  );
}
