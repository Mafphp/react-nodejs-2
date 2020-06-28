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

    // const options = {
    //   onRowsDelete: (rowsDeleted) => {
    //     const idsToDelete = rowsDeleted.data.map((d) => data[d.dataIndex].id); // array of all ids to to be deleted
    //     API.delete(idsToDelete, res).then(window.alert("Deleted!")); // your delete request here
    //   },
    // };
    return (
      <DataTable
        columns={columns}
        title={"Reservation List"}
        data={this.props.currentData}
      />
    );
  }
}

export default Reservation;
