import React from "react";

const logos = [
  "/assets/customers/customer-logo/customer-logo-1.png",
  "/assets/customers/customer-logo/customer-logo-2.png",
  "/assets/customers/customer-logo/customer-logo-3.png",
  "/assets/customers/customer-logo/customer-logo-4.png",
  "/assets/customers/customer-logo/customer-logo-5.png",
  "/assets/customers/customer-logo/customer-logo-6.png",
];

export default function Trusted() {
  return (
    <section className="section-trusted">
      <div className="container">
        <p className="trust-heading">Trusted by</p>
        <div className="hero-logo-container">
          {logos.map((src, i) => (
            <img className="hero-logo" src={src} alt={`logo ${i + 1}`} key={src} />
          ))}
        </div>
      </div>
    </section>
  );
}


