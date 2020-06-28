import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import API from "./services/API";
import { Link } from "react-router-dom";
import * as moment from "moment";

class Criteria extends Component {
  state = {
    startDate: moment().toDate(),
    endDate: moment().toDate(),
    KM: "",
    insurance: "",
    category: "",
    age: "",
    extraDriver: "",
    basePrice: "",
    totalNumberOfCategory: "",
    totalPrice: "",
    totalNumberOfBooked: "",
    numberOfavailability: "",
  };

  sendToParent = () => {
    const listInfo = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      category: this.state.category,
    };
    this.props.callbackFromParent(listInfo);
  };

  getBasePrice = async (e) => {
    // await API.post("vehicles/category", {
    //   category: `${e.target.value}`,
    // });
  };

  changeHandlerKM = (e) => {
    this.setState({ KM: e.target.value });
  };
  changeHandlerAge = (e) => {
    this.setState({ age: e.target.value });
  };
  changeHandlerIns = (e) => {
    this.setState({ insurance: e.target.value });
  };
  changeHandlerCategory = async (e) => {
    let value = e.target.value;
    const totalNumberOfCategory = await API.getAllVehiclesBaseOnCategory(value);
    const categoryPrice = await API.getCategoryPrice(value);
    this.setState({
      category: value,
      basePrice: categoryPrice,
      totalNumberOfCategory: totalNumberOfCategory,
    });
  };
  changeHandlerExtra = (e) => {
    this.setState({ extraDriver: e.target.value });
  };
  handleChange = (date, key) => {
    this.setState({
      [key]: date,
    });
  };
  handlertotalNumberOfBooked = async (e) => {
    e.preventDefault();
    let {
      startDate,
      endDate,
      KM,
      insurance,
      category,
      age,
      extraDriver,
      basePrice,
      totalPrice,
      totalNumberOfCategory,
      numberOfavailability,
      totalNumberOfBooked,
    } = this.state;
    const getReservationOnCategory = await API.getReservationBaseOnCategory({
      category: category,
      startDate: startDate,
      endDate: endDate,
    });
    console.log({getReservationOnCategory});
    // const res = await API.post("reservations/category", {
    //   category: category,
    //   startDate: startDate,
    //   endDate: endDate,
    // });
    this.setState({
      // totalNumberOfBooked: res.data.data,
      numberOfavailability: totalNumberOfCategory - totalNumberOfBooked,
    });

    if (numberOfavailability !== 0) this.calculatePrice();
    else console.log("Oppsssss");
    // if (result !== 0) calculatePrice();
  };

  calculatePrice = (e) => {
    // e.preventDefault();
    let { KM, insurance, age, extraDriver, basePrice, totalPrice } = this.state;
    let fivePercent = 5 / 100;
    let tenPercent = 10 / 100;
    let fifteenPercent = 15 / 100;
    let twentyPercent = 20 / 100;
    let totalPrices = basePrice;
    if (KM === "less 150KM") totalPrices += 0;
    else if (KM === "less 50KM") totalPrices -= fivePercent * basePrice;
    else if (KM === "Unlimited") totalPrices += fivePercent * basePrice;

    if (age === "below 25") totalPrices += fivePercent * basePrice;
    else if (age === "over 65") totalPrices += tenPercent * basePrice;
    else if (age === "25 to 65") totalPrices += 0;

    if (extraDriver !== "") totalPrices += fifteenPercent * basePrice;
    if (insurance === "Yes") totalPrices += twentyPercent * basePrice;
    // if (
    //   totalNumberOfCategory - totalNumberOfBooked <=
    //   tenPercent * totalNumberOfCategory
    // )
    //   basePrice += tenPercent * basePrice;

    this.setState({ totalPrice: totalPrices });
  };

  render() {
    const { numberOfavailability, totalPrice } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
            <label htmlFor="basic-url ">Starting Date </label>
                  <DatePicker
                    className="form-control"
                    selected={this.state.startDate}
                    onChange={(date) => this.handleChange(date, "startDate")}
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                  />
            </div>
          <div className="col">
          <label htmlFor="basic-url">End Date </label>
                    <DatePicker
                      className="form-control"
                      selected={this.state.endDate}
                      onChange={(date) => this.handleChange(date, "endDate")}
                      dateFormat="dd/MM/yyyy"
                      minDate={this.state.startDate}
                  />
          </div>
          </div>
          <div className="row">
              <div className="col">
              <label htmlFor="KM">KM</label>
                    <select
                      onChange={this.changeHandlerKM}
                      name=""
                      id="KM"
                      className="custom-select d-black w-100"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>less 50KM</option>
                      <option>less 150KM</option>
                      <option>Unlimited</option>
                    </select>
              </div>
              <div className="col">
              <label htmlFor="insurance">Insurance</label>
                    <select
                      onChange={(e) => this.changeHandlerIns(e)}
                      name=""
                      id="insurance"
                      className="form-control custom-select d-black w-100"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>No</option>
                      <option>Yes</option>
                    </select>
              </div>
              <div className="col">
              <label htmlFor="category">Category</label>
                    <select
                      onChange={(e) => this.changeHandlerCategory(e)}
                      name=""
                      id="category"
                      className="custom-select d-black w-100"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                      <option>D</option>
                      <option>E</option>
                    </select>
              </div>
          </div>
          <div className="row">
            <div className="col">
            <label htmlFor="Age">Age</label>
                    <select
                      onChange={this.changeHandlerAge}
                      name=""
                      id="Age"
                      className="custom-select d-black w-100"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>below 25</option>
                      <option>25 to 65</option>
                      <option>over 65</option>
                    </select>
            </div>
            <div className="col">
            <label htmlFor="extraDriver">Extra Driver</label>
                    <select
                      onChange={this.changeHandlerExtra}
                      name=""
                      id="extraDriver"
                      className="form-control custom-select d-black w-100"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
            </div>
              <div className="col">
                <button
                      value=""
                      onClick={this.handlertotalNumberOfBooked}
                      className="btn btn-danger btn-sm m-5"
                    >
                      Search
                    </button>
              </div>
          </div>
          <div className="row">
                  <div className="col">
                    <p>
                      {numberOfavailability} cars are Available and the Price is {totalPrice}, please click Book for reservation
                    </p>
                  </div>
                  <div className="col">
                  <Link
                    to={{
                      pathname: "/payment",
                      state: this.state,
                    }}
                    className="btn btn-primary"> Book </Link>
                  </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Criteria;
