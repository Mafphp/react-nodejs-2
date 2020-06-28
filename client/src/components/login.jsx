import React, { Component } from "react";
import Input from "./common/input";
// import { login } from "./services/authservice";
import { Redirect } from "react-router-dom";
// import { tokenService } from "./services/tokenService";
// import Cookies from "universal-cookie";
import API from './services/API';
import { AuthContext } from "../auth/AuthContext";

class LoginForm extends Component {

  tokenService
  username = React.createRef();

  state = {
    username: "",
    password: "",
    errors: {},
    isLoggedIn: false,
    token: null
  };

  validate = () => {
    const errors = {};
    const { username, password } = this.state;
    if (username.trim() === "")
      errors.username = "Username is required";
    if (password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleLoginButton = async (e) => {
    try {
      e.preventDefault();
      const { username, password } = this.state;
      await API.login(username, password);
      this.setState({
        isLoggedIn: true
      });
    } catch (err) {
      alert("invalid username or password")
    }
  };
  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { username, password, errors, isLoggedIn} = this.state;
    if (isLoggedIn) {
      return <Redirect to = "/configure" />
    }
    return (
      <AuthContext.Consumer>
        {(context) => (
            <>
              {context.authUser && <Redirect to = "/configure" />}
              <React.Fragment>
                <h1>Login</h1>
              <Input
                name="username"
                value={username}
                label="Username"
                type="text"
                onChange={this.handleChange}
                error={errors.username}
              />
              <Input
                name="password"
                type="password"
                value={password}
                label="Password"
                onChange={this.handleChange}
                error={errors.password}
              />
              <button className="btn btn-primary" onClick={() => context.loginUser(username, password)}>Login</button>
            </React.Fragment>
            </>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default LoginForm;
