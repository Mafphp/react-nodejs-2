import React from "react";
import Vehicles from "./components/Vehicles";
import Footers from "./components/Footer";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Component } from "react";
import NotFound from "./components/notfound";
import Configure from "./components/configure";
import LoginForm from "./components/login";
import Payment from "./components/payment";
import Logout from "./components/Logout";
import "./App.css";
import NavBar from "./components/navbar";
import API from './components/services/API';
import {AuthContext} from './auth/AuthContext';

class App extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      cars: [],
      token: null,
    };
  }
  componentDidMount() {
     //check if the user is authenticated
     API.isAuthenticated().then(
      (user) => {
        this.setState({authUser: user});
      }
    ).catch((err) => { 
      this.setState({authErr: err.errorObj});
      this.props.history.push("/login");
    });
  }
  logout = () => {
    API.userLogout().then(() => {
      this.setState({authUser: null,authErr: null, tasks: null});
      API.getTasks().catch((errorObj)=>{this.handleErrors(errorObj)});
    });
  }
  login = (username, password) => {
    API.userLogin(username, password).then(
      (user) => { 
        this.setState({ authUser: user, authErr: null});
        this.props.history.push("/configure");
      }
    ).catch(
      (errorObj) => {
        const err0 = errorObj.errors[0];
        this.setState({authErr: err0});
      }
    );
  }
  render() {
    const value = {
      authUser: this.state.authUser,
      authErr: this.state.authErr,
      loginUser: this.login,
      logoutUser: this.logout
    }
    return (
        <AuthContext.Provider value={value}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/configure" component={Configure}></Route>
              <Route path="/payment" exact component={Payment}></Route>
              <Route path="/login" component={LoginForm}></Route>
              <Route path="/logout" component={Logout}></Route>
              <Route path="/vehicles" component={Vehicles}></Route>
              <Route path="/not-found" component={NotFound}></Route>
              <Redirect from="/" exact to="vehicles" />
              <Redirect to="/not-found" />
            </Switch>
          </div>
          <Footers />
        </AuthContext.Provider>
    );
  }
}

export default withRouter(App);
