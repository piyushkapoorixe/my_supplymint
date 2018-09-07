import React from "react";
import openRack from '../../assets/open-rack.svg'

class TopStock extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-12 col-sm-12 col-xs-6 pad-0 m-top-10">
            <div className="col-md-4 col-xs-12 pad-lft-0">
                <div className="cards_dashboard">
                    <div className="col-md-12 col-sm-12 pad-0">
                        <ul className="list_style">
                            <li>
                                <label className="contribution_mart">
                                    TOP 5 STOCKS
                                </label>
                            </li>
                            <li>
                                <p className="master_para">lorem ipsum doler immet</p>
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

export default TopStock;
