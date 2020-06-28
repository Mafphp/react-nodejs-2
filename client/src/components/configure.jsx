import React, { Component } from "react";
import Criteria from "./form";
import Reservation from "./reservation";
import History from "./history";

import Cookies from "universal-cookie";
import API from "./services/httpservice";
import { updateStatus } from "./services/updateReservationStatus";
class Configure extends Component {
  state = {
    price: "",
    token: null,
    historyLists: [],
    reservList: [],
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    updateStatus();
    const reservList = await API.get("reservations/username/current");
    const historyList = await API.get("reservations/username/history");
    this.setState({
      historyList: historyList.data.data,
      reservList: reservList.data.data,
    });
    const token = new Cookies().get("token");
    if (!token) {
      this.props.history.push("/login");
    }
  }
  myCallback = (e) => {
    this.setState({ listData: e });
  };
  render() {
    const token = new Cookies().get("token");
    return (
      <React.Fragment>
        <div className="row m-2">
          <div className="col">
            <Criteria callbackFromParent={this.myCallback} />
          </div>
        </div>

        <div className="row m-2">
          <div className="col">
            <Reservation currentData={this.state.reservList} />
          </div>
        </div>
        <div className="row m-2">
          <div className="col ">
            <History historyData={this.state.historyList} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Configure;
