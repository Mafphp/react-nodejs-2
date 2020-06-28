import React, { Component } from "react";
import DataTable from "./DataTable";
class Vehicles extends Component {
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
        data={this.props.listCars}
      />

      // <div className="row">
      //   <div className="col-m2"></div>
      //   <div className="col">
      //     <table className="table">
      //       <thead>
      //         <tr>
      //           <th>category</th>
      //           <th>brand</th>
      //           <th>model</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {this.state.cars.map((car, i) => (
      //           <tr key={i}>
      //             <td>{car.category}</td>
      //             <td>{car.brand}</td>
      //             <td>{car.model}</td>
      //           </tr>
      //         ))}
      //         <tr>
      //           <td></td>
      //           <td></td>
      //           <td></td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </div>
      // </div>
    );
  }
}

export default Vehicles;
