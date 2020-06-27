import React, { Component } from "react";
import DataTable from "./DataTable";
class Reservation extends Component {
  state = {};

  handleDelete = (reservation) => {
    const reservations = this.props.reservations.filter(
      (r) => r._id !== reservation._id
    );
    this.setState({ reservations });
  };
  render() {
    const columns = [
      {
        name: "start_date",
        label: "Starting Date",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "end_date",
        label: "End Date",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "category",
        label: "Category",
        options: {
          filter: true,
          sort: true,
        },
      },
    ];
    return (
      <DataTable
        columns={columns}
        title={"Reservation List"}
        data={this.props.listReservations}
      />
    );
  }
}

export default Reservation;
