import React, { Component } from "react";
import Criteria from "./form";
import Reservation from "./reservation";
import History from "./history";
import API from "./services/API";
import { AuthContext } from "../auth/AuthContext";
class Configure extends Component {
  state = {
    price: "",
    token: null,
    historyLists: [],
    reservList: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      reserveList: [],
      historyList: [],
    };
  }

  async componentDidMount() {
    // updateStatus();
    const reserveList = await API.getReservations();
    const historyList = await API.getHistory();
    this.setState({
      reserveList,
      historyList
    });
    
  }
  myCallback = (e) => {
    this.setState({ listData: e });
  };
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => (
          <React.Fragment>
          <div className="row m-2">
            <div className="col">
              <Criteria callbackFromParent={this.myCallback} />
            </div>
          </div>
  
          <div className="row m-2">
            <div className="col">
              <Reservation currentData={this.state.reserveList} />
            </div>
          </div>
          <div className="row m-2">
            <div className="col ">
              <History historyData={this.state.historyList} />
            </div>
          </div>
        </React.Fragment>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Configure;
