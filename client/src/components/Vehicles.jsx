import React, { Component } from "react";
import * as axios from 'axios';
// import API from "../services/http.service";
class Vehicles extends Component {
  state = {
    cars: [],
  };
  async componentDidMount() {
    const result = await axios.get('http://localhost:3002/users')
    this.setState({
      cars: result.data.data
    })
    console.log(result);
    // const { data: cars } = await API.get(`vehicles`);
    // this.setState({ cars });

    // console.log(response);
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>firstname</th>
            <th>surname</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {this.state.cars.map((car, i) => (
            <tr key={i}>
              <td>{car.id}</td>
              <td>{car.firstname}</td>
              <td>{car.surname}</td>
              <td>{car.age}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Vehicles;
