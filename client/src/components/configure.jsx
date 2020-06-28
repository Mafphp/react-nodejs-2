import React, { Component } from "react";
import Criteria from "./form";
import Reservation from "./reservation";
import History from "./history";

import Booking from "./booking";
import { Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import API from "./services/httpservice";
class Configure extends Component {
  state = {
    price: "",
    token: null,
    historyLists: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      listData: null,
    };
  }
  async componentDidMount() {
    const historyList = await API.get("reservations/username/history");
    this.setState({ historyList: historyList.data.data });
    const token = new Cookies().get("token");
    console.log("token");
    if (!token) {
      this.props.history.push("/login");
    }
    // this.setState({token})
  }
  myCallback = (e) => {
    this.setState({ listData: e });
  };
  render() {
    console.log("aaaaaaaaaaa");
    const token = new Cookies().get("token");
    console.log(token);

    return (
      <React.Fragment>
        <div className="row m-2">
          <div className="col">
            <Criteria callbackFromParent={this.myCallback} />
          </div>
        </div>

        <div className="row m-2">
          <div className="col">
            <Reservation />
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
