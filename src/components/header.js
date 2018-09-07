import React from "react";
import Notification from "./notification";
import notification from "../assets/notification.svg";
import profile from "../assets/profile.jpg";
import network from "../assets/network.png";
import shape from "../assets/shape.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: 1,
      notifyShow: false
    };
  }

  onShowHide() {
    this.setState({
      notifyShow: !this.state.notifyShow
    });
  }

  render() {
    const { notification } = this.state;
    return (
      <header className="header">
        <ul className="header_list">
          <li>
            <img src={network} className="logo_img m-lft-10" />
          </li>
          <li className="first_child">
            <h2 className="supplymint_header">
              SUPPLY
              <span>MINT</span>
              <li>
                <p className="header_para">A turningcloud initiative</p>
              </li>
            </h2>
          </li>
          <li
            className="humburger m-0"
            onClick={e => this.props.showHide(e)}
            id="toggle_sidemenu"
          >
            <i className="fa">&#xf038;</i>
          </li>
        </ul>

        <ul className="header_list float_right">
          <li>
            <input
              className="search_input"
              type="search"
              placeholder="Search"
            />
            <i className="fa fa-search search_icon" aria-hidden="true" />
          </li>
          <li>
            <div className="bell_div">
              <svg
                className="bell_icon"
                onClick={() => this.onShowHide()}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="31"
                viewBox="0 0 25 31"
              >
                <g fill="none" fill-rule="nonzero">
                  <path
                    fill="#6D6DC9"
                    d="M12.5 30.405a3.2 3.2 0 0 0 3.084-2.347H9.416a3.2 3.2 0 0 0 3.084 2.347z"
                  />
                  <path
                    fill="#E9E9E9"
                    d="M24.539 24.03c-1.173-1.747-2.132-7.572-2.132-12.945 0-4.934-3.76-9.044-8.595-9.682.002-.029.005-.057.005-.086a1.317 1.317 0 0 0-2.634 0c0 .029.003.057.005.086-4.835.638-8.595 4.748-8.595 9.682 0 5.373-.96 11.198-2.132 12.945-1.172 1.746 2.662 3.175 8.521 3.175h7.035c5.86 0 9.694-1.428 8.522-3.175z"
                  />
                </g>
              </svg>
              <span className="badge" onClick={() => this.onShowHide()}>
                {notification}
              </span>
            </div>
            {this.state.notification ? (
              <Notification notifyShow={this.state.notifyShow} />
            ) : null}
          </li>
          <li>
            <img className="header_profile_img" src={profile} />
          </li>
          <li>
            <div className="dropdown">
              <button className="name_para">
                KRITIKA SINGH
                <i className="fa fa-caret-down down_icon" />
              </button>
              <div className="dropdown-content" />
            </div>

            <ul className="list-inline">
              <li>
                <p className="admin_para">ADMINISTRATOR</p>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
