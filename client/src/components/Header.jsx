import React, { Component } from "react";
import * as axios from "axios";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
  }
  name = 1;
  createNewUser = async (e) => {
    e.preventDefault();
    console.log(this.state);
    await axios.post(`http://localhost:3002/users/create`, {
      ...this.state,
    });
    this.setState({
      surname: "",
      firstname: "",
      age: "",
    });
  };
  onChangeHandler = (e, key) => {
    this.setState({
      [key]: e,
    });
  };
  state = {
    surname: "",
    firstname: "",
    age: "",
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light m-2">
          {/* <Link className="navbar-brand" to="/">
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
          </Link> */}
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="username"
                aria-label="username"
                onChange={(e) =>
                  this.onChangeHandler(e.target.value, "username")
                }
              />
              <input
                className="form-control mr-sm-2"
                type="password"
                placeholder="password"
                aria-label="password"
                onChange={(e) =>
                  this.onChangeHandler(e.target.value, "password")
                }
              />

              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={(e) => this.createNewUser(e)}
              >
                Login
              </button>
            </form>
          </div> */}
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
