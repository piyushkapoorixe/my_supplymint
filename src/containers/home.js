import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import SideBar from "../components/sidebar";
import Dashboard from '../components/dashboard';
import TopDiv from "../components/homeDashboard/topDiv";
import TopStore from "../components/homeDashboard/topStorenItems";
import SalesTrends from "../components/homeDashboard/salesTrend";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid">
        <SideBar />
        <div className="container-fluid">
          <div className="container_div m-top-100">
            <TopDiv />

            <div className="container-fluid">
              <div className="col-md-12 col-sm-12 pad-0 m-top-20">
                <TopStore />
                <SalesTrends />
              </div>
          <Dashboard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
