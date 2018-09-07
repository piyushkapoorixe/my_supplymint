import React from "react";
import AllStoresOnMap from "./dashboard/allStoresOnMap";
import ProductConsistency from "./dashboard/productConsistency";
import openRack from '../assets/open-rack.svg'
import TopStock from './dashboard/topStocks'
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="col-md-12 col-sm-12 pad-0">
          <div className="menu_path">
            <ul className="list-inline width_100">
              <li>
                <label className="home_link">Dashboard</label>
              </li>
              <li className="float_right">
                <img src={openRack} className="right_sidemenu" />
              </li>
            </ul>
          </div>
        </div> */}
        <div className="col-md-12 col-sm-12 col-xs-6 pad-0 m-top-35">
          <AllStoresOnMap />
          <ProductConsistency />
        </div>
        <TopStock />
      </div>
    );
  }
}

export default Dashboard;
