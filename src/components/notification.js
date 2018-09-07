import React from "react";
import shape from "../assets/shape.svg";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clearNotifications: false
    };
  }
  clearNotify() {
    this.setState({
      clearNotifications: true
    });
  }
  render() {
    return (
      <div
        className={
          this.props.notifyShow
            ? "notification_dropdown showNotify"
            : "notification_dropdown hideNotify"
        }
      >
        <div className="col-md-12 col-sm-12 m-top-bottom-10">
          <ul className="list-inline width_100">
            <li className="float_left">
              <h2>Notifications</h2>
            </li>
            {!this.state.clearNotifications ? (
              <li className="float_right">
                <button
                  onClick={() => this.clearNotify()}
                  className="notification_button"
                >
                  Clear
                </button>
              </li>
            ) : null}
          </ul>
        </div>
        {!this.state.clearNotifications ? (
          <div className="col-md-12 col-sm-12">
            <div className="border_top">
              <div className="col-md-8 col-sm-12 pad-0">
                <ul className="list-inline">
                  <li>
                    <img src={shape} className="noti_img" />
                  </li>
                  <li>
                    <label className="notification_content">
                      Profile updated successfully
                    </label>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12 pad-0">
                <ul className="list-inline text_align_right">
                  <li>
                    <span className="notification_dd">20-july-2018</span>
                    <ul className="list-inline text_align_right">
                      <li>
                        <span className="notification_dd">9:30 am</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-md-12 col-sm-12">
            <div className="border_top">
              <div className="col-md-12 col-sm-12 pad-0">
                <ul className="list-inline">
                  <li>
                    <label className="notification_alert">
                      {" "}
                      No Notifications As Of Now{" "}
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Notification;
