import React from 'react'
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
    <div class="container my-4">
        <h2>Contact Us</h2>
        <form>
            <div class="form-group pb-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com"/>
            </div>
            <div class="form-group pb-3">
                <label for="exampleFormControlSelect1">Select service</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Web development</option>
                    <option>UI design</option>
                    {/* <option>Technology</option> */}
                    <option>Others</option>
                </select>
            </div>

      
   
            <div class="form-group pb-3">
                <label for="exampleFormControlTextarea2">Elaborate Your Concern</label>
                <textarea class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
            </div>
            <button class="btn btn-primary">Submit</button>
        </form>

    </div>

    <footer class="container">
        <p>© 2020-2021 Abindevelops, Inc. · <a href="/">Privacy</a> · <a href="/">Terms</a></p>
        <div className="bk pt-5">

    <Link to="/Home" className="btn btn-warning shadow float-end">Back to Home</Link>
        </div>
    </footer>
    </>
  )
}
  