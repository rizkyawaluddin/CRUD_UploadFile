import React from "react";
import ReactImg from "../assets/img/react.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-height">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={ReactImg} alt="icon-navbar" width="45px" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  to="/category"
                  style={({ isActive }) => ({
                    color: isActive ? "#F74D4D" : "#ffffff",
                  })}
                >
                  Category
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold"
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#F74D4D" : "#ffffff",
                  })}
                >
                  Product
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
