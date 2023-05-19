import React from "react";
import "../Includes/Home.css";
import Slider from "../Includes/Slider";
import Skills from "./Skills";

import { Link } from "react-router-dom";
import Services from "./Services";

export default function Home() {
  return (
    <>
    <div className="mtt">
     
      </div>
      <section className="section ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="Main-heading ">React Web project</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos reprehenderit sit cum sapiente quisquam atque
                repellendus earum iusto ab alias consequuntur ratione sint error
                unde fugiat neque, explicabo aliquid, architecto cumque
                temporibus laudantium similique! Sed, natus sint temporibus eos
                facere consequatur libero laborum enim, sunt quaerat similique.
                Consequuntur, iusto voluptatibus nostrum non autem aut, sit iste
                repudiandae at placeat quibusdam voluptate ipsam earum modi
                dignissimos alias a odit nemo asperiores tempora dolorum
                mollitia aperiam? Voluptas doloremque nulla, nobis eos ullam
                autem repellat quaerat, deserunt nam distinctio dolorum fugiat
                officia magnam quo velit? Ea aut vel eum nemo voluptates beatae
                quasi!
              </p>
              <Link to="/About" className="btn btn-warning shadow">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sliderctrl">
        <div className="container ">
          <Slider />
        </div>
      </section>

      
      <Skills/>
      <Services/>
    </>
  );
}
