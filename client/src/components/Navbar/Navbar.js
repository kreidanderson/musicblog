import React from "react";
import "./style.css";
import $ from 'jquery';
import fakelogo from "./fakelogo.png"

$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});

function Navbar() {

  return (
<>
    <img style={{height:80}} src={fakelogo}></img>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
  
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarCenteredExample"
        aria-controls="navbarCenteredExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
  
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarCenteredExample"
      >

        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
 
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Genres
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Pop</a></li>
              <li><a className="dropdown-item" href="#">Rock</a></li>
              <li><a className="dropdown-item" href="#">Metal</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a className="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
        </ul>
       
      </div>
    
    </div>

  </nav>
</>
  );
}

export default Navbar;


