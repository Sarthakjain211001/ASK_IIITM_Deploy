import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div class=" text-white bg-dark fontlink">
      <div className="container">
        <div class="b-example-divider"></div>
        <footer class="d-flex flex-wrap justify-content-between align-items-center pb-5 pt-3 mt-5 border-top text-white bg-dark">
          <div class="col-md-4 d-flex align-items-center">
            {/* <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            ></a> */}
            <span class="text-muted text-center">
              Copyright ©ASK_IIITM 2021 Community | All Rights Reserved
            </span>
          </div>
          <br />
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <Link className="nav-link px-2 text-muted" to="/">
                Back to Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link px-2 text-muted" to="about">
                About Us
              </Link>
            </li>
          </ul>

          <p className="text-muted text-white ">
            Contact us at <strong>askiiitm@gmail.com.</strong>
          </p>

          <p className="text-muted text-white mt-4">
            For quries Related to Contribution Please visit us at our
            <a href="https://github.com/Sarthakjain211001/ASK_IIITM-frontend">
              Github
            </a>
            Page
          </p>
        </footer>
      </div>
    </div>
  );
}
