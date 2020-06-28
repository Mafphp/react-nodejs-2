import React, { Component } from "react";
import API from "./services/httpservice";
import {AuthContext} from '../auth/AuthContext'

class Payment extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("props@", this.props);
  }

  handlerPress = async (e) => {
    e.preventDefault();
    const username = "farhad";
    const { startDate, endDate, category } = this.props.location.state;
    await API.post("reservations/book", {
      startDate,
      endDate,
      category,
      username,
    });
  };
  state = {};

  render() {
    return (
      <AuthContext.Consumer>
          {(context) => (
            <React.Fragment>
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
                  <small className="text-muted">Full name as displayed on card</small>
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
              <hr className="mb-4"></hr>
              <button
                Redirect="/configure"
                onClick={this.handlerPress}
                className="btn btn-primary"
              >
                Submit
              </button>
          </React.Fragment> 
          )}
      </AuthContext.Consumer>
    );
  }
}

export default Payment;
