import React from "react";
import MUIDataTable from "mui-datatables";
export default function DataTable({ columns, data, title, options }) {
  let _options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    tableBodyHeight: "100%",
    tableBodyMaxHeight: "",
    print: false,
    download: false,
    viewColumns: false,
  };
  if (options) {
    _options = options;
  }
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
