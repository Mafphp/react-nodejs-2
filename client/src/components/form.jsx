import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getprice } from "./services/getprice";
import API from "./services/httpservice";
import { Link } from "react-router-dom";
import * as moment from "moment";
import Booking from "./booking";

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
    const res = await API.post("vehicles/category", {
      category: `${e.target.value}`,
    });
  };

  changeHandlerKM = (e) => {
    this.setState({ KM: e.target.value });
    console.log(e.target.value);
  };
  changeHandlerAge = (e) => {
    this.setState({ age: e.target.value });
    console.log(e.target.value);
  };
  changeHandlerIns = (e) => {
    this.setState({ insurance: e.target.value });
    console.log(e.target.value);
  };
  changeHandlercategory = async (e) => {
    let value = e.target.value;
    console.log(e.target.value);
    const totalNumberOfCategory = await API.post("vehicles/category/total", {
      category: `${value}`,
    });
    console.log(totalNumberOfCategory);
    const res = await API.post("vehicles/category", {
      category: `${value}`,
    });
    console.log(res);
    this.setState({
      category: value,
      basePrice: res.data.data.price,
      totalNumberOfCategory: totalNumberOfCategory.data.data,
    });
    console.log(value);
  };
  changeHandlerExtra = (e) => {
    this.setState({ extraDriver: e.target.value });
    console.log(e.target.value);
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
    const res = await API.post("reservations/category", {
      category: { category },
      startDate: { startDate },
      endDate: { endDate },
    });
    console.log(res.data.data);
    this.setState({
      totalNumberOfBooked: res.data.data,
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
    console.log(basePrice);
    if (age === "below 25") totalPrices += fivePercent * basePrice;
    else if (age === "over 65") totalPrices += tenPercent * basePrice;
    else if (age === "25 to 65") totalPrices += 0;
    console.log(basePrice);

    if (extraDriver !== "") totalPrices += fifteenPercent * basePrice;
    if (insurance === "Yes") totalPrices += twentyPercent * basePrice;
    // if (
    //   totalNumberOfCategory - totalNumberOfBooked <=
    //   tenPercent * totalNumberOfCategory
    // )
    //   basePrice += tenPercent * basePrice;

    this.setState({ totalPrice: totalPrices });
    console.log(totalPrice);
  };

  render() {
    console.log("value of caat", this.state.totalNumberOfCategory);
    console.log("startDate", this.state.startDate);
    console.log("endDate", this.state.endDate);
    console.log(Object.keys(this.state));
    const { numberOfavailability, totalPrice } = this.state;

    return (
      <React.Fragment>
        <form>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="basic-url ">Starting Date </label>
                  <DatePicker
                    selected={this.state.date}
                    onChange={(value: any) => {
                      // value here is javascript date object
                      this.setState({ date: moment(value) });
                    }}
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                  />
                </td>
                <td>
                  <div>
                    <label htmlFor="basic-url">End Date </label>
                    <DatePicker
                      selected={this.state.endDate}
                      onChange={(date) => this.handleChange(date, "endDate")}
                      dateFormat="dd/MM/yyyy"
                      minDate={this.state.startDate}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col-md-7">
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
                </td>
                <td>
                  <div className="col-md-7">
                    <label htmlFor="insurance">Insurance</label>
                    <select
                      onChange={(e) => this.changeHandlerIns(e)}
                      name=""
                      id="insurance"
                      className="custom-select d-black w-100"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div className="col-md-7">
                    <label htmlFor="category">Category</label>
                    <select
                      onChange={(e) => this.changeHandlercategory(e)}
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
                </td>
              </tr>
              <tr>
                <td>
                  <div className="col-md-3 mb-3">
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
                </td>
                <td>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="extraDriver">Extra Driver</label>
                    <select
                      onChange={this.changeHandlerExtra}
                      name=""
                      id="extraDriver"
                      className="custom-select d-black w-100"
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
                </td>
                <td>
                  <button
                    value=""
                    onClick={this.handlertotalNumberOfBooked}
                    className="btn btn-danger btn-sm m-5"
                  >
                    Search
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <p>
                      {numberOfavailability} cars are Available and the Price is
                      {totalPrice}, please click Book for reservation
                    </p>
                  </div>
                </td>
                <td className="col ">
                  <Link
                    to={`/payment/${this.state.startDate}/${this.state.endDate}/${this.state.category}`}
                    className="btn btn-primary"
                  >
                    Book
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </React.Fragment>
    );
  }
}

export default Criteria;
