import React from "react";
import openRack from "../../assets/open-rack.svg";

class itemRoute extends React.Component {
  render() {
    return (
        <div className="container_div m-top-100" id="vendor_manage">
            <div className="col-md-12 col-sm-12">
                <div className="menu_path">
                    <ul className="list-inline width_100">
                        <li>
                            <label className="home_link">Home > Administrator > Item Configuration </label>
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
                                <label className="contribution_mart">
                                        ITEM ROUTE
                                </label>
                            </li>
                            <li>
                                <p className="master_para">Manage Item Route for Enterprise</p>
                            </li>
                        </ul>
                    </div>

                    <div style={{marginTop: '60px'}}>
                        <hr className="Line-2" />
                    </div>

                    

                    

                    <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                        <ul className="list_style">
                            <li>
                                <label className="detail_label">
                                        AVAILABLE MAPPINGS <span className="head17">17</span>
                                </label>
                            </li>
                            <li>
                                <p className="master_para">Total Number of Available Mapping for selected item</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                        <div className="container_box">
                            <ul className="list-inline">
                                <li>
                                    <select className="conf2_input_box">
                                        <option>Applicable Seasons</option>
                                    </select>
                                </li>
                                <li className="myspacing">
                                    <select className="conf2_input_box">
                                        <option>Applicable Events</option>
                                    </select>
                                </li>
                                <li className="myspacing">
                                    <select className="conf2_input_box">
                                        <option>Other Factors</option>
                                    </select>
                                </li>

                            </ul>
                            
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12 pad-0 m-top-20">
                        <div className="Rectangle-6 mysidemenu_list">
                            
                            
                            <p className="Configuration-2">Datalist 2</p>
                            <p className="Configuration-4">Datalist 3</p>
                            <p className="Configuration-4">Datalist 10</p>
                            <p className="Configuration-4">Datalist 13</p>
                            <p className="Configuration-2">Datalist 2</p>
                            <p className="Configuration-4">Datalist 3</p>
                            <p className="Configuration-4">Datalist 10</p>
                            <p className="Configuration-4">Datalist 13</p>
                            <p className="Configuration-2">Datalist 2</p>
                            <p className="Configuration-4">Datalist 3</p>
                            <p className="Configuration-4">Datalist 10</p>
                            <p className="Configuration-4">Datalist 13</p>
                            <p className="Configuration-2">Datalist 2</p>
                            <p className="Configuration-4">Datalist 3</p>
                            <p className="Configuration-4">Datalist 10</p>
                            <p className="Configuration-4">Datalist 13</p>
                            <p className="Configuration-2">Datalist 2</p>
                            <p className="Configuration-4">Datalist 3</p>
                            <p className="Configuration-4">Datalist 10</p>
                            <p className="Configuration-4">Datalist 13</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 18.6 11.5" className="Fill-203">
                                <path fill="#6D6DC9" fill-rule="evenodd" d="M17.186.628l-7.116 7.1-7.117-7.1L.767 2.814l9.303 9.302 9.302-9.302L17.186.628"
                                />
                            </svg>
                        </div>

                        <div className="col-md-12 col-sm-12 m-top-50">
                            <ul className="list-inline">
                                <li>
                                    <button className="clear_button_vendor">
                                        Clear
                                    </button>
                                </li>
                                <li>
                                    <button className="save_button_vendor">
                                        Save
                                    </button>
                                </li>
                            </ul>
                        </div>

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

    )
  }
}

export default itemRoute;