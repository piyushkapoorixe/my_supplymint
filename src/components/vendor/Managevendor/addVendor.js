import React from "react";
import openRack from "../../../assets/open-rack.svg";

class AddVendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      ele: {}
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Vendor Organisation
    if (!fields["vendorOrganisation"]) {
      formIsValid = false;
      errors["vendorOrganisation"] = "Enter vendor organisation";
    }

    if (typeof fields["vendorOrganisation"] !== "undefined") {
      if (!fields["vendorOrganisation"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["vendorOrganisation"] = "Only letters";
      }
    }
    //Vendor Code
    if (!fields["vendorCode"]) {
      formIsValid = false;
      errors["vendorCode"] = "Enter Vendor Code ";
    }
    //description
    if (!fields["description"]) {
      formIsValid = false;
      errors["description"] = "Enter description ";
    }
    //status
    if (!fields["status"]) {
      formIsValid = false;
      errors["status"] = "Select status ";
    }

    //city
    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "Select city ";
    }
    //State
    if (!fields["state"]) {
      formIsValid = false;
      errors["state"] = "Select state";
    }
    //country
    if (!fields["country"]) {
      formIsValid = false;
      errors["country"] = "Select country";
    }
    //zip
    if (!fields["zip"]) {
      formIsValid = false;
      errors["zip"] = "Enter Zip";
    }

    if (typeof fields["zip"] !== "undefined") {
      if (!fields["zip"].match(/(^\d{6}$)|(^\d{6}-\d{4}$)/)) {
        formIsValid = false;
        errors["zip"] = "Enter valid zip code";
      }
    }

    //contact number
    if (!fields["contactNumber"]) {
      formIsValid = false;
      errors["contactNumber"] = "Enter Contact number";
    }

    if (typeof fields["contactNumber"] !== "undefined") {
      if (!fields["contactNumber"].match(/^\d{10}$/)) {
        formIsValid = false;
        errors["contactNumber"] = "Enter valid contact number";
      }
    }
    if (typeof fields["contactNumber"] !== "undefined") {
      if (!fields["contactNumber"].match(/^[1-9]\d+$/)) {
        formIsValid = false;
        errors["contactNumber"] = "Start Mobile No with 1-9";
      }
    }

    //fax
    if (!fields["fax"]) {
      formIsValid = false;
      errors["fax"] = "Enter fax number";
    }
    if (typeof fields["fax"] !== "undefined") {
      if (!fields["fax"].match(/^\d{6}$/)) {
        formIsValid = false;
        errors["fax"] = "Enter valid Fax number";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Enter email id";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    //url

    if (!fields["url"]) {
      formIsValid = false;
      errors["url"] = "Enter url";
    }

    if (typeof fields["url"] !== "undefined") {
      if (
        !fields["url"].match(
          /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
        )
      ) {
        formIsValid = false;
        errors["url"] = "Enter valid Url";
      }
    }

    //note
    if (!fields["note"]) {
      formIsValid = false;
      errors["note"] = "Enter notes";
    }

    //name

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Enter name";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = " Enter Only letters";
      }
    }

    //phone number
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Enter phone number";
    }

    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^\d{10}$/)) {
        formIsValid = false;
        errors["phone"] = "Enter valid phone number";
      }
    }
    if (typeof fields["phone"] !== "undefined") {
      if (!fields["phone"].match(/^[1-9]\d+$/)) {
        formIsValid = false;
        errors["phone"] = "Start phone No with 1-9";
      }
    }

    //contactemail
    if (!fields["contactemail"]) {
      formIsValid = false;
      errors["contactemail"] = "Enter email id";
    }

    if (typeof fields["contactemail"] !== "undefined") {
      let lastAtPos = fields["contactemail"].lastIndexOf("@");
      let lastDotPos = fields["contactemail"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["contactemail"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["contactemail"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["contactemail"] = "Email is not valid";
      }
    }
    //address

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "Enter address";
    }

    //paymentTerms
    if (!fields["paymentTerms"]) {
      formIsValid = false;
      errors["paymentTerms"] = "Enter payment terms";
    }

    //leadtimeDays
    if (!fields["leadtimeDays"]) {
      formIsValid = false;
      errors["leadtimeDays"] = "Enter lead time days";
    }

    //purchasingAddress
    if (!fields["purchasingAddress"]) {
      formIsValid = false;
      errors["purchasingAddress"] = "Enter purchasing address ";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }
  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
      var showspan = this.state.ele;

      $(showspan).show();
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
    var d = this;
    $(
      'select,.select2,input[type="text"],input[type="file"],input[type="date"],input[type="checkbox"],input[type="radio"],select'
    ).on("keydown", function() {
      var name = $(this).attr("id");
      var va = $("#" + name).siblings();
      d.setState({
        ele: [va]
      });

      $(va).hide();
    });
    return (
      <div className="container-fluid">
        <div className="container_div m-top-100" id="vendor_manage">
          <div className="col-md-12 col-sm-12 pad-lft-0">
            <div className="menu_path">
              <ul className="list-inline width_100 m-0">
                <li>
                  <span className="home_link">Home > User > Vendors</span>
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
            <div className="container_content1">
              <div className="col-md-12 col-sm-12 pad-0">
                <ul className="list_style">
                  <li>
                    <span className="contribution_mart">VENDORS</span>
                  </li>
                  <li>
                    <p className="master_para">lorem ipsum doler immet</p>
                  </li>
                </ul>
              </div>
              <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                <ul className="list_style">
                  <li>
                    <span className="detail_span">BASIC DETAILS</span>
                  </li>
                  <li>
                    <p className="master_para">lorem ipsum doler immet</p>
                  </li>
                </ul>
              </div>
              <form
                name="vendorForm"
                className="vendorForm"
                onSubmit={this.contactSubmit.bind(this)}
              >
                <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                  <div className="container_box list_margin">
                    <div className="col-md-12 col-sm-12 col-xs-12 pad-0">
                      <div className="col-md-2 pad-0">
                        <select className="vendor_select_box">
                          <option>Turningcloud solutions</option>
                        </select>
                      </div>
                      <div className="col-md-2 col-sm-2 pad-0">
                        <input
                          ref="vendorOrganisation"
                          name="vendorOrganisation"
                          id="vendorOrganisation"
                          type="text"
                          placeholder="Vendor Organisation"
                          className="vendor_input_box"
                          onChange={this.handleChange.bind(
                            this,
                            "vendorOrganisation"
                          )}
                          value={this.state.fields["vendorOrganisation"]}
                        />
                        <span className="error" for="vendorOrganisation">
                          {this.state.errors["vendorOrganisation"]}
                        </span>
                      </div>
                      <div className="col-md-2 col-sm-4 pad-0">
                        <input
                          ref="vendorCode"
                          name="vendorCode"
                          id="vendorCode"
                          type="text"
                          placeholder="Vendor Code"
                          className="vendor_input_box"
                          onChange={this.handleChange.bind(this, "vendorCode")}
                          value={this.state.fields["vendorCode"]}
                        />
                        <span className="error" for="vendorCode">
                          {this.state.errors["vendorCode"]}
                        </span>
                      </div>

                      <div className="col-md-2 pad-0">
                        <input
                          ref="descirption"
                          name="description"
                          id="description"
                          type="text"
                          placeholder="Description"
                          className="vendor_input_box"
                          onChange={this.handleChange.bind(this, "description")}
                          value={this.state.fields["description"]}
                        />
                        <span className="error" for="description">
                          {this.state.errors["description"]}
                        </span>
                      </div>
                      <div className="col-md-2 pad-0">
                        <select
                          ref="status"
                          name="status"
                          id="status"
                          className="vendor_input_box"
                          onChange={this.handleChange.bind(this, "status")}
                          value={this.state.fields["status"]}
                        >
                          <option value="">Select</option>
                          <option value="active">Active</option>
                        </select>
                        <span className="error" for="status">
                          {this.state.errors["status"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-xs-12 pad-0 m-top-20">
                      <div className="col-md-2 pad-0">
                        <select
                          ref="city"
                          name="city"
                          id="city"
                          className="vendor_input_box"
                          onChange={this.handleChange.bind(this, "city")}
                          value={this.state.fields["city"]}
                        >
                          <option>City</option>
                        </select>
                        <span className="error" for="city">
                          {this.state.errors["city"]}
                        </span>
                      </div>
                      <div className="col-md-2 pad-0">
                        <select
                          ref="state"
                          name="state"
                          id="state"
                          className="vendor_input_box"
                          onChange={this.handleChange.bind(this, "state")}
                          value={this.state.fields["state"]}
                        >
                          <option>State</option>
                        </select>
                        <span className="error" for="state">
                          {this.state.errors["state"]}
                        </span>
                      </div>
                      <div className="col-md-2 pad-0">
                        <select
                          ref="country"
                          name="country"
                          id="country"
                          className="vendor_input_box"
                          onChange={this.handleChange.bind(this, "country")}
                          value={this.state.fields["country"]}
                        >
                          <option>Country</option>
                        </select>
                        <span className="error" for="country">
                          {this.state.errors["country"]}
                        </span>
                      </div>
                      <div className="col-md-2 pad-0">
                        <input
                          type="number"
                          placeholder="Zip"
                          maxLength="6"
                          className="vendor_input_box"
                          ref="zip"
                          name="zip"
                          id="zip"
                          className="vendor_input_box"
                          onChange={this.handleChange.bind(this, "zip")}
                          value={this.state.fields["zip"]}
                        />
                        <span className="error" for="zip">
                          {this.state.errors["zip"]}
                        </span>
                      </div>
                      <div className="col-md-2 pad-0">
                        <input
                          type="number"
                          placeholder="Contact Number"
                          maxLength="10"
                          className="vendor_input_box"
                          ref="contactNumber"
                          name="contactNumber"
                          id="contactNumber"
                          className="vendor_input_box"
                          onChange={this.handleChange.bind(
                            this,
                            "contactNumber"
                          )}
                          value={this.state.fields["contactNumber"]}
                        />
                        <span className="error" for="contactNumber">
                          {this.state.errors["contactNumber"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-xs-12 pad-0 m-top-20">
                      <div className="col-md-2 pad-0">
                        <input
                          type="number"
                          maxLength="6"
                          placeholder="Fax"
                          className="vendor_input_box"
                          ref="fax"
                          name="fax"
                          id="fax"
                          onChange={this.handleChange.bind(this, "fax")}
                          value={this.state.fields["fax"]}
                        />
                        <span className="error" for="fax">
                          {this.state.errors["fax"]}
                        </span>
                      </div>
                      <div className="col-md-2 pad-0">
                        <input
                          type="text"
                          placeholder="Email"
                          className="vendor_input_box"
                          ref="email"
                          name="email"
                          id="email"
                          onChange={this.handleChange.bind(this, "email")}
                          value={this.state.fields["email"]}
                        />
                        <span className="error" for="email">
                          {this.state.errors["email"]}
                        </span>
                      </div>
                      <div className="col-md-2 pad-0">
                        <input
                          type="text"
                          placeholder="URL"
                          className="vendor_input_box"
                          ref="url"
                          name="url"
                          id="url"
                          onChange={this.handleChange.bind(this, "url")}
                          value={this.state.fields["url"]}
                        />
                        <span className="error" for="url">
                          {this.state.errors["url"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-xs-12 pad-0 m-top-20">
                      <div className="col-md-4 pad-0">
                        <textarea
                          className="text_area_vendor"
                          placeholder="Write Note..."
                          rows="4"
                          cols="10"
                          ref="note"
                          name="note"
                          id="note"
                          onChange={this.handleChange.bind(this, "note")}
                          value={this.state.fields["note"]}
                        />
                        <span className="error" for="note">
                          {this.state.errors["note"]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-sm-12 pad-0 m-top-20">
                  <ul className="list_style m-lft-0">
                    <li>
                      <span className="detail_span">CONTACT</span>
                    </li>
                    <li>
                      <p className="master_para">
                        Add your contact details here
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                  <div className="container_box list_margin">
                    <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                      <div className="col-md-2 pad-0">
                        <input
                          type="text"
                          placeholder="Name"
                          className="vendor_input_box"
                          ref="name"
                          name="name"
                          id="name"
                          onChange={this.handleChange.bind(this, "name")}
                          value={this.state.fields["name"]}
                        />
                        <span className="error" for="name">
                          {this.state.errors["name"]}
                        </span>
                      </div>
                      <div className="col-md-2 pad-0">
                        <input
                          type="number"
                          placeholder="Phone"
                          className="vendor_input_box"
                          ref="phone"
                          name="phone"
                          id="phone"
                          onChange={this.handleChange.bind(this, "phone")}
                          value={this.state.fields["phone"]}
                        />
                        <span className="error" for="phone">
                          {this.state.errors["phone"]}
                        </span>
                      </div>
                      <div className="col-md-2 pad-0">
                        <input
                          type="text"
                          placeholder="Email"
                          className="vendor_input_box"
                          ref="contactemail"
                          name="contactemail"
                          id="contactemail"
                          onChange={this.handleChange.bind(
                            this,
                            "contactemail"
                          )}
                          value={this.state.fields["contactemail"]}
                        />
                        <span className="error" for="contactemail">
                          {this.state.errors["contactemail"]}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                      <div className="col-md-2 pad-0">
                        <textarea
                          placeholder="Address..."
                          className="text_area_vendor"
                          ref="address"
                          name="address"
                          id="address"
                          onChange={this.handleChange.bind(this, "address")}
                          value={this.state.fields["address"]}
                        />
                        <span className="error" for="address">
                          {this.state.errors["address"]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                  <div className="container_box list_margin">
                    <div className="col-md-12 col-sm-12 pad-0 ">
                      <div className="col-md-2 pad-0">
                        <input
                          type="text"
                          placeholder="Payment terms"
                          className="vendor_input_box"
                          ref="paymentTerms"
                          name="paymentTerms"
                          id="paymentTerms"
                          onChange={this.handleChange.bind(
                            this,
                            "paymentTerms"
                          )}
                          value={this.state.fields["paymentTerms"]}
                        />
                        <span className="error" for="paymentTerms">
                          {this.state.errors["paymentTerms"]}
                        </span>
                      </div>
                      <div className="col-md-2 pad-0">
                        <input
                          type="text"
                          placeholder="Order Lead Time Days"
                          className="vendor_input_box"
                          ref="leadtimeDays"
                          name="leadtimeDays"
                          id="leadtimeDays"
                          onChange={this.handleChange.bind(
                            this,
                            "leadtimeDays"
                          )}
                          value={this.state.fields["leadtimeDays"]}
                        />
                        <span className="error" for="leadtimeDays">
                          {this.state.errors["leadtimeDays"]}
                        </span>
                      </div>
                    </div>

                    <div className="col-md-12 col-sm-12 pad-0 m-top-10">
                      <div className="col-md-2 pad-0">
                        {/* <input type="textarea" placeholder="Purchasing Address" className="text_area_vendor" ref="purchasingAddress" name="purchasingAddress" id="purchasingAddress" onChange={this.handleChange.bind(this,"purchasingAddress")} value={this.state.fields["purchasingAddress"]} /> */}
                        <textarea
                          placeholder="Purchasing Address"
                          className="text_area_vendor"
                          ref="purchasingAddress"
                          name="purchasingAddress"
                          id="purchasingAddress"
                          onChange={this.handleChange.bind(
                            this,
                            "purchasingAddress"
                          )}
                          value={this.state.fields["purchasingAddress"]}
                        />
                        <span className="error" for="purchasingAddress">
                          {this.state.errors["purchasingAddress"]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-sm-12 m-bot-15 m-top-50">
                    <ul className="list-inline m-lft-0">
                      <li>
                        <button className="clear_button_vendor" type="reset">
                          Clear
                        </button>
                      </li>
                      <li>
                        <button className="save_button_vendor">Save</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddVendor;
