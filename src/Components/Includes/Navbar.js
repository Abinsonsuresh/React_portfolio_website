import React from "react";
import logo from '../Images/logo100.png'
import "../Includes/Home.css";


import { Link } from "react-router-dom";
import "./App1.css";

let a = 20;
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-dark" data-bs-theme="dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                  {/* <a className="navbar-brand" href="/">
            Navbar
          </a> */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/Home" className="nav-link active">
                          <img src={logo} alt="" height={a}/>
                        </Link>
                      </li>
                    </ul>
                    {/* me-auto mb-2 mb-lg-0 */}
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item ">
                        <Link to="/Home" className="nav-link active text-white">
                          Home
                        </Link>
                        {/* <a className="nav-link active" aria-current="page" href="/"> */}
                        {/* </a> */}
                      </li>
                      <li className="nav-item">
                        <Link to="/About" className="nav-link active text-white">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/Contact" className="nav-link active text-white">
                          Contact
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li> */}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
