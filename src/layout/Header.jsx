import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand logo_h" href="index.html">
              <img src="img/logo.png" alt="" />
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
                <li className="nav-item active">
                <NavLink className="nav-link scrollto" to='/' >Home</NavLink>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="/products"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                    <NavLink className="nav-link scrollto" to='/Products' >Product</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item submenu dropdown">
                  <a
                    href="Login"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                    <NavLink className="nav-link scrollto" to='/Login' >Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link scrollto" to='/Register' >Register</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav-shop">
                <li className="nav-item">
                  <button>
                    <i className="ti-search" />
                  </button>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link scrollto" to='/Cart' >
                  <button>
                    <i className="ti-shopping-cart" />
                    <span className="nav-shop__circle">3</span>
                  </button>
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link scrollto" to='/products' >
                  <a className="button button-header" href="/products">
                    Buy Now &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>
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
