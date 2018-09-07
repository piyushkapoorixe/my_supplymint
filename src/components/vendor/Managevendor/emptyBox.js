import React from "react";
import openRack from "../../../assets/open-rack.svg";
import warning2 from "../../../assets/warning-2.svg";
class EmptyBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container_div m-top-100 " id="">
        <div className="col-md-12 col-sm-12">
          <div className="menu_path">
            <ul className="list-inline width_100">
              <li>
                <label className="home_link">Home > User > Vendors</label>
              </li>
              <li
                className="float_right"
                onClick={() => this.props.clickRightSideBar()}
              >
                <img src={openRack} className="right_sidemenu" />
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="container_content height-70vh">
            <div className="col-md-12 col-sm-12 pad-0">
              <ul className="list_style">
                <li>
                  <label className="contribution_mart">
                    MASTER V-MART <span>(MRP-CONTRIBUTION)</span>
                  </label>
                </li>
                <li>
                  <p className="master_para">Add Master data</p>
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 m-top-20 pad-0">
              <div className="records_div m-top-50">
                <ul className="record_list">
                  <li>
                    <img src={warning2} />
                  </li>
                  <li>
                    <p className="record_notification">
                      You have No Records added in your List !
                    </p>
                  </li>
                  <li>
                    <p className="record_para">
                      Create one by clicking below button
                    </p>
                  </li>
                  <li>
                    <button
                      onClick={() => this.props.addVendor()}
                      className="record_btn"
                    >
                      ADD NOW
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmptyBox;
