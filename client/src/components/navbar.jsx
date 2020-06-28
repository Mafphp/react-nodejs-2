import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export default function Navbar () {
    // Add a logout method
  return (
      <AuthContext.Consumer>
          {(context) =>  (
        <nav className="navbar navbar-expand-lg navbar-light bg-light m-2">
            <React.Fragment>
            {context.authUser ? (
            <React.Fragment>
              <Link className="navbar-brand" to="/">
                Car Rental
              </Link>
              <Link className="navbar-brand" to="/configure">
                Configure
              </Link>
              <Link className="navbar-brand" to="/logout" onClick={() => context.logoutUser()}>
                Logout
              </Link>
            </React.Fragment>
            ) : (
              <React.Fragment>
              <Link className="navbar-brand" to="/">
                Car Rental
              </Link>
              <Link className="navbar-brand" to="/login">
                Login
              </Link>
              </React.Fragment>
            )}
            </React.Fragment>
          </nav>
          )}
      </AuthContext.Consumer>
  );
};

