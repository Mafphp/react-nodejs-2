import React, { Component } from "react";
import DataTable from "./DataTable";
const History = (props) => {
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
      title={"History List"}
      data={props.listReservations}
    />
  );
};

export default History;
