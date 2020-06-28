import React, { Component } from "react";
import Input from "./common/input";
import { login } from "./services/authservice";
import { Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

class LoginForm extends Component {

  tokenService
  username = React.createRef();

  state = {
    account: { username: "", password: "" },
    errors: {},
    isLoggedIn: false,
    token: null
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleLoginButton = async (e) => {
    try {
      e.preventDefault(); //to avoid reload all page
      const { account } = this.state;
      const result = await login(account.username, account.password);
      if (result.data.token) {
        this.setState({
          token: result.data.token,
        });
      }
      // const errors = this.validate();
      // this.setState({ errors: errors || {} });
      // if (errors) return;
    } catch (err) {
      alert("invalid username or password")
    }

    //call the server
    // const username = this.username.current.value; //return actual Dom element
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const _token = new Cookies().get("token");
    const { account, errors, token} = this.state;
    return (
      <div>
        {token || _token ? (
          <Redirect to="/configure" />
        ) : (
          <React.Fragment>
            <h1>Login</h1>
          <Input
            name="username"
            value={account.username}
            label="Username"
            type="text"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            type="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary" onClick={(e) => this.handleLoginButton(e)}>Login</button>
          </React.Fragment>
        )}
        
      </div>
    );
  }
}

export default LoginForm;
