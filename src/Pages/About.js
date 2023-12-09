import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

export default function About() {
  return (
    <div>
      <Navbar />

      <div className="about-us-container">
        <h1 className="section__title" style={{ marginBottom: "50px" }}>
          About Us
        </h1>
        <div className="content-container">
          <div className="image-container">
            <img src="./media/about.svg"></img>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <h2 className="section__title">Our Students Reviews</h2>
        <div className="card-container ">
          <div className="card cards ">
            <img src="./media/review.png" alt="Review 1" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="card cards">
            <img src="./media/review2.png" alt="Review 2" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="card cards">
            <img src="./media/review3.png" alt="Review 3" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
