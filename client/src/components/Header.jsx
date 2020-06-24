import React, { Component } from "react";
import * as axios from 'axios';

class Header extends Component {
  constructor() {
    super();
  }
  name = 1
  createNewUser = async (e) => {
    e.preventDefault();
    console.log(this.state);
    await axios.post(`http://localhost:3002/users/create`, {
      ...this.state
    });
    this.setState({
      surname: '',
      firstname: '',
      age: ''
    })
  }
  onChangeHandler = (e, key) => {
    this.setState({
      [key]: e
    })
  }
  state = {
    surname: '',
    firstname: '',
    age: ''
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Car Rental
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="firstname"
                aria-label="firstname" 
                onChange={(e) => this.onChangeHandler(e.target.value, 'firstname')} />
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="surname"
                aria-label="surname"
                onChange={(e) => this.onChangeHandler(e.target.value, 'surname')} 

              />
                 <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="age"
                aria-label="age"
                onChange={(e) => this.onChangeHandler(e.target.value, 'age')} 

              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit" onClick={(e) => this.createNewUser(e)}>
                Login
              </button>
            </form>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
