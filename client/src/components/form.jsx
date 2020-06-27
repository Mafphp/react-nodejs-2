import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Criteria extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
    KM: "",
    insurance: "",
    category: "",
    age: "",
    extraDriver: "",
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
  changeHandlercategory = (e) => {
    this.setState({ category: e.target.value });
    console.log(e.target.value);
  };
  changeHandlerExtra = (e) => {
    this.setState({ extraDriver: e.target.value });
    console.log(e.target.value);
  };
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleChange2 = (date) => {
    this.setState({
      endDate: date,
    });
  };

  render() {
    console.log(Object.values(this.state));
    console.log(Object.keys(this.state));
    return (
      <React.Fragment>
        <form>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="basic-url ">Starting Date </label>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={(date) => this.handleChange(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                  />
                </td>
                <td>
                  <div>
                    <label htmlFor="basic-url">End Date </label>
                    <DatePicker
                      selected={this.state.endDate}
                      onChange={(date) => this.handleChange2(date)}
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
                      onChange={this.changeHandlerIns}
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
                      onChange={this.changeHandlercategory}
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
                    onClick={this.handleDelete}
                    className="btn btn-danger btn-sm m-5"
                  >
                    Search
                  </button>
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
