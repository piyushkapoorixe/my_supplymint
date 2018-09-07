import React from "react";
import openRack from "../../../assets/open-rack.svg";
import VendorFilter from "./vendorFilter";

class ViewVendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: false
    };
  }
  openFilter(e) {
    e.preventDefault();
    this.setState({
      filter: !this.state.filter
    });
  }
  render() {
    console.log(this.state.filter);
    
    return (
      <div className="container-fluid">
        <div className="container_div m-top-100" id="vendor_manage">
          <div className="col-md-12 col-sm-12 pad-lft-0">
            <div className="menu_path">
              <ul className="list-inline m-lft-0 width_100 m-0">
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

          <div className="col-md-12 col-sm-12 col-xs-12 pad-lft-0">
            <div className="container_content">
              <div className="col-md-6 col-sm-12 pad-0">
                <ul className="list_style">
                  <li>
                    <label className="contribution_mart">VENDORS</label>
                  </li>
                  <li>
                    <p className="master_para">lorem ipsum doler immet</p>
                  </li>

                  <li className="m-top-20">
                    <label className="export_data_div">Export Data</label>
                    <ul className="list-inline m-lft-0 m-top-10">
                      <li>
                        <button className="button_home">CSV</button>
                      </li>
                      <li>
                        <button className="button_home">XLS</button>
                      </li>
                      <li>
                        <button
                          className="filter_button"
                          onClick={e => this.openFilter(e)}
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          FILTER
                        </button>
                        <svg
                          className="filter_control"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                        >
                          <path
                            fill="#FFF"
                            fill-rule="nonzero"
                            d="M1.285 2.526h9.79a1.894 1.894 0 0 0 1.79 1.263c.82 0 1.515-.526 1.789-1.263h1.368a.62.62 0 0 0 .632-.631.62.62 0 0 0-.632-.632h-1.368A1.894 1.894 0 0 0 12.864 0c-.821 0-1.516.526-1.79 1.263H1.286a.62.62 0 0 0-.631.632.62.62 0 0 0 .631.631zM12.865.842c.589 0 1.052.463 1.052 1.053 0 .59-.463 1.052-1.053 1.052-.59 0-1.053-.463-1.053-1.052 0-.59.464-1.053 1.053-1.053zm3.157 5.684h-9.79a1.894 1.894 0 0 0-1.789-1.263c-.821 0-1.516.526-1.79 1.263H1.286a.62.62 0 0 0-.631.632.62.62 0 0 0 .631.631h1.369a1.894 1.894 0 0 0 1.789 1.264c.821 0 1.516-.527 1.79-1.264h9.789a.62.62 0 0 0 .632-.631.62.62 0 0 0-.632-.632zM4.443 8.211c-.59 0-1.053-.464-1.053-1.053 0-.59.464-1.053 1.053-1.053.59 0 1.053.463 1.053 1.053 0 .59-.464 1.053-1.053 1.053zm11.579 3.578h-5.579a1.894 1.894 0 0 0-1.79-1.263c-.82 0-1.515.527-1.789 1.263H1.285a.62.62 0 0 0-.631.632.62.62 0 0 0 .631.632h5.58a1.894 1.894 0 0 0 1.789 1.263c.82 0 1.515-.527 1.789-1.263h5.579a.62.62 0 0 0 .632-.632.62.62 0 0 0-.632-.632zm-7.368 1.685c-.59 0-1.053-.463-1.053-1.053 0-.59.463-1.053 1.053-1.053.589 0 1.052.464 1.052 1.053 0 .59-.463 1.053-1.052 1.053z"
                          />
                        </svg>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 col-sm-12 pad-0">
                <ul className="list-inline m-lft-0 circle_list">
                  <li>
                    <div className="circle plus tooltip">
                      <ul className="tooltiptext list-inline">
                        <li><span> Add Master{" "}</span></li>
                        <li>
                          <p>
                          Please click on add icon to add new master data</p>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className="list-inline m-lft-0 search_list">
                  <li>
                    <input
                      type="search"
                      placeholder="Search"
                      className="search_bar"
                    />
                    {/* <img src="../imgs/search.svg"  className="search_img"/> */}
                    <svg
                      className="search_img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path
                        fill="#C5C5C5"
                        fill-rule="nonzero"
                        d="M7.327 1.098A5.968 5.968 0 0 1 13.29 7.06a5.968 5.968 0 0 1-5.962 5.962 5.968 5.968 0 0 1-5.961-5.962A5.968 5.968 0 0 1 7.327 1.1zm0-1.098a7.06 7.06 0 1 0 0 14.119A7.06 7.06 0 0 0 7.327 0zm10.291 16.241l-4.176-4.176a7.96 7.96 0 0 1-1.109 1.11l4.176 4.175a.782.782 0 0 0 1.11 0 .784.784 0 0 0 0-1.109z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>

              <div className="col-md-12 col-sm-12 col-xs-12 pad-0 m-top-20">
                <table className="table table_vendor">
                  <thead>
                    <tr>
                    <th>
                      <label> ORGANISATIONS</label>
                    </th>
                    <th>
                      <label>VENDOR ORGANISATION</label>
                    </th>
                    <th>
                      <label>VENDOR CODE</label>
                    </th>
                    <th>
                      <label>DESCRIPTION</label>
                    </th>
                    <th>
                      <label> ACTIVE</label>
                    </th>
                    <th>
                      <label>CITY</label>
                    </th>
                    <th>
                      <label>STATE</label>
                    </th>
                    <th>
                      <label>COUNTRY</label>
                    </th>
                    <th>
                      <label> ZIP</label>
                    </th>
                    <th>
                      <label>PHONE</label>
                    </th>
                    <th>
                      <label>FAX</label>
                    </th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.props.VendorData.map((data, key) => (
                      <tr key={key}>
                        <td>
                          <label>{data.org}</label>
                        </td>
                        <td>
                          <label>{data.vorg}</label>
                        </td>
                        <td>
                          <label>{data.vcode}</label>
                        </td>
                        <td>
                          <label>New Delhi</label>
                        </td>
                        <td>
                          <label>Sanjeev Kumar</label>
                        </td>
                        <td>
                          <label>New Delhi</label>
                        </td>
                        <td>
                          <label>TCB0065467867</label>
                        </td>
                        <td>
                          <label>New Delhi</label>
                        </td>
                        <td>
                          <label>New Delhi</label>
                        </td>
                        <td>
                          <label>TCB0065467867</label>
                        </td>
                        <td>
                          <label>New Delhi</label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {this.state.filter ? <VendorFilter closeFilter={(e) => this.openFilter(e)} /> : null}
      </div>
      
    );
  }
}

export default ViewVendor;
