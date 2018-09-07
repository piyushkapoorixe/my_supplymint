import React from "react";
import openRack from "../../assets/open-rack.svg";

class ItemMapping extends React.Component {
  render() {
    return (
      <div className="container_div m-top-100" id="vendor_manage">
        <div className="col-md-12 col-sm-12">
          <div className="menu_path">
            <ul className="list-inline width_100">
              <li>
                <label className="home_link">
                  Home > Administrator > Item Mapping{" "}
                </label>
              </li>
              <li className="float_right" onClick={() => this.props.rightSideBar()}>
                <img src={openRack} className="right_sidemenu" />
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="container_content1">
            <div className="col-md-12 col-sm-12 pad-0">
              <ul className="list_style">
                <li>
                  <label className="contribution_mart">ITEM MAPPING</label>
                </li>
                <li>
                  <p className="master_para">Add Item Mapping for Enterprise</p>
                </li>
              </ul>
            </div>

            <div className="col-md-12 col-sm-12 pad-0 m-top-10">
              <div className="container_box">
                <ul className="list-inline">
                  <li>
                    <select className="mapping_input_box">
                      <option>Site</option>
                    </select>
                  </li>

                  <li className="myspacing">
                    <select className="mapping_input_box">
                      <option>Item</option>
                    </select>
                  </li>
                  <li className="myspacing">
                    <input
                      type="text"
                      placeholder="Quantity"
                      className="map_input_box"
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-12 col-sm-12 pad-0 m-top-20" />

            <div className="col-md-12 col-sm-12 m-top-400">
              <ul className="list-inline">
                <li>
                  <button className="clear_button_vendor">Clear</button>
                </li>
                <li>
                  <button className="save_button_vendor">Save</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 m-top-20 pad-0">
          <div className="page_footer">
            <div className="col-md-6 col-sm-12">
              <ul className="list-inline">
                <li>
                  <label className="home_link">PRIVACY POLICY | CREDITS</label>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12">
              <ul className="list-inline copyright">
                <li>
                  <label className="home_link">COPYRIGHT@SUPPLYMINT</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemMapping;
