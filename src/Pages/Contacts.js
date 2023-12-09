import React from "react";
import "./Contacts.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contacts() {
  return (
    <div>
      <Navbar />

      <div className="contact-container">
        <h1 className="section__title">Contact Us</h1>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                rows="4"
                required
              />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="map-container">
          <iframe
            title="Google Map"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224452.37457043143!2d-74.00597227910176!3d40.71277628211076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f74a0520a5%3A0xf88280c7a13ab172!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1609416720122!5m2!1sen!2sca"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contacts;
