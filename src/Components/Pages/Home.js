import React from "react";
import "../Includes/Home.css";
import img from "../Images/profile.jpg";
import { Link } from "react-router-dom";


// import Slider from "../Includes/Slider";
import Skills from "./Skills";

// import { Link } from "react-router-dom";
import Services from "./Services";
// import Slider from "../Includes/Slider";

export default function Home() {
  return (
    <>
      
      <section className="section ">
        <div className="container">
          {/* <div className="img">
              <img
                    className="gifsize"
                    src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif"
                    alt="css"/>
              </div> */}

          <div className="">
            <div className="col-11 adj">
              <h2 className="">Hi! I Am</h2>
              <h2 className="">
                Abinson Suresh
                <span>
                  <img
                    className="gifsize"
                    src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Developer.gif"
                    alt="css"
                  />
                </span>
              </h2>
              <h3>Front-End Web Developer|Graphic Designer|UI UX Designer</h3>

              {/* <Link to="/About" className="btn btn-warning shadow">
                Read more
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="sliderctrl">
        <div className="container ">
          <Slider />
        </div>
      </section> */}
  <section className="About">
  <div className="container my-4">


            <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-12">
            <h2 className="text-center pb-5 border-top">About</h2>

            <div class="col-md-8 d-flex justify-content-center align-items">
            <img className="profileimg img-fluid" src={img} alt="" />      
            </div>
            <p className="lead">
            React.js front-end web developer with a passion for crafting
            exceptional user experiences. Experienced in building robust and
            scalable web applications that blend aesthetics with functionality.
            <br />
            Key skills: React.js, JavaScript, HTML5, CSS3, Git, UI/UX design
            principles, Responsive web design, Python
          </p>
            </div>
        </div>
      <Link to="/About" className="btn btn-warning shadow">
                Read more
              </Link>
      </div>
            
  </section>
      <section className="bgclr">
        <h2 className="Main-heading text-center border-top">Skills</h2>

        <Skills />
      </section>

      <section>
        <h2 className="Main-heading text-center border-top ">Services</h2>
        <Services />
      </section>

      <section>

      </section>
    </>
  );
}
