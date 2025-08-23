import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
  const header = document.querySelector(".header");
  if (!header) return;

  const SCROLL_TRIGGER = 120;

  const onScroll = () => {
    if (window.scrollY > SCROLL_TRIGGER) header.classList.add("active");
    else header.classList.remove("active");
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
    <header className="header">
      <div className="header-container">
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li><a href="#hero"      className="nav-link main-nav-link">Home</a></li>
            <li><a href="#products"  className="nav-link main-nav-link">Products</a></li>
            <li><a href="#about"     className="nav-link main-nav-link">Our story</a></li>
          </ul>
        </nav>

        <p className="logo">Mimos</p>

        <a href="#contact" className="nav-link main-nav-link nav-cta">
          Contact&nbsp;Us
          <ion-icon name="paw" className="icon-nav-cta"></ion-icon>
          <span className="cta-bg"></span>
        </a>
      </div>
    </header>
  );
}
