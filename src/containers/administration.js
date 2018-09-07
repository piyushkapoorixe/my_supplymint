import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import SideBar from "../components/sidebar";
import Organization from "../components/administration/organization";
import Roles from "../components/administration/roles";
import Users from "../components/administration/users";
import Site from "../components/administration/site";
import SiteMapping from "../components/administration/siteMapping";
import Datasync from "../components/administration/datasync";
import Custom from "../components/administration/custom";

class Administration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const hash = window.location.hash;
    return (
      <div className="container-fluid">
        <SideBar />
        {hash == "#/administration/custom" ? (
          <Custom />
        ) : hash == "#/administration/dataSync" ? (
          <Datasync />
        ) : hash == "#/administration/siteMapping" ? (
          <SiteMapping />
        ) : hash == "#/administration/roles" ? (
          <Roles />
        ) : hash == "#/administration/users" ? (
          <Users />
        ) : hash == "#/administration/site" ? (
          <Site />
        ) : hash == "#/administration/organization" ? (
          <Organization />
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
)(Administration);
