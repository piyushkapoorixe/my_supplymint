import React from "react";
import openRack from "../../assets/open-rack.svg";


class ItemConfiguration extends React.Component {
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
                                    ITEM CONFIGURATION
                                </label>
                            </li>
                            <li>
                                <p className="master_para">Manage application configuration and setting of items</p>
                            </li>
                        </ul>
                    </div>

                    <div style={{marginTop:  '60px'}}>
                        <hr className="Line-2" />
                    </div>

                    <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                        <ul className="list_style">
                            <li>
                                <label className="detail_label">
                                    CONFIGURATION 1
                                </label>
                            </li>
                            <li>
                                <p className="master_para">Change Hierarchy labels for your application</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                        <div className="container_box">
                            <ul className="list-inline">
                                <li>
                                    <input type="text" placeholder="H1 Level Name" className="conf_input_box" />
                                </li>
                                <li className="myspacing">
                                    <input type="text" placeholder="H2 Level Name" className="conf_input_box" />
                                </li>
                                <li className="myspacing">
                                    <input type="text" placeholder="H3 Level Name" className="conf_input_box" />
                                </li>
                                <li className="myspacing">
                                    <input type="text" placeholder="H4 Level Name" className="conf_input_box" />
                                </li>
                                <li className="myspacing">
                                    <input type="text" placeholder="H5 Level Name" className="conf_input_box" />
                                </li>
                            </ul>


                            <ul className="list-inline m-top-20">
                                <li>
                                    <input type="text" placeholder="H6 Level Name" className="conf_input_box" />
                                </li>

                            </ul>




                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12 pad-0 m-top-50">
                        <ul className="list_style">
                            <li>
                                <label className="detail_label">
                                    CONFIGURATION 2
                                </label>
                            </li>
                            <li>
                                <p className="master_para">Change Hierarchy labels for your application</p>
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
                                <li>
                                    <select className="conf2_input_box myspacing">
                                        <option>Applicable Events</option>
                                    </select>
                                </li>
                                <li>
                                    <select className="conf2_input_box myspacing">
                                        <option>Other Factors</option>
                                    </select>
                                </li>

                            </ul>
                            <ul className="list-inline m-top-10">
                                <li>
                                    <button className="conf_button">
                                        Configuration1
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" className="Fill-79">
                                            <path fill="#4A4A4A" fill-rule="evenodd" d="M10 1.007L8.993 0 5 3.993 1.007 0 0 1.007 3.993 5 0 8.993 1.007 10 5 6.007 8.993 10 10 8.993 6.007 5 10 1.007"
                                            />
                                        </svg>
                                    </button>


                                </li>
                                <li>
                                    <button className="conf_button">
                                        Configuration2
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" className="Fill-79">
                                            <path fill="#4A4A4A" fill-rule="evenodd" d="M10 1.007L8.993 0 5 3.993 1.007 0 0 1.007 3.993 5 0 8.993 1.007 10 5 6.007 8.993 10 10 8.993 6.007 5 10 1.007"
                                            />
                                        </svg>
                                    </button>


                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                        <div className="Rectangle-6 mysidemenu_list">
                            <div className="Rectangle-18">
                                <p className="Configuration-1">Configuration 1
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" className="Fill-79-new">

                                        <path fill="#4A4A4A" fill-rule="evenodd" d="M10 1.007L8.993 0 5 3.993 1.007 0 0 1.007 3.993 5 0 8.993 1.007 10 5 6.007 8.993 10 10 8.993 6.007 5 10 1.007"
                                        />
                                    </svg>
                                </p>


                            </div>
                            <p className="myrecords">12 Records</p>
                            <p className="Configuration-3">Configuration 3</p>
                            <p className="Configuration-4">Configuration 4</p>
                            <p className="Configuration-4">Configuration 5</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 18.6 11.5" className="Fill-203">
                                <path fill="#6D6DC9" fill-rule="evenodd" d="M17.186.628l-7.116 7.1-7.117-7.1L.767 2.814l9.303 9.302 9.302-9.302L17.186.628"
                                />
                            </svg>
                        </div>

                        

                        <div className="col-md-12 col-sm-12 pad-0 m-top-50">
                                <ul className="list_style">
                                    <li>
                                        <label className="detail_label">
                                            CONFIGURATION 3
                                        </label>
                                    </li>
                                    <li>
                                        <p className="master_para">Change Configuration labels and options</p>
                                    </li>
                                </ul>
                            </div>
        
        
        
                            <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                                <div className="container_box">
                                    <ul className="list-inline" style={{paddingTop: '24px'}}>
                                        <li>
                                            <input type="text" placeholder="UDF 1" className="conf3_input_box" />
        
                                        </li>
        
                                        <li className="myspacing">
                                            <input type="text" placeholder="UDF 2" className="conf3_input_box" />
        
                                        </li>
                                        <li className="myspacing">
                                            <input type="text" placeholder="UDF 3" className="conf3_input_box" />
        
                                        </li>
                                        <li className="myspacing">
                                            <input type="text" placeholder="UDF 4" className="conf3_input_box" />
        
                                        </li>
                                        <li className="myspacing">
                                            <input type="text" placeholder="UDF 5" className="conf3_input_box" />
        
                                        </li>
        
                                    </ul>
        
                                    <ul className="list-inline" style={{paddingTop: '35px'}}>
                                        <li>
                                            <input type="text" placeholder="UDF 6" className="conf3_input_box" />
        
                                        </li>
        
                                        <li className="myspacing">
                                            <input type="text" placeholder="UDF 7" className="conf3_input_box" />
        
                                        </li>
                                        <li className="myspacing">
                                            <input type="text" placeholder="UDF 8" className="conf3_input_box" />
        
                                        </li>
                                        <li className="myspacing">
                                            <input type="text" placeholder="UDF 9" className="conf3_input_box" />
        
                                        </li>
                                        <li className="myspacing">
                                            <input type="text" placeholder="UDF 10" className="conf3_input_box" />
        
                                        </li>
                                    </ul>
        
        
                                </div>
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
                                <label className="home_link">PRIVACY POLICY | TERMS OF USE</label>
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

export default ItemConfiguration;