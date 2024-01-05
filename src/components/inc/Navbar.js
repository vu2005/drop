import React from "react";
import {Link}from "react-router-dom";
import logo from "../images/logo.jpg";

function Navbar() {
    return (
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
         <Link to="./" className="navbar-brand">
         <img src={logo} alt="" width="100" height="60"/></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active">Home</Link>
              </li>
              <li class="nav-item">
               <Link to="/about" class="nav-link active">About Us</Link>
              </li>
              <li class="nav-item">
               <Link to="/products" class="nav-link active">Products</Link>
              </li>
              <li class="nav-item">
               <Link to="/map" class="nav-link active">Map</Link>
              </li>
              <li class="nav-item">
               <Link to="/contact" class="nav-link active">Contact</Link>
              </li>
            </ul>
          </div>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </nav>
    );
}
export default Navbar;