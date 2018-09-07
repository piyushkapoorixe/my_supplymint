import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import ItemConfiguration from "../components/item/itemConfiguration";
import ItemConfigurationTable from "../components/item/itemConfigurationTable";
import ItemRoute from "../components/item/itemRoute";
import ItemMapping from "../components/item/itemMapping";
import SideBar from "../components/sidebar";
import RightSideBar from "../components/rightSideBar";

class Item extends React.Component {
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
        {hash == "#/item/itemConfiguration" ? (
          <ItemConfiguration rightSideBar={() => this.onRightSideBar()} />
        ) : hash == "#/item/itemMapping" ? (
          <ItemMapping rightSideBar={() => this.onRightSideBar()} />
        ) : hash == "#/item/itemRoute" ? (
          <ItemRoute rightSideBar={() => this.onRightSideBar()} />
        ) : hash == "#/item/itemConfigurationTable" ? (
            <ItemConfigurationTable rightSideBar={() => this.onRightSideBar()} />
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
)(Item);
