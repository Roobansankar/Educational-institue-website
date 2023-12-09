import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Courses() {
  return (
    <div>
      <Navbar />

      <div style={{ marginTop: "30px" }}>
        <section className="section">
          <h1 className="section__title">Our Courses</h1>

          <div className="course-cards">
            <div className="course-card">
              <div className="course-image web-development">
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
      </div>

      <Footer />
    </div>
  );
}
