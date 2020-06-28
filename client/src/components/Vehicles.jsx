import React, { Component } from "react";
import DataTable from "./DataTable";
import API from './services/API'
import { AuthContext } from "../auth/AuthContext";
class Vehicles extends Component {
  state = {
    vehicles: []
  }
  async componentDidMount() {
    console.log('aaaaaa');
    const vehicles = await API.getVehicles();
    this.setState({
      vehicles
    });
  }
  render() {
    const columns = [
      {
        name: "category",
        label: "category",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "brand",
        label: "brand",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "model",
        label: "model",
        options: {
          filter: true,
          sort: true,
        },
      },
    ];
    return (
        <DataTable
          columns={columns}
          title={"Vehicles List"}
          data={this.state.vehicles}
        />
    );
  }
}

export default Vehicles;
