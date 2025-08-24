import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const headerEl = document.querySelector(".header");
    const heroEl = document.querySelector("#hero");
    if (!headerEl || !heroEl) return;

    const obs = new IntersectionObserver(
      ([ent]) => headerEl.classList.toggle("active", !ent.isIntersecting),
      { root: null, threshold: 0, rootMargin: "-280px 0px 0px 0px" }
    );
    obs.observe(heroEl);
    return () => obs.disconnect();
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <nav className="main-nav" aria-label="Primary">
          <ul className="main-nav-list">
            <li><a href="#hero" className="nav-link main-nav-link">Home</a></li>
            <li><a href="#products" className="nav-link main-nav-link">Products</a></li>
            <li><a href="#about" className="nav-link main-nav-link">Our story</a></li>
          </ul>
        </nav>

        <p className="logo">Mimos</p>

        <a href="#contact" className="nav-link main-nav-link nav-cta">Contact</a>
      </div>
    </header>
  );
}
