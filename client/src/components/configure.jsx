import React, { Component } from "react";
import Criteria from "./form";
import Reservation from "./reservation";
import History from "./history";
import Available from "./available";
import Booking from "./booking";

class Configure extends Component {
  state = {
    price: "",
  };

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
