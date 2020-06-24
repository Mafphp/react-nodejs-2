import React, { Component } from "react";

class Footers extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">
              web application exam @POLITO by Alireza Ashtari
            </span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footers;
