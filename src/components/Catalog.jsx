import React from "react";

const items = [
  { src: "/assets/catalog/dog.png", alt: "dog", label: "dog", imgClass: "img-dog" },
  { src: "/assets/catalog/cat.png", alt: "cat", label: "cat", imgClass: "img-cat" },
  { src: "/assets/catalog/small-animals.png", alt: "small animals", label: "small animals", imgClass: "img-s-animals" },
];

export default function Catalog() {
  return (
    <section className="section-catalog" id="catalog">
      <div className="container">
        <div className="section-heading-container">
          <h2 className="heading-secondary">Catalog</h2>
          <p className="subheading">We provide happiness for these animals</p>
        </div>

        <div className="catalog-container">
          {items.map((it) => (
            <div className={`catalog${it.alt === "cat" ? " cat" : ""}`} key={it.alt}>
              <img className={it.imgClass} src={it.src} alt={it.alt} />
              <p className="catalog-des">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
