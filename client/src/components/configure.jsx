import React, { Component } from "react";
import Criteria from "./form";
import Reservation from "./reservation";
import History from "./history";
import Cookies from "universal-cookie";

class Configure extends Component {
  state = {
    price: "",
    token: null,
  };
  componentDidMount() {
    const token = new Cookies().get("token");
    if (!token) {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <React.Fragment>
          <div className="row m-2">
          <div className="col">
            <Criteria />
          </div>
        </div>

        <div className="row m-2">
          <div className="col">
            <Reservation />
          </div>
        </div>
        <div className="row m-2">
          <div className="col ">
            <History />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Configure;
