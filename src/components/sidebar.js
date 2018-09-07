import React from "react";
import Header from "./header";

import profile from "../assets/profile.jpg";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  isActiveSubLink(subLink) {
    return window.location.hash == `#/${subLink}`;
  }

  isActiveLink(menuLink) {
    const hash = window.location.hash.split("/")[1];
    return hash == `${menuLink}`;
  }

  onShowHide() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <Header showHide={() => this.onShowHide()} />
        <nav
          className={
            this.state.show ? "sidemenu  menuShow" : "sidemenu menuHide"
          }
          id="sidebar"
        >
          <div className="sidemenu_header">
            <ul>
              <li>
                <div className="img_border">
                  <img className="profile_img" src={profile} />
                </div>
              </li>
              <li>
                <p>KRITIKA SINGH</p>
              </li>
              <li>
                <p>suman@turningcloud.com</p>
              </li>
              <li>
                <p>Project Manager</p>
              </li>
            </ul>
          </div>

          <ul className="sidemenu_list m-p-0">
            <li className={this.isActiveLink("home") ? "active" : null}>
              <div className="sidemenu_icons_div">
                <svg
                  className="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                >
                  <g fill="#6D6DC9" fill-rule="nonzero">
                    <path d="M21.972 8.719a1.71 1.71 0 0 0-.646-1.148L12.342.514a2.181 2.181 0 0 0-2.7 0L.656 7.57a1.723 1.723 0 0 0-.29 2.417c.586.746 1.67.876 2.417.29l7.414-5.824a1.282 1.282 0 0 1 1.587 0l7.415 5.824a1.72 1.72 0 0 0 2.772-1.559" />
                    <path d="M18.575 10.843L11.83 5.584a1.363 1.363 0 0 0-1.678 0l-6.744 5.26a.45.45 0 0 0-.174.355V17.2c0 1.077.876 1.953 1.953 1.953h11.608a1.955 1.955 0 0 0 1.952-1.953V11.2a.45.45 0 0 0-.173-.356" />
                  </g>
                </svg>
              </div>

              <a href="#/home" id="home_toggle" className="">
                Home
              </a>
            </li>
            <li
              className={this.isActiveLink("vendor") ? "active" : null}
              data-toggle="collapse"
              data-target="#demo"
            >
              <div className="sidemenu_icons_div">
               <svg
                  className="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                >
                  <path
                    fill="#6D6DC9"
                    fill-rule="nonzero"
                    d="M.128 7.348c-.26.677-.044 1.27-.044 1.27.27.702.591.816 1.267.816.226 0 .438-.048.62-.13v8.438h8.937v-5.118h5.584v5.118h3.352V9.304c.183.082.394.13.621.13.675 0 1.12-.559 1.223-.935 0 0 .234-.708 0-1.15-.4-.752-3.413-7.34-3.413-7.34H3.54L.128 7.349zm2.451 1.15v-.107h-.005V7.348l2.31-5.9h1.845l-1.818 5.9V8.5c0 .517-.522.935-1.166.935-.644 0-1.166-.418-1.166-.935zm4.416 6.06H3.972v-3.022h3.022v3.022zm2.693-7.21V8.5c0 .516-.522.935-1.165.935-.645 0-1.167-.418-1.167-.935V7.348l.966-5.9h1.84l-.474 5.9zm3.611 2.086c-.643 0-1.165-.418-1.165-.935V7.348l-.475-5.9h1.835l.965 5.9V8.5c0 .015.003.031.004.046-.031.495-.54.889-1.164.889zm5.943-1.043h-.006v.108c0 .516-.522.935-1.166.935-.643 0-1.165-.418-1.165-.935V7.348l-1.819-5.9h1.846l2.31 5.9v1.043z"
                  />
                </svg>
              </div>
              <a className="collapse_para_list">
                Vendor Management
                <i className="fa fa-angle-down arrow_down_icon" />
              </a>
            </li>
            <ul id="demo" className="collapse list">
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/vendor/manageVendors"
                  className={
                    this.isActiveSubLink("vendor/manageVendors")
                      ? "active"
                      : null
                  }
                >
                  Manage Vendors
                </a>
              </li>
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/vendor/contracts"
                  className={
                    this.isActiveSubLink("vendor/contracts") ? "active" : null
                  }
                >
                  Contracts
                </a>
              </li>
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/vendor/priorityList"
                  className={
                    this.isActiveSubLink("vendor/priorityList")
                      ? "active"
                      : null
                  }
                >
                  Priority List
                </a>
              </li>
            </ul>
            <li
              className={this.isActiveLink("item") ? "active" : null}
              data-toggle="collapse"
              data-target="#demo2"
            >
              <div className="sidemenu_icons_div">
               <svg
                  className="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                >
                  <path
                    fill="#6D6DC9"
                    fill-rule="nonzero"
                    d="M.128 7.348c-.26.677-.044 1.27-.044 1.27.27.702.591.816 1.267.816.226 0 .438-.048.62-.13v8.438h8.937v-5.118h5.584v5.118h3.352V9.304c.183.082.394.13.621.13.675 0 1.12-.559 1.223-.935 0 0 .234-.708 0-1.15-.4-.752-3.413-7.34-3.413-7.34H3.54L.128 7.349zm2.451 1.15v-.107h-.005V7.348l2.31-5.9h1.845l-1.818 5.9V8.5c0 .517-.522.935-1.166.935-.644 0-1.166-.418-1.166-.935zm4.416 6.06H3.972v-3.022h3.022v3.022zm2.693-7.21V8.5c0 .516-.522.935-1.165.935-.645 0-1.167-.418-1.167-.935V7.348l.966-5.9h1.84l-.474 5.9zm3.611 2.086c-.643 0-1.165-.418-1.165-.935V7.348l-.475-5.9h1.835l.965 5.9V8.5c0 .015.003.031.004.046-.031.495-.54.889-1.164.889zm5.943-1.043h-.006v.108c0 .516-.522.935-1.166.935-.643 0-1.165-.418-1.165-.935V7.348l-1.819-5.9h1.846l2.31 5.9v1.043z"
                  />
                </svg>
              </div>
              <a className="collapse_para_list">
                Item
                <i className="fa fa-angle-down arrow_down_icon" />
              </a>
            </li>
            <ul id="demo2" className="collapse list">
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/item/itemConfiguration"
                  className={
                    this.isActiveSubLink("item/itemConfiguration")
                      ? "active"
                      : null
                  }
                >
                  Configuration
                </a>
              </li>
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/item/itemRoute"
                  className={
                    this.isActiveSubLink("item/itemRoute") ? "active" : null
                  }
                >
                  Route
                </a>
              </li>
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/item/itemMapping"
                  className={
                    this.isActiveSubLink("item/itemMapping")
                      ? "active"
                      : null
                  }
                >
                  Mapping
                </a>
              </li>
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/item/itemConfigurationTable"
                  className={
                    this.isActiveSubLink("item/itemConfigurationTable")
                      ? "active"
                      : null
                  }
                >
                  Configuration Table
                </a>
              </li>
            </ul>
            <li
              className={
                this.isActiveLink("inventoryPlanning") ? "active" : null
              }
            >
              <div className="sidemenu_icons_div">
                <svg
                  className="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="26"
                  viewBox="0 0 22 26"
                >
                  <g fill="#6D6DC9" fill-rule="nonzero">
                    <path d="M17.39 14.588c-1.492.34-4.164.681-5.08.393-.393-.183-1.362-1.257-1.886-1.833A25.964 25.964 0 0 0 9.01 11.68c-.76-.76-1.362-1.283-2.462-1.571-1.336-.341-4.688-.734-5.631 1.492C-.08 13.933.079 20.01.13 24.331c0 .367.236.68.629.68h7.15c.445 0 .602-.235.628-.575.026-.236.262-4.348.42-7.281.68.655 1.361 1.205 2.12 1.44.708.236 1.546.315 2.41.315 2.043 0 4.19-.446 4.74-.577 1.022-.235 1.677-1.257 1.441-2.278a1.884 1.884 0 0 0-2.279-1.467z" />
                    <circle cx="5.055" cy="4.479" r="4.348" />
                    <path d="M20.874 3.955H19.8V3.3a.414.414 0 0 0-.419-.419h-.524a.414.414 0 0 0-.419.419v.655h-2.514V3.3a.414.414 0 0 0-.42-.419h-.523a.414.414 0 0 0-.42.419v.655h-1.073a1.05 1.05 0 0 0-1.048 1.047v6.26a1.05 1.05 0 0 0 1.048 1.048h7.36a1.05 1.05 0 0 0 1.047-1.048V4.976c.026-.55-.445-1.021-1.021-1.021zm.445 7.28c0 .236-.21.446-.445.446h-7.36a.459.459 0 0 1-.445-.445V6.364h8.25v4.872z" />
                    <path d="M14.221 8.643h1.1a.262.262 0 0 0 .262-.262v-.838a.262.262 0 0 0-.262-.262h-1.1a.262.262 0 0 0-.261.262v.838c0 .13.13.262.261.262zM16.657 8.643h1.1a.262.262 0 0 0 .262-.262v-.838a.262.262 0 0 0-.262-.262h-1.1a.262.262 0 0 0-.262.262v.838c0 .13.105.262.262.262zM19.093 8.643h1.1a.262.262 0 0 0 .262-.262v-.838a.262.262 0 0 0-.262-.262h-1.1a.262.262 0 0 0-.262.262v.838c0 .13.105.262.262.262zM14.221 10.817h1.1a.262.262 0 0 0 .262-.262v-.838a.262.262 0 0 0-.262-.262h-1.1a.262.262 0 0 0-.261.262v.838c0 .157.13.262.261.262zM16.657 10.817h1.1a.262.262 0 0 0 .262-.262v-.838a.262.262 0 0 0-.262-.262h-1.1a.262.262 0 0 0-.262.262v.838c0 .157.105.262.262.262zM19.093 10.817h1.1a.262.262 0 0 0 .262-.262v-.838a.262.262 0 0 0-.262-.262h-1.1a.262.262 0 0 0-.262.262v.838c0 .157.105.262.262.262z" />
                  </g>
                </svg>
              </div>
              <a href="#/inventoryPlanning">Inventory Planning</a>
            </li>
            <li
              className={this.isActiveLink("demandPlanning") ? "active" : null}
            >
              <div className="sidemenu_icons_div">
                <svg
                  className="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="28"
                  viewBox="0 0 23 28"
                >
                  <g fill="#6D6DC9" fill-rule="nonzero">
                    <path d="M5.11 19.613a3.765 3.765 0 1 0 0-7.53 3.765 3.765 0 0 0 0 7.53zm0-5.34a1.574 1.574 0 1 1 0 3.15 1.574 1.574 0 0 1 0-3.15z" />
                    <path d="M21.828.036H8.411c-.604 0-1.095.49-1.095 1.095v9.789c0 .604.49 1.095 1.095 1.095h5.726l-.063 1.437h-.203c-.533 0-.988.384-1.079.91l-.722 4.205-3.08 1.32H1.171c-.605 0-1.095.49-1.095 1.095v6.23h2.19v-5.135h6.95c.148 0 .295-.03.432-.087l3.833-1.643c.342-.146.586-.455.65-.822l.654-3.882h.391l-.797 4.97-5.681 3.03c-.357.19-.58.562-.58.967v2.601h2.19v-1.944l5.572-2.979c.302-.16.512-.453.567-.791l1.095-6.777a1.095 1.095 0 0 0-1.082-1.27h-.197l.063-1.438h5.501c.605 0 1.095-.49 1.095-1.095V1.13c0-.605-.49-1.095-1.095-1.095zm-1.095 9.788h-4.304l.063-1.388-2.19-.098-.064 1.486H9.507V2.226h11.226v7.598z" />
                    <path d="M10.794 3.116h3.491v2.19h-3.491zM10.794 5.854h8.146v2.19h-8.146z" />
                  </g>
                </svg>
              </div>
              <a href="#/demandPlanning">Demand Planning</a>
            </li>
            <li
              className={this.isActiveLink("replenishment") ? "active" : null}
            >
              <div className="sidemenu_icons_div">
                <svg
                  className="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="19"
                  viewBox="0 0 26 19"
                >
                  <g fill="#6D6DC9" fill-rule="nonzero">
                    <path d="M10.566 15.257A7.931 7.931 0 0 1 8.254 9.22h4.021L6.138 3.083 0 9.22h3.826a9.158 9.158 0 0 0 2.681 6.542c2.828 2.829 7.038 3.417 10.454 1.787a7.946 7.946 0 0 1-6.395-2.293zM22.174 9.226a9.158 9.158 0 0 0-2.681-6.542C16.665-.145 12.453-.733 9.039.898a7.94 7.94 0 0 1 6.394 2.292 7.926 7.926 0 0 1 2.313 6.036h-4.023l6.138 6.139L26 9.226h-3.826z" />
                  </g>
                </svg>
              </div>
              <a href="#/replenishment">Replenishment</a>
            </li>
            <li
              className={this.isActiveLink("administration") ? "active" : null}
              data-toggle="collapse"
              data-target="#admin"
            >
              <div className="sidemenu_icons_div">
               <svg
                  className="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                >
                  <path
                    fill="#6D6DC9"
                    fill-rule="nonzero"
                    d="M.055 21.093v-4.048c-.004-.615.27-1.2.745-1.59a30.748 30.748 0 0 1 4.011-2.76.58.58 0 0 1 .82.26L8.36 18.97l.991-2.356a1.38 1.38 0 1 1 1.302 0l.984 2.359 2.732-6.018a.58.58 0 0 1 .82-.264 30.7 30.7 0 0 1 4.012 2.764c.475.39.749.975.745 1.59v4.05a1.177 1.177 0 0 1-1.177 1.178H1.234a1.18 1.18 0 0 1-1.18-1.18zM5.086 5.184c.115-.425.285-.833.505-1.214l-.568-.81a.75.75 0 0 1 .084-.962l.575-.584a.75.75 0 0 1 .961-.084l.812.568a5.052 5.052 0 0 1 1.222-.507l.17-.975A.75.75 0 0 1 9.588 0h.827a.75.75 0 0 1 .738.62l.17.97c.425.116.833.285 1.214.505l.812-.568a.75.75 0 0 1 .97.087l.584.584a.75.75 0 0 1 .084.961l-.568.811c.22.381.39.79.505 1.214l.975.17a.75.75 0 0 1 .62.74v.826a.75.75 0 0 1-.62.74l-.975.17a5.052 5.052 0 0 1-.505 1.215l.568.812a.75.75 0 0 1-.084.961l-.584.587a.75.75 0 0 1-.961.084l-.818-.58c-.381.22-.79.39-1.214.505l-.17.975a.75.75 0 0 1-.74.62h-.829a.75.75 0 0 1-.738-.62l-.17-.975a5.052 5.052 0 0 1-1.217-.505l-.811.568a.75.75 0 0 1-.968-.072l-.584-.585a.75.75 0 0 1-.084-.96l.568-.812c-.22-.382-.39-.79-.505-1.216l-.975-.17a.75.75 0 0 1-.62-.74v-.827a.75.75 0 0 1 .62-.738l.984-.173zm2.58 1.323a2.334 2.334 0 1 0 4.668 0 2.334 2.334 0 0 0-4.668.002v-.002z"
                  />
                </svg>
              </div>
              <a>
                Administration
                <i className="fa fa-angle-down arrow_down_icon" />
              </a>
            </li>
            <ul id="admin" className="collapse list">
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/administration/organisation"
                  className={
                    this.isActiveSubLink("administration/organisation")
                      ? "active"
                      : null
                  }
                >
                  Organisation
                </a>
              </li>
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/administration/roles"
                  className={
                    this.isActiveSubLink("administration/roles")
                      ? "active"
                      : null
                  }
                >
                  Roles
                </a>
              </li>
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/administration/users"
                  className={
                    this.isActiveSubLink("administration/users")
                      ? "active"
                      : null
                  }
                >
                  Users
                </a>
              </li>
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/administration/site"
                  className={
                    this.isActiveSubLink("administration/site")
                      ? "active"
                      : null
                  }
                >
                  Site
                </a>
              </li>
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/administration/siteMapping"
                  className={
                    this.isActiveSubLink("administration/siteMapping")
                      ? "active"
                      : null
                  }
                >
                  Site Mapping
                </a>
              </li>
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/administration/dataSync"
                  className={
                    this.isActiveSubLink("administration/dataSync")
                      ? "active"
                      : null
                  }
                >
                  Data Sync
                </a>
              </li>
              <li onClick={() => this.onShowHide()}>
                <a
                  href="#/administration/custom"
                  className={
                    this.isActiveSubLink("administration/custom")
                      ? "active"
                      : null
                  }
                >
                  Custom
                </a>
              </li>
            </ul>
            <li className={this.isActiveLink("reporting") ? "active" : null}>
              <div className="sidemenu_icons_div">
               <svg
                  className="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                >
                  <g fill="#6D6DC9" fill-rule="nonzero">
                    <path d="M20 3.75A3.761 3.761 0 0 0 16.25 0H3.75A3.761 3.761 0 0 0 0 3.75v15.625a3.761 3.761 0 0 0 3.75 3.75h12.5a3.761 3.761 0 0 0 3.75-3.75V3.75zm-1.25 15.625c0 1.375-1.125 2.5-2.5 2.5H3.75a2.507 2.507 0 0 1-2.5-2.5V3.75c0-1.375 1.125-2.5 2.5-2.5h1.875v1.563c0 1.374 1.125 2.5 2.5 2.5h3.75c1.375 0 2.5-1.125 2.5-2.5V1.25h1.875c1.375 0 2.5 1.125 2.5 2.5v15.625z" />
                    <path d="M6.188 9.688h7.625v1.25H6.188zM4.219 13.125h11.563v1.25H4.219zM4.219 16.563h11.563v1.25H4.219zM6.875 1.25h6.25v1.563c0 .687-.563 1.25-1.25 1.25h-3.75c-.688 0-1.25-.563-1.25-1.25V1.25z" />
                  </g>
                </svg>
              </div>
              <a href="#/reporting">Reporting</a>
            </li>
            <li
              className={
                this.isActiveLink("warehouseManagement") ? "active" : null
              }
            >
              <div className="sidemenu_icons_div">
                <svg
                  className="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                >
                  <path
                    fill="#6D6DC9"
                    fill-rule="nonzero"
                    d="M17.1 6.075l-6.75-5.063c-.8-.6-1.9-.6-2.7 0L.9 6.075a2.25 2.25 0 0 0-.9 1.8V18a2.25 2.25 0 0 0 2.25 2.25c.621 0 1.125-.504 1.125-1.125v-7.313c0-.931.756-1.687 1.688-1.687h7.875c.931 0 1.687.756 1.687 1.688v7.312c0 .621.504 1.125 1.125 1.125A2.25 2.25 0 0 0 18 18V7.875a2.25 2.25 0 0 0-.9-1.8zm-6.694 1.8H7.594a.844.844 0 1 1 0-1.688h2.812a.844.844 0 1 1 0 1.688zm3.094 6.188a.562.562 0 0 1-.563.562H5.064a.562.562 0 1 1 0-1.125h7.875a.562.562 0 0 1 .562.563zm0-2.25a.562.562 0 0 1-.563.562H5.064a.562.562 0 1 1 0-1.125h7.875a.562.562 0 0 1 .562.563zm0 4.5a.562.562 0 0 1-.563.562H5.064a.562.562 0 1 1 0-1.125h7.875a.562.562 0 0 1 .562.563zm0 2.25a.562.562 0 0 1-.563.562H5.064a.562.562 0 1 1 0-1.125h7.875a.562.562 0 0 1 .562.563z"
                  />
                </svg>
              </div>
              <a href="#/warehouseManagement">Warehouse Management</a>
            </li>
            <li className={this.isActiveLink("logistics") ? "active" : null}>
              <div className="sidemenu_icons_div">
               <svg
                  className="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                >
                  <g fill="#6D6DC9" fill-rule="nonzero">
                    <path d="M28.969 12.938l-2.657-.344-1.53-2.688c-.407-.719-1.188-1.156-2.032-1.156h-2.906c-.282 0-.5.219-.5.5v7.906c0 .282.218.5.5.5h3.687c.094 1.188 1.094 2.125 2.282 2.125a2.287 2.287 0 0 0 2.28-2.125h.72a1.04 1.04 0 0 0 1.03-1.031v-2.688c0-.5-.374-.937-.874-1zm-4.563-.438h-3.312c-.063 0-.094-.031-.094-.094v-2.125c0-.062.031-.094.094-.094h1.656c.313 0 .594.157.75.438l1 1.719c.031.062-.031.156-.094.156zm1.407 6.188a1.22 1.22 0 0 1-1.22-1.22 1.22 1.22 0 0 1 1.22-1.218 1.22 1.22 0 0 1 1.218 1.219 1.2 1.2 0 0 1-1.218 1.218zM17.531 15.063H3.406c-.281 0-.5.218-.5.5v1.562c0 .281.219.5.5.5h1.156c.094 1.188 1.094 2.125 2.282 2.125a2.287 2.287 0 0 0 2.281-2.125H17.5c.281 0 .5-.219.5-.5v-1.563c.063-.28-.188-.5-.469-.5zM6.875 18.686a1.22 1.22 0 0 1-1.219-1.218 1.22 1.22 0 0 1 1.219-1.219 1.2 1.2 0 0 1 1.219 1.219 1.22 1.22 0 0 1-1.219 1.218zM4.5 10.469c-.563 0-1.094-.094-1.625-.219v3.063c0 .28.219.5.5.5H17.5c.281 0 .5-.22.5-.5V5.625c0-.281-.219-.5-.5-.5h-7.188c-.218 3-2.75 5.344-5.812 5.344z" />
                    <path d="M8.875 4.594A4.334 4.334 0 0 0 4.531.25C2.125.25.156 2.188.156 4.594A4.334 4.334 0 0 0 4.5 8.937c2.406 0 4.375-1.968 4.375-4.343zM6.062 7.937c.22-.312.375-.687.532-1.125.25.063.468.125.687.22a3.12 3.12 0 0 1-1.218.905zm1.594-1.406c-.281-.125-.593-.218-.906-.312a5.81 5.81 0 0 0 .156-1.313h1.282a3.239 3.239 0 0 1-.532 1.625zm0-3.906c.313.469.5 1.031.532 1.625H6.905c-.031-.469-.062-.906-.156-1.313.313-.093.625-.187.906-.312zm-.406-.531a4.425 4.425 0 0 1-.688.219 3.754 3.754 0 0 0-.53-1.126c.5.25.905.532 1.218.907zM4.844.938c.437.187.843.718 1.125 1.53-.344.063-.75.095-1.125.126V.938zm0 2.28c.437 0 .875-.062 1.281-.155.063.343.125.75.156 1.187H4.844V3.219zm0 1.688H6.28c-.031.438-.062.813-.156 1.188a15.96 15.96 0 0 0-1.281-.157v-1.03zm0 1.688c.375 0 .75.062 1.125.125-.282.812-.688 1.343-1.125 1.531V6.594zM2.969 1.219c-.219.312-.375.687-.531 1.125-.25-.094-.47-.156-.688-.25.344-.375.75-.656 1.219-.875zM1.344 2.625c.281.125.593.219.906.313a5.81 5.81 0 0 0-.156 1.312H.813c.062-.594.25-1.125.53-1.625zm0 3.906a3.239 3.239 0 0 1-.532-1.625h1.282c.031.469.062.907.156 1.313-.313.093-.594.187-.906.312zm.406.532c.219-.094.438-.157.688-.22.124.438.312.813.53 1.126a3.882 3.882 0 0 1-1.218-.907zm2.438 1.156C3.75 8.03 3.344 7.5 3.063 6.688c.343-.063.75-.094 1.124-.125v1.656zm0-2.281c-.438.03-.875.062-1.282.156a11.04 11.04 0 0 1-.156-1.188h1.438v1.032zm0-1.688H2.75c.031-.438.063-.813.156-1.188.406.094.844.126 1.281.157V4.25zm0-1.656c-.375 0-.75-.063-1.125-.125.28-.813.687-1.344 1.124-1.531v1.656z" />
                  </g>
                </svg>
              </div>
              <a href="#/logistics">Logistics</a>
            </li>
            <li
              className={
                this.isActiveLink("inventoryManagement") ? "active" : null
              }
            >
              <div className="sidemenu_icons_div">
                <svg
                  className="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                >
                  <g fill="#6D6DC9" fill-rule="nonzero">
                    <path d="M4.77 13.308l.653-1c.039-.077.154-.116.23-.116.116 0 .193.039.232.116l.961 1.461.962-1.461c.038-.077.154-.116.23-.116.116 0 .193.039.231.116l.654 1v-2.885H4.77v2.885z" />
                    <path d="M11.538 10.423h-2v3.846a.303.303 0 0 1-.307.308c-.077 0-.193-.039-.231-.115L8.038 13l-.961 1.462c-.115.153-.385.153-.5 0L5.615 13l-.961 1.462c-.154.23-.539.115-.539-.154v-3.846H2.192a.303.303 0 0 0-.307.307v9c0 .154.115.308.307.308h9.346a.303.303 0 0 0 .308-.308v-9.077c-.038-.154-.154-.269-.308-.269zM15.654 13.27l.654-1.04c.038-.076.154-.115.23-.115.116 0 .193.039.231.116l.962 1.5.961-1.5c.039-.077.154-.116.231-.116.115 0 .192.039.23.116l.655 1.038v-2.846h-4.154v2.846z" />
                    <path d="M22.423 10.423h-2v3.846c0 .27-.385.385-.538.154l-.962-1.5-.961 1.5c-.116.154-.385.154-.5 0l-.924-1.5-.961 1.5c-.154.23-.539.115-.539-.154v-3.846h-1.961a.303.303 0 0 0-.308.308v9c0 .154.116.307.308.307h9.346a.303.303 0 0 0 .308-.307v-9.039c-.039-.154-.154-.269-.308-.269zM10.192 3.27l.654-.885c.039-.077.154-.116.23-.116.078 0 .193.039.232.116l.961 1.269.962-1.27c.038-.076.154-.115.23-.115.077 0 .193.039.231.116l.693.884v-3h-4.193v3z" />
                    <path d="M16.962.27h-2v3.845c0 .27-.347.385-.5.193l-.962-1.27-.962 1.27a.288.288 0 0 1-.461 0l-.962-1.27-.961 1.27c-.154.23-.539.115-.539-.193V.27h-2a.303.303 0 0 0-.307.308v9c0 .154.115.308.307.308h9.347a.303.303 0 0 0 .307-.308v-9a.303.303 0 0 0-.307-.308zM24.346 21.154H.308A.303.303 0 0 1 0 20.846c0-.154.115-.308.308-.308h24.038c.154 0 .308.116.308.308-.039.154-.154.308-.308.308z" />
                    <g>
                      <path d="M23.308 21.73v2.308a.303.303 0 0 1-.308.308h-2.885a.303.303 0 0 1-.307-.308v-2.307h3.5zM4.77 21.73v2.347a.303.303 0 0 1-.308.308H1.577a.303.303 0 0 1-.308-.308V21.73h3.5zM14.038 21.73v2.347a.303.303 0 0 1-.307.308h-2.885a.303.303 0 0 1-.308-.308V21.73h3.5z" />
                    </g>
                  </g>
                </svg>
              </div>
              <a href="#/inventoryManagement">Inventory Management</a>
            </li>
          </ul>

          <footer>
            <div className="nav_footer">
              <label>Supplymint version 1.0</label>
            </div>
          </footer>
        </nav>
      </div>
    );
  }
}

export default SideBar;
