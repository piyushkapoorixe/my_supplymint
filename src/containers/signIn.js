import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import illustrations from "../assets/illustrations.svg";
import back from "../assets/back.svg";
import logo from "../assets/logo.svg";
import pathdotted from "../assets/path-dotted.svg";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div className="container-fluid pad-0">
        <div className="noise_background">
            <div className="col-md-12 col-sm-12 pad-0">
                <div className="col-md-3 col-sm-12 pad-0">
                    <div className="left_side_container">
                        <div className="col-md-12 col-sm-12 pad-0">
                            <div className="top_container">
                                <div className="col-md-12 col-sm-12 pad-0">
                                    <ul className="list-inline m-lft-15">
                                        <li>
                                            <img src={back} className="back_icon"/>
                                        </li>
                                        <li>
                                            <label className="back_home">
                                                Return Home
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 col-xs-6 m-top-50 pad-0">
                                <div className="middle_container">
                                    <div className="col-md-12 col-sm-12 pad-0 m-top-60">
                                        <ul className="list-inline m-top-20">
                                            <li>
                                                <h4 className="signin">
                                                    SIGNIN
                                                </h4>
                                            </li>
                                            <li>
                                                <input className="input_box m-top-20" type="text" placeholder="USERNAME" />

                                            </li>
                                            <li>
                                                <input className="input_box m-top-20" type="text" placeholder="PASSWORD" />

                                            </li>
                                            <li>
                                                <p className="forgot_pass">
                                                    <Link className="link-forgotPassword" to="/forgotPassword">
                                                        Forgot Password?
                                                    </Link>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-12 col-sm-12 pad-0 m-top-35">
                                        <div className="oval">
                                            <i className="fa fa-angle-left oval_icon"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 pad-0 m-top-100">
                                        <button className="signin_btn">
                                            SIGN IN
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-sm-12 pad-0">
                                <div className="bottom_position">
                                    <ul className="pad-0">
                                        <li>
                                            <p>
                                                COPYRIGHT 2017-18
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                SUPPLYMINT
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-9 col-sm-12 pad-0">
                    <div className="right_side_container">
                        <div className="col-md-12 colsm-12 pad-0 m-top-50">
                            <div className="supply_mint_logo_div">
                                <div className="supply_mint_logo">
                                    <img src={logo} className="mint_logo"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 pad-0">
                            <div className="path_img">
                                <img src={pathdotted} />
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 m-top-5">
                            <div className="content_sigin">
                                <ul className="list-inline text-center">
                                    <li>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                            Lacus sed viverra tellus in hac habitasse platea. Dapibus ultrices in iaculis nunc. 
                                            Justo eget magna fermentum iaculis eu non diam phasellus. 
                                            Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                            <div className="flow_diagram_div">
                                <img src={illustrations} className="illustration_img" />
                            </div>
                        </div>
                    </div>
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
)(SignIn);
