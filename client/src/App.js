import React from "react";
import Vehicles from "./components/Vehicles";
import Footers from "./components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import { Component } from "react";
import NotFound from "./components/notfound";
import Configure from "./components/configure";
import LoginForm from "./components/login";
import Payment from "./components/payment";
import Logout from "./components/Logout";
import "./App.css";
import API from "./components/services/httpservice";
import NavBar from "./components/navbar";
class App extends Component {
  state = {
    cars: [],
    token: null,
  };

  async componentDidMount() {
    const listCars = await API.get("vehicles");
    const result2 = await API.get("vehicles/category");
    const catPrice = await API.get("vehicles/category");
    this.setState({
      cars: listCars.data.data,
      categories: result2.data.data,
    });
  }
  handleAdd = async () => {};
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <div className="container">
          <Switch>
            <Route path="/configure" component={Configure}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/payment" component={Payment}/>
            <Route path="/logout" component={Logout}></Route>
            <Route
              path="/vehicles"
              render={() => <Vehicles listCars={this.state.cars} />}
            ></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="vehicles" />
            <Redirect to="/not-found" /> //apply to all
          </Switch>
        </div>
        <Footers />
      </React.Fragment>
    );
  }
}

export default App;
