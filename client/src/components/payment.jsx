import React, { Component } from "react";
import API from "./services/API";
import {AuthContext} from '../auth/AuthContext'
import { Link } from "react-router-dom";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false
    }
  }
  handlerPress = async (e) => {
    e.preventDefault();
    const { startDate, endDate, category } = this.props.location.state;
    await API.vehicleBooked({
      startDate,
      endDate,
      category,
    });
    this.setState({
      isSubmitted: true
    });
  };

  render() {
    return (
      <AuthContext.Consumer>
          {(context) => (
            <>
            {!this.state.isSubmitted ? (
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
                onClick={(e) => this.handlerPress(e)}
                className="btn btn-primary"
              >
                Submit
              </button>
          </React.Fragment> 
            ) : (
              <div className="container">
                <div className="row">
                  vehicle successfully reserved
                </div>
                <div className="row">
                  <div className="col">
                    <Link to={"/configure"} className="btn btn-success">Show All Reservation</Link>
                  </div>
                </div>
              </div>
            )}
            </>
            
          )}
      </AuthContext.Consumer>
    );
  }
}

export default Payment;
