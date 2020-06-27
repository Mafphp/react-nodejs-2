import React, { Component } from "react";
import { Link } from "react-router-dom";
import History from "./history";

class Booking extends Component {
  // constructor() {
  //   // this.clickHandler = this.clickHandler.bind(this);
  // }
  state = {};
  // clickHandler = () => {
  //   let path = "/payment";
  //   this.props.history.push(path);
  //   // this.props.history.push("/payment");
  // };
  render() {
    return (
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td>
              <p>
                Total cars are Available and the Price is {}, please click Book
                for reservation
              </p>
            </td>
            <td>
              <Link to="/payment" className="btn btn-primary">
                Book
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Booking;
