import React, { Component } from "react";
import Input from "./common/input";
import { login } from "./services/authservice";
import { tokenService } from "./services/tokenService";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  // constructor() {}

  username = React.createRef();

  state = {
    account: { username: "", password: "" },
    errors: {},
    isLoggedIn: false,
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

  handlesubmit = async (e) => {
    e.preventDefault(); //to avoid reload all page
    const { account } = this.state;
    const result = await login(account.username, account.password);

    if (result.data.token) {
      tokenService.setToken(result.data.token);
      this.setState({
        isLoggedIn: true,
      });
    }

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    //call the server
    // const username = this.username.current.value; //return actual Dom element
    console.log("Submitted");
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { account, errors, isLoggedIn } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handlesubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
