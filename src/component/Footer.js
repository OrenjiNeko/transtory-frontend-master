import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#26b8acbf", border: "1px solid #285c52", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}>
      <div className="container p-2">
        <div className="row align-items-center">
          <div className="col text-start">© Transtory 2022 |</div>
          <div className="col text-center">
            <Link to="/" className="ms-3 text-dark">
              Beranda
            </Link>
            <Link to="HubungiKami" className="ms-3 text-dark">
              Hubungi Kami
            </Link>
            <Link to="FAQ" className="ms-3 text-dark">
              FAQ
            </Link>
          </div>
          <div className="col text-end mt-2" style={{ fontSize: "2rem" }}>
            <a href="https://www.facebook.com/">
              <i className="bx bxl-facebook-square ms-3 text-black"></i>
            </a>
            <a href="">
              <i className="bx bxl-instagram ms-3 text-black"></i>
            </a>
            <a href="">
              <i className="bx bxl-twitter ms-3 text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
