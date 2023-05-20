import React from "react";
import img from "../Images/profile.jpg";

export default function About() {
  return (
    <>
      <div className="container text-center">
        <h2>About</h2>
        <div className="abbt  text-center">
          <img className="profileimg" src={img} alt="" />
          <p>
            React.js front-end web developer with a passion for crafting
            exceptional user experiences. Experienced in building robust and
            scalable web applications that blend aesthetics with functionality.
            <br />
            Key skills: React.js, JavaScript, HTML5, CSS3, Git, UI/UX design
            principles, Responsive web design, Python
          </p>
        </div>
      </div>
    </>
  );
}
