import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import SideBar from "../components/sidebar";
import ManageVendor from "../components/vendor/manageVendor";
import Contracts from "../components/vendor/contracts";
import PriorityList from "../components/vendor/priorityList";
import RightSideBar from "../components/rightSideBar";

class Vendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightbar: false
    };
  }
  onRightSideBar() {
    this.setState({
      rightbar: !this.state.rightbar
    });
  }
  render() {
    const { hash } = window.location;
    return (
      <div className="container-fluid">
        <SideBar />
        {this.state.rightbar ? (
          <RightSideBar rightSideBar={() => this.onRightSideBar()} />
        ) : null}
        {hash == "#/vendor/manageVendors" ? (
          <ManageVendor rightSideBar={() => this.onRightSideBar()} />
        ) : hash == "#/vendor/contracts" ? (
          <Contracts rightSideBar={() => this.onRightSideBar()} />
        ) : hash == "#/vendor/priorityList" ? (
          <PriorityList rightSideBar={() => this.onRightSideBar()} />
        ) : null}
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
)(Vendor);
