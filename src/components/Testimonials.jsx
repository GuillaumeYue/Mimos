import React from "react";

const DATA = [
  {
    userImg: "/assets/customers/customer-1.jpg",
    name: "May Dhan",
    city: "@Montreal",
    title: "Sr. Buyer",
    logo: "/assets/customers/customer-logo/customer-logo-1.png",
    date: "Dec 08, 2024",
    desc: (
      <>
        I found the ⭐️ perfect treats and toys for my two rescue dogs here.
        <br />
        <br />
        Fast shipping 🚀 and great quality supplies!
        <br />
        <br />
      </>
    ),
  },
  {
    userImg: "/assets/customers/customer-2.jpg",
    name: "Taylor Brooks",
    city: "@Montreal",
    title: "Store Manager",
    logo: "/assets/customers/customer-logo/customer-logo-2.png",
    date: "Nov 12, 2024",
    desc: (
      <>
        Their service is always reliable and products 📦 consistently
        high-quality.
        <br />
        <br />
      </>
    ),
  },
  {
    userImg: "/assets/customers/customer-4.jpg",
    name: "Riley Bennett",
    city: "@Ottawa",
    title: "Brand Manager",
    logo: "/assets/customers/customer-logo/customer-logo-1.png",
    date: "Jun 08, 2025",
    desc: (
      <>
        We've grown 🐶 fast with their help—great turnaround time, smart
        packaging, and truly reliable fulfillment and service.
        <br />
        <br />
      </>
    ),
  },
  {
    userImg: "/assets/customers/customer-5.jpg",
    name: "Casey Lee",
    city: "@Toronto",
    title: "Store Owner",
    logo: "/assets/customers/customer-logo/customer-logo-3.png",
    date: "May 01, 2024",
    desc: (
      <>
        Their team ⭐️ always delivers high-demand items fast, and perfectly
        packaged. Been working with them 🚚 for years—never disappointed once.
        <br />
        <br />
      </>
    ),
  },
  {
    userImg: "/assets/customers/customer-6.jpg",
    name: "Jordan Taylor",
    city: "@Montreal",
    title: "Inventory Manager",
    logo: "/assets/customers/customer-logo/customer-logo-2.png",
    date: "Dec 23, 2024",
    desc: (
      <>
        Their inventory system 🚀 is efficient, accurate, and helps prevent
        stockouts while improving workflow daily.
        <br />
        <br />
        Stock updates are timely. Reliable? Absolutely!
      </>
    ),
  },
  {
    userImg: "/assets/customers/customer-3.jpg",
    name: "Alex Morgan",
    city: "@Montreal",
    title: "Store Manager",
    logo: "/assets/customers/customer-logo/customer-logo-3.png",
    date: "Aug 03, 2025",
    desc: (
      <>
        Our store ⭐️ depends on their timely deliveries and consistently
        excellent product quality.
        <br />
        <br />
      </>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="container">
        <div className="section-heading-container">
          <h2 className="heading-secondary">Testimonials</h2>
          <p className="subheading">
            See what our clients are saying about Mimos
          </p>
        </div>

        <div className="testimonials-container">
          {DATA.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-header">
                <img
                  src={t.userImg}
                  alt="customer"
                  className="testimonial-user-img"
                />
                <div className="testimonial-user-info">
                  <p className="user-name">{t.name}</p>
                  <p className="user-city">{t.city}</p>
                </div>
                <p className="user-title">{t.title}</p>
              </div>

              <div className="testimonial-content">
                <p className="testimonial-description">{t.desc}</p>
                <div className="testimonial-info">
                  <img
                    src={t.logo}
                    alt="user company"
                    className="testimonial-user-logo"
                  />
                  <p className="testimonial-date">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
