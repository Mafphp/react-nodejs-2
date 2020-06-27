import React, { Component } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light m-2">
        <Link className="navbar-brand" to="/">
          Car Rental
        </Link>
        <Link className="navbar-brand" to="/login">
          Login
        </Link>
        <Link className="navbar-brand" to="/payment">
          Payment
        </Link>
        <Link className="navbar-brand" to="/configure">
          Configure
        </Link>
        <Link className="navbar-brand" to="/">
          Logout
        </Link>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
