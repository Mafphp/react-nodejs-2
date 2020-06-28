import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { tokenService } from "./services/tokenService";
import Cookies from "universal-cookie";

export default function Navbar () {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = new Cookies().get("token");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [])
  tokenService.getToken().subscribe(token => {
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light m-2">
        {isLoggedIn ? 
        (
          <React.Fragment>
            <Link className="navbar-brand" to="/">
              Car Rental
            </Link>
            {/* <Link className="navbar-brand" to="/payment">
              Payment
            </Link> */}
            <Link className="navbar-brand" to="/configure">
              Configure
            </Link>
            <Link className="navbar-brand" to="/logout">
              Logout
            </Link>
          </React.Fragment>
        ) :
        (
          <React.Fragment>
            <Link className="navbar-brand" to="/">
              Car Rental
            </Link>
            <Link className="navbar-brand" to="/login">
              Login
            </Link>
          </React.Fragment>
        )}
      </nav>
    </React.Fragment>
  );
};

