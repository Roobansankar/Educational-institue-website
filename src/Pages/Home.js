import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />

      <main className="main" id="main">
        <section
          className="section hero"
          style={{ backgroundImage: "url(./media/Home2.jpeg)" }}
        >
          <h1 className="hero__title">
            Welcome to <br></br> Mastery Institute
          </h1>
          <Link to="/contact">
            <button className="button button-hero">Contact Us</button>
          </Link>
        </section>

        <section className="section">
          <h1 className="section__title">Who We Are</h1>

          <div className="cards-container">
            <div className="card">
              <h2>Vision</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="card">
              <h2>Mission</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="card">
              <h2>Values</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h1 className="section__title">Our Courses</h1>

          <div className="course-cards">
            <div className="course-card">
              <div className="course-image web-development">
                {" "}
                <img src="./media/image1.jpg"></img>
              </div>
              <div className="course-title">Web Development</div>
            </div>

            <div className="course-card">
              <div className="course-image app-development">
                <img src="./media/image2.avif"></img>
              </div>
              <div className="course-title">App Development</div>
            </div>

            <div className="course-card">
              <div className="course-image graphic-design">
                {" "}
                <img src="./media/image3.jpg"></img>
              </div>
              <div className="course-title">Graphic Designer</div>
            </div>

            <div className="course-card">
              <div className="course-image digital-marketing">
                <img src="./media/image4.webp"></img>
              </div>
              <div className="course-title">Digital Marketing</div>
            </div>

            <div className="course-card">
              <div className="course-image ui-developer">
                <img src="./media/image5.avif"></img>
              </div>
              <div className="course-title">UI and UX</div>
            </div>

            <div className="course-card">
              <div className="course-image ux-designer">
                <img src="./media/image6.jpg"></img>
              </div>
              <div className="course-title">Data analytics</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
