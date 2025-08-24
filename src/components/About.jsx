import React from "react";

export default function About() {
  return (
    <section className="section-about" id="about">
      <div className="container">
        <div className="section-heading-container">
          <h2 className="heading-secondary">Our Story</h2>
          <p className="subheading">Every pet deserves extra love</p>
        </div>

        <div className="about-content-container">
          <div className="about-img-box">
            <img
              className="about-img"
              src="/assets/about-img.png"
              alt="Mimos team with pets"
            />
          </div>

          <div className="about-text-box">
            <p className="about-des">
              At Mimos, we started as pet parents searching for better — safer,
              kinder and longer-lasting products for the animals we love.
            </p>
            <p className="about-des">
              Today, we proudly work with retailers and families to deliver
              thoughtfully-designed supplies that put pets’ happiness and
              well-being first.
            </p>

            <a
              href="https://mimospet.ca/products"
              className="view-all about-btn"
              target="_blank"
              rel="noreferrer"
            >
              Know more
              <ion-icon className="view-icon" name="arrow-forward"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
