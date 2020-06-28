import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "./services/httpservice";

class Payment extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("props@", this.props);
  }
  handlerPress = () => {
    const { startDate, endDate, totalPrice } = this.props;
    API.post("reservation", {
      startDate: this.props.startDate,
    });
  };
  state = {};

  render() {
    return (
      <React.Fragment>
        <form action="" className="card p-2 m-3">
          <div className="row">
            <div className="col-md-6 m-3">
              <label htmlFor="cc-name">Name on Card</label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                placeholder=""
                required
              ></input>
              <small className="text-muted">
                Full name as displayed on card
              </small>
              <div className="invalid-feedback">Name on card is required</div>
            </div>
            <div className="col-md-6 m-3">
              <label htmlFor="cc-name">Credit card number</label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                placeholder=""
                required
              ></input>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 m-3">
              <label htmlFor="cc-name">Expiration</label>
              <input
                type="text"
                className="form-control"
                id="cc-expiration"
                placeholder=""
                required
              ></input>
              <div className="invalid-feedback">Expiration daterequired</div>
            </div>
            <div className="col-md-3 m-3">
              <label htmlFor="cc-name">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cc-cvv"
                placeholder=""
                required
              ></input>
              <div className="invalid-feedback">Security code required</div>
            </div>
          </div>
          <hr class="mb-4"></hr>
          <buttbutton
            Redirect="/configure"
            Onclick={this.handlerPress}
            className="btn btn-primary"
          >
            Submit
          </buttbutton>
        </form>
      </React.Fragment>
    );
  }
}

export default Payment;
