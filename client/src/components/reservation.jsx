import React, { Component } from "react";
import DataTable from "./DataTable";
import API from "./services/API";
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
        name: "id",
      },
      {
        name: "startDate",
        label: "Starting Date",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "endDate",
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

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "standard",
      tableBodyHeight: "100%",
      tableBodyMaxHeight: "",
      print: false,
      download: false,
      viewColumns: false,
      onRowsDelete: async (rowsDeleted, dataRows) => {
        if (dataRows[0]) {
          const id = dataRows[0][0];
          await API.cancelReservation({id});
          this.props.history.push('configure');
        } else {
          alert('could not cancel last reservation')
        }
      }
    };
    return (
      <DataTable
        columns={columns}
        options={options}
        title={"Reservation List"}
        data={this.props.currentData}
      />
    );
  }
}

export default Reservation;
