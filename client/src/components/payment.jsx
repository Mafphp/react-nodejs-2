import React, { Component } from "react";
import Cookies from "universal-cookie";

class Payment extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const token = new Cookies().get("token")
    if (token && (!this.props.location.state || !this.props.location.state.totalPrice)) {
      this.props.history.push('/configure') 
    }
    if (!token) {
      this.props.history.push('/login') 
    }
  }
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
              <div className="invalid-feedback">Expiration date required</div>
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
          <button Redirect="/configure" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Payment;
