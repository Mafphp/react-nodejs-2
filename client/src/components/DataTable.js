import React from "react";
import MUIDataTable from "mui-datatables";
export default function DataTable({ columns, data, title }) {
  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    tableBodyHeight: "100%",
    tableBodyMaxHeight: "",
    print: false,
    download: false,
    viewColumns: false,
  };
  return (
    <React.Fragment>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
    </React.Fragment>
  );
}
