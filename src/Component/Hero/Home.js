import React from "react";
import "../Hero/home.css";
import hero from "../../pic/hero.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Let's build together !</h3>
            <h1>
              Hi, I’m <span>Anne Delottroit</span>
            </h1>
            <h2>
              <span>
                <Typewriter
                  words={[
                    "an IT Solutions Architect.",
                    "a Network Infrastructure Specialist.",
                    "a Systems Integration Consultant",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              Designs and implements comprehensive IT solutions tailored to meet
              clients' specific needs, focusing on system integration and
              scalability. Specializes in the planning, deployment, and
              management of network systems, ensuring optimal performance and
              security.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Find me here : </h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
