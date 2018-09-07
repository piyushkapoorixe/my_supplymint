import React from "react";
import openRack from "../../assets/open-rack.svg";

class ItemConfigurationTable extends React.Component {
  render() {
    return (
        <div className="container_div m-top-100" id="vendor_manage">
            <div className="col-md-12 col-sm-12">
                <div className="menu_path">
                    <ul className="list-inline width_100">
                        <li>
                            <label className="home_link">Home > Item Configuration </label>
                        </li>
                        <li className="float_right" onClick={() => this.props.rightSideBar()}>
                            <img src={openRack} className="right_sidemenu" />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="container_content">
                    <div className="col-md-6 col-sm-12 pad-0">
                        <ul className="list_style">
                            <li>
                                <label className="contribution_mart">
                                    ITEM CONFIGURATION
                                </label>
                            </li>
                            <li>
                                <p className="master_para">lorem ipsum doler immet</p>
                            </li>

                            <li className="m-top-20">
                                <label className="export_data_div">
                                    Export Data
                                </label>
                                <ul className="list-inline m-top-10">
                                    <li>
                                        <button className="button_home">
                                            CSV
                                        </button>
                                    </li>
                                    <li>
                                        <button className="button_home">
                                            XLS
                                        </button>
                                    </li>
                                    <li>
                                        <button className="filter_button">
                                            FILTER
                                        </button>
                                        <svg className="filter_control" xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15">
                                            <path fill="#FFF" fill-rule="nonzero" d="M1.285 2.526h9.79a1.894 1.894 0 0 0 1.79 1.263c.82 0 1.515-.526 1.789-1.263h1.368a.62.62 0 0 0 .632-.631.62.62 0 0 0-.632-.632h-1.368A1.894 1.894 0 0 0 12.864 0c-.821 0-1.516.526-1.79 1.263H1.286a.62.62 0 0 0-.631.632.62.62 0 0 0 .631.631zM12.865.842c.589 0 1.052.463 1.052 1.053 0 .59-.463 1.052-1.053 1.052-.59 0-1.053-.463-1.053-1.052 0-.59.464-1.053 1.053-1.053zm3.157 5.684h-9.79a1.894 1.894 0 0 0-1.789-1.263c-.821 0-1.516.526-1.79 1.263H1.286a.62.62 0 0 0-.631.632.62.62 0 0 0 .631.631h1.369a1.894 1.894 0 0 0 1.789 1.264c.821 0 1.516-.527 1.79-1.264h9.789a.62.62 0 0 0 .632-.631.62.62 0 0 0-.632-.632zM4.443 8.211c-.59 0-1.053-.464-1.053-1.053 0-.59.464-1.053 1.053-1.053.59 0 1.053.463 1.053 1.053 0 .59-.464 1.053-1.053 1.053zm11.579 3.578h-5.579a1.894 1.894 0 0 0-1.79-1.263c-.82 0-1.515.527-1.789 1.263H1.285a.62.62 0 0 0-.631.632.62.62 0 0 0 .631.632h5.58a1.894 1.894 0 0 0 1.789 1.263c.82 0 1.515-.527 1.789-1.263h5.579a.62.62 0 0 0 .632-.632.62.62 0 0 0-.632-.632zm-7.368 1.685c-.59 0-1.053-.463-1.053-1.053 0-.59.463-1.053 1.053-1.053.589 0 1.052.464 1.052 1.053 0 .59-.463 1.053-1.052 1.053z"
                                            />
                                        </svg>

                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-sm-12 pad-0">
                        <ul className="list-inline circle_list">
                            <li>
                                <div className="circle plus mytooltip">
                                    <span className="mytooltiptext">
                                        Add Item Configuration <span>Please Click on add icon to Add New Item Configuration
                                        </span>
                                    </span>
                                </div>

                            </li>
                        </ul>
                        <ul className="list-inline search_list">
                            <li>
                                <input type="search" placeholder="Search" className="search_bar" />
                                <img src="../imgs/search.svg" className="search_img" />
                            </li>
                        </ul>
                    </div>


                    <div className="col-md-12 col-sm-12 col-xs-12 pad-0 m-top-20">
                        <table className="table">
                            <thead>
                                <th>
                                    <label>HLEVEL 1 NAME</label>
                                </th>
                                <th>
                                    <label>HLEVEL 2 NAME</label>
                                </th>
                                <th>
                                    <label>HLEVEL 3 NAME</label>
                                </th>
                                <th>
                                    <label>HLEVEL 4 NAME</label>
                                </th>
                                <th>
                                    <label>HLEVEL 5 NAME</label>
                                </th>
                                <th>
                                    <label>HLEVEL 6 NAME</label>
                                </th>
                                <th>
                                    <label>APPLICATION SEASONS</label>
                                </th>
                                <th>
                                    <label>APPLICATION EVENTS</label>
                                </th>
                                <th>
                                    <label>OTHER FACTORS</label>
                                </th>

                                <th>
                                    <label>UDF 1</label>
                                </th>
                                <th>
                                    <label>UDF 2</label>
                                </th>
                                <th>
                                    <label>UDF 3</label>
                                </th>
                                <th>
                                    <label>UDF 4</label>
                                </th>
                                <th>
                                    <label> UDF 5</label>
                                </th>
                                <th>
                                    <label>UDF 6</label>
                                </th>
                                <th>
                                    <label>UDF 7</label>
                                </th>
                                <th>
                                    <label>UDF 8</label>
                                </th>
                                <th>
                                    <label>UDF 9</label>
                                </th>

                                <th>
                                    <label>ARTICLE CODE</label>
                                </th>

                                <th>
                                    <label>ACTION</label>
                                </th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <label>
                                            Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions 
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions 
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>

                                    <td>
                                        <ul className="list-inline">
                                            <li>
                                                <button className="edit_button">
                                                    EDIT
                                                </button>
                                            </li>
                                            <li>
                                                <button className="delete_button">
                                                    DELETE
                                                </button>
                                            </li>
                                            <li>
                                                <button className="save_button">
                                                    SAVE
                                                </button>
                                            </li>
                                        </ul>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions                                        
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                                Turningcloud solutions
                                        </label>
                                    </td>

                                    <td>
                                        <ul className="list-inline">
                                            <li>
                                                <button className="edit_button">
                                                    EDIT
                                                </button>
                                            </li>
                                            <li>
                                                <button className="delete_button">
                                                    DELETE
                                                </button>
                                            </li>
                                            <li>
                                                <button className="save_button">
                                                    SAVE
                                                </button>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                        <div className="col-md-12 col-sm-12 col-xs-12 pad-0">
                            <ul className="list-inline m-top-10">
                                <li>
                                    <button className="Rectangle-10">
                                        3
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" className="Shape">
                                            <path fill="#6D6DC9" fill-rule="nonzero" d="M13.099 1.388L7.4 7.084a.808.808 0 0 1-.572.241.808.808 0 0 1-.571-.24L.56 1.387A.807.807 0 0 1 .319.815a.82.82 0 0 1 .814-.813h11.392a.82.82 0 0 1 .814.813c0 .216-.088.42-.24.573z"
                                            />
                                        </svg>
                                    </button>


                                </li>

                            </ul>
                            <ul className="list-inline m-top-10" style={{marginLeft: '850px'}}>
                                <li className="layer">1</li>
                                <li className="layer">2</li>
                                <li className="layer3 Rectangle-8" style={{marginLeft: '5px'}}>3</li>
                                <li className="layer">4</li>
                                <li className="layer">5</li>
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
                                <label className="home_link">PRIVACY POLICY | TERM OF USE</label>
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


export default ItemConfigurationTable;