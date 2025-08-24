// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const prevent = (e) => e.preventDefault(); 

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* 顶部导航 */}
        <ul className="footer-nav">
          <li><a className="nav-link footer-nav" href="/" onClick={prevent}>Home</a></li>
          <li><a className="nav-link footer-nav" href="#catalog">Catalog</a></li>
          <li><a className="nav-link footer-nav" href="#products">Featured</a></li>
          <li><a className="nav-link footer-nav" href="#about">Our story</a></li>
          <li><a className="nav-link footer-nav" href="#testimonials">Testimonials</a></li>
          <li><a className="nav-link footer-nav" href="#contact">Contact us</a></li>
        </ul>

        {/* Logo */}
        <a href="/" className="footer-logo" aria-label="Mimos Home">
          <img src="/assets/footer-logo.png" alt="Mimos logo" />
          <span>Mimos</span>
        </a>

        {/* 邮箱 */}
        <a className="footer-email" href="mailto:info@mimospet.ca">
          info@mimospet.ca
        </a>

        {/* 社交链接 */}
        <ul className="footer-socials">
          <li>
            <a
              href="https://www.instagram.com/mimos_pet_life/?igsh=MWx2N2diZWp0MnZhMw%3D%3D&utm_source=qr#"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ion-icon className="social-icon" name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@MimosPetSupplies"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ion-icon className="social-icon" name="logo-youtube"></ion-icon>
            </a>
          </li>
          <li>
            <a href="/" onClick={prevent} rel="noreferrer noopener">
              <ion-icon className="social-icon" name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li>
            <a href="/" onClick={prevent} rel="noreferrer noopener">
              <ion-icon className="social-icon" name="logo-tiktok"></ion-icon>
            </a>
          </li>
          <li>
            <a href="/" onClick={prevent} rel="noreferrer noopener">
              <ion-icon className="social-icon" name="logo-wechat"></ion-icon>
            </a>
          </li>
        </ul>

        <p className="copyright">
          Copyright &copy; {year} by Mimos, Inc. All rights reserved.
        </p>
      </div>

      {/* 装饰图，不读屏：aria-hidden */}
      <img src="/assets/footer-img.png" alt="" className="footer-img" aria-hidden="true" />
    </footer>
  );
}
