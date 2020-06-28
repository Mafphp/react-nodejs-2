import React, { Component } from "react";
import DataTable from "./DataTable";
const History = (props) => {
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
  return (
    <DataTable
      columns={columns}
      title={"History List"}
      data={props.historyData}
    />
  );
};

export default History;
