import React from "react";

class RightSideBar extends React.Component {
  render() {
    return (
      <nav className="right_sidebar" id="rightsidebar">
        <div className="col-md-12 col-sm-12 m-top-10">
          <button
            onClick={() => this.props.rightSideBar()}
            className="rightsideclose"
            id="close_right"
          >
            close
          </button>
        </div>
        <div className="col-md-12 col-sm-12">
          <ul className="pad-0">
            <li>
              <h2 className="right_menu_head">Heading</h2>
            </li>
            <li>
              <p className="para_right_menu">
                Supplymint is designed to track and manage all IT and non-IT
                Assets of organizations. Each company wants to track the status
                and condition of their all assets to improve their productivity
                and lower the maintenance cost. This solution will help in
                achieving the same, following are the features:
              </p>
            </li>

            <li>
              <p className="content_goes m-top-5">Content Goes Here…</p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default RightSideBar;
