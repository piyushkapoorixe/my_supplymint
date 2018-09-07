import React from "react";
import AddVendor from "./Managevendor/addVendor";
import EmptyBox from "./Managevendor/emptyBox";
import ViewVendor from "./Managevendor/viewVendor";
import VendorData from "../../json/vendorData.json";

class Contracts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorState: [],
      addVendor: false
    };
  }

  onAddVendor() {
    this.setState({
      addVendor: true
    });
  }

  onSaveVendor() {
    this.setState({
      addVendor: false,
      vendorState: VendorData
    });
  }

  render() {
    return (
      <div className="container-fluid">
         {/* {!this.state.addVendor ? (
          this.state.vendorState.length == 0 ? ( 
             <EmptyBox
              clickRightSideBar={() => this.props.rightSideBar()}
              addVendor={() => this.onAddVendor()}
            />
          ) : (  */}
            <ViewVendor
              VendorData={VendorData}
              clickRightSideBar={() => this.props.rightSideBar()}
            />
           {/* )
        ) : null} 
         {this.state.addVendor ? (
          <AddVendor
            saveVendor={() => this.onSaveVendor()}
            clickRightSideBar={() => this.props.rightSideBar()}
          />
        ) : null}  */}
      </div>
    );
  }
}

export default Contracts;
