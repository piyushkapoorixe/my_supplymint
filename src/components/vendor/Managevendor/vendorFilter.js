import React from "react";

class VendorFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
    <div>
      <div className="modal fade" id="myModal">
        <div className="modal-content">
          <button
            onClick={(e) => this.props.closeFilter(e)}
            type="button"
            className="close" id=""
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="col-md-12 col-sm-12 pad-0">
            <ul className="list-inline">
              <li>
                <label className="filter_modal">FILTERS</label>
              </li>
              <li>
                <label className="filter_text">5 Filters applied</label>
              </li>
            </ul>
          </div>

          <div className="col-md-12 col-sm-12 pad-0">
            <div className="container_modal">
              <ul className="list-inline m-top-20">
                <li>
                  <button className="modal_btn">Administrator</button>
                  <span className="close_btn" aria-hidden="true">
                    &times;
                  </span>
                </li>
                <li>
                  <button className="modal_btn">Project Manager</button>
                  <span className="close_btn" aria-hidden="true">
                    &times;
                  </span>
                </li>
              </ul>

              <ul className="list-inline m-top-20">
                <li>
                  <select className="vendor_input_box">
                    <option>Choose Role</option>
                  </select>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Vendor Code"
                    className="vendor_input_box"
                  />
                </li>
                <li>
                  <select className="vendor_input_box">
                    <option>Choose Role</option>
                  </select>
                </li>
                <li>
                  <select className="vendor_input_box">
                    <option>Status</option>
                  </select>
                </li>
                <li>
                  <select className="vendor_input_box">
                    <option>City</option>
                  </select>
                </li>
                <li>
                  <select className="vendor_input_box">
                    <option>Country</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 pad-0">
            <div className="col-md-6 float_right pad-0 m-top-50">
              <ul className="list-inline text_align_right">
                <li>
                  <button className="modal_clear_btn">CLEAR FILTER</button>
                </li>
                <li>
                  <button className="modal_Apply_btn">APPLY</button>
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

export default VendorFilter;
