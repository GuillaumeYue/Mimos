import React from "react";

const COLS = {
  c1: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
  c2: ["5.jpg", "6.jpg", "7.jpg"],
  c3: ["8.jpg", "9.jpg", "10.jpg"],
  c4: ["11.jpg", "12.jpg", "1.jpg", "2.jpg"],
  c5: ["3.jpg", "4.jpg", "5.jpg"],
};

function Column({ dir, className, images }) {
  // 为了无缝循环，重复一遍
  const list = [...images, ...images];
  return (
    <div className={`column ${dir} ${className}`}>
      <div className="column-inner">
        {list.map((name, i) => (
          <img
            key={`${className}-${i}-${name}`}
            src={`/assets/gallery/${name}`}
            alt={`gallery ${name}`}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="section-gallery">
      <div className="container">
        <div className="gallery">
          <Column dir="up"   className="cl-1" images={COLS.c1} />
          <Column dir="down" className="cl-2" images={COLS.c2} />
          <Column dir="up"   className="cl-3" images={COLS.c3} />
          <Column dir="down" className="cl-4" images={COLS.c4} />
          <Column dir="up"   className="cl-5" images={COLS.c5} />
        </div>
      </div>
    </section>
  );
}
