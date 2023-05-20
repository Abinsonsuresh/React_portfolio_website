import React from "react";
import img1 from "../Images/img1.jpg";
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'

export default function Services() {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              {/* <h2 className="Main-heading ">Services</h2> */}
            </div>
            <div className="col-md-4 text-center g-5">
              <div className="card">
                <img src={img3} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h5>Web development</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio explicabo omnis deserunt.
              </p>
                </div>
              </div>
            </div>


            <div className="col-md-4 text-center g-5">
              <div className="card">
                <img src={img1} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h5>UI UX</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio explicabo omnis deserunt.
              </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center g-5">
              <div className="card">
                <img src={img2} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h5>Graphic Design</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio explicabo omnis deserunt.
              </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center g-5">
              <div className="card">
                <img src={img2} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h5>3D Modelling</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio explicabo omnis deserunt.
              </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center g-5">
              <div className="card">
                <img src={img3} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h5>3D Animation</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio explicabo omnis deserunt.
              </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center g-5">
              <div className="card">
                <img src={img1} alt="" className="w-100 border-bottom" />
                <div className="card-body">
                  <h5>Motion Graphics</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio explicabo omnis deserunt.
              </p>
                </div>
              </div>
            </div>

            {/* <div className="col md-4 text-center">
              <h5>Django</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio explicabo omnis deserunt.
              </p>
            </div>


            <div className="col md-4 text-center">
              <h5>UI UX</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio explicabo omnis deserunt.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
