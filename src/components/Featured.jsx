import React, { useEffect, useRef, useState } from "react";

const products = [
  { src: "/assets/products/1.png", name: "Double rope braided cat bed" },
  { src: "/assets/products/2.png", name: "Dopamine pet saddle" },
  { src: "/assets/products/3.png", name: "Heart-shaped pet slow food plate" },
  { src: "/assets/products/4.png", name: "Purple dog chew toy" },
  { src: "/assets/products/5.png", name: "Pink pet leash" },
];

export default function Featured() {
  const [idx, setIdx] = useState(0);
  const [cardW, setCardW] = useState(0);
  const containerRef = useRef(null);

  // 计算单张卡片宽度（含外边距），以便做 translateX
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const first = containerRef.current.querySelector(".product-card");
      if (!first) return;
      const rect = first.getBoundingClientRect();
      const cs = window.getComputedStyle(first);
      const ml = parseFloat(cs.marginLeft) || 0;
      const mr = parseFloat(cs.marginRight) || 0;
      setCardW(rect.width + ml + mr);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIdx = Math.max(0, products.length - 1);
  const go = (step) =>
    setIdx((i) => {
      let n = i + step;
      if (n < 0) n = maxIdx;
      if (n > maxIdx) n = 0;
      return n;
    });

  return (
    <section className="section-featured" id="products">
      <div className="container">
        <div className="section-heading-container">
          <h2 className="heading-secondary">Featured</h2>
          <p className="subheading">Top products loved by pets</p>
        </div>

        <div className="products-display">
          <ion-icon
            className="display-arrow"
            name="chevron-back-outline"
            onClick={() => go(-1)}
            role="button"
            tabIndex={0}
          ></ion-icon>

          <div className="display-box">
            <div
              ref={containerRef}
              className="products-container" id="products-track"
              style={{ transform: `translateX(-${idx * cardW}px)` }}
            >
              {products.map((p) => (
                <div className="product-card" key={p.src}>
                  <img src={p.src} alt="product" className="product-img" />
                  <p className="product-name">{p.name}</p>
                </div>
              ))}
            </div>
          </div>

          <ion-icon
            className="display-arrow"
            name="chevron-forward-outline"
            onClick={() => go(1)}
            role="button"
            tabIndex={0}
          ></ion-icon>
        </div>

        <a
          href="https://mimospet.ca/products"
          className="view-all"
          target="_blank"
          rel="noreferrer"
        >
          See all products{" "}
          <ion-icon className="view-icon" name="arrow-forward"></ion-icon>{" "}
        </a>
      </div>
    </section>
  );
}
