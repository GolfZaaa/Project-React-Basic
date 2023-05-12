import React from "react";
import { NavLink } from "react-router-dom";
import '../css/Header.css'
import { BsCart3 } from "react-icons/bs";

const Header = () => {

  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand logo_h" href="index.html">
              <img src="img/logo2.png" alt="" height={90} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div
              className="collapse navbar-collapse offset"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                <li className="nav-item ">
                  <NavLink className="nav-link scrollto" to="/">
                    <span style={{fontSize:20}}>Home</span>
                  </NavLink>
                </li>

                <li className="nav-item ">
                  <NavLink className="nav-link scrollto" to="/Products">
                    <span style={{fontSize:20}}>Shop</span>
                  </NavLink>
                </li>

                <li className="nav-item ">
                  <NavLink className="nav-link scrollto" to="/Contact">
                    <span style={{fontSize:20}}>Contact</span>
                  </NavLink>
                </li>
              </ul>

              <ul className="nav-shop">
                {/* Search Start */}
                <div className="containerSearch">
                  <input
                    placeholder="Type to search..."
                    required
                    className="input"
                    name="text"
                    type="text"
                  />
                  <div className="icon">
                    <svg
                      viewBox="0 0 512 512"
                      className="ionicon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Search</title>
                      <path
                        strokeWidth={32}
                        strokeMiterlimit={10}
                        stroke="currentColor"
                        fill="none"
                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                      />
                      <path
                        d="M338.29 338.29L448 448"
                        strokeWidth={32}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
                {/* Search End */}

                <li className="nav-item">
                  <NavLink className="nav-link scrollto" to="/Cart">
                    <button>
                      <BsCart3 className="carticon" />
                      <span className="nav-shop__circle numbercart">3</span>
                    </button>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link scrollto" to="/Login">

                    <button className="btnbuttonHeader default" >
                      <span className="btnbuttonHeader default" style={{fontSize:20}}>Login</span>
                    </button>

                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
