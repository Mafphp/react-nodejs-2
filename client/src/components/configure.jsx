import React, { Component } from "react";
import Criteria from "./form";
import Reservation from "./reservation";
import History from "./history";

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
    console.log("historyList", historyList);
    this.setState({ historyList: historyList.data.data });
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
