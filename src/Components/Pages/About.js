import React from "react";
import img from "../Images/profile.jpg";

export default function About() {
  return (
    <>
      <div className="container my-4">


            <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-9">
            <h2 className="text-center pb-5">About</h2>

            <div class="col-md-8 d-flex justify-content-center align-items-center">
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
      </div>
    </>
  );
}
