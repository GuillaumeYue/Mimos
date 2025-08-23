import React from "react";

export default function Contact() {
  return (
    <section className="section-contact" id="contact">
      <div className="container">
        <div className="section-heading-container">
          <h2 className="heading-secondary">Contact Us</h2>
          <p className="subheading">We’d love to hear from you!</p>
        </div>

        <div className="contact-container">
          <img
            src="/assets/contact-img.png"
            alt="contact"
            className="contact-img"
          />

          <div className="form-container">
            <p className="contact-text">
              Whether you're a pet lover, a curious visitor, or a potential
              partner — we’re always happy to connect.
            </p>

            <form
              className="contact-form"
              id="contact-form"
              action="https://formspree.io/f/xldlpjrp"
              method="POST"
            >
              <div className="contact-form-info">
                <textarea
                  name="name"
                  id="name"
                  className="contact-form-info-input"
                  placeholder="Name"
                  required
                ></textarea>

                <textarea
                  name="email"
                  id="email"
                  className="contact-form-info-input"
                  placeholder="Email"
                  required
                ></textarea>
              </div>

              <div className="contact-form-message">
                <label className="contact-form-tag" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="8"
                  className="contact-form-message-content"
                ></textarea>
              </div>

              <button className="contact-form-btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
