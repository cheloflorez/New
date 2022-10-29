import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget"
import Dropdown from "./Dropdown"

const Navbar = () => {
  const listDrowdon = ["Todos", "Hamburguesas", "Papas", "Bebidas"]
  return (
    <>
      {/* HEADER */}
      <header>
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="https://firebasestorage.googleapis.com/v0/b/burger-b321b.appspot.com/o/img%2Flogo.svg?alt=media&token=17e439ed-59f5-4687-8452-8001f5662ee2" alt="" width={70} height={70} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav align-items-center" >
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
                <Dropdown lista={listDrowdon} />
                <NavLink to="/nosotros" className="nav-link">
                  Nosotros
                </NavLink>
                <NavLink to="/contacto" className="nav-link">
                  Contacto
                </NavLink>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
                <CartWidget />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
