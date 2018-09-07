import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Error from '../containers/error';
import Home from '../containers/home';
import Logistics from '../containers/logistics';
import Administration from '../containers/administration';
import InventoryPlanning from '../containers/inventoryPlanning';
import InventoryManagement from '../containers/inventoryManagement';
import WarehouseManagement from '../containers/warehouseManagement';
import Replenishment from '../containers/replenishment';
import DemandPlanning from '../containers/demandPlanning';
import Vendor from '../containers/vendor';
import Reporting from '../containers/reporting';
import SignIn from '../containers/signIn';
import ForgotPass from '../containers/forgotPassword';
import ForgotUser from '../containers/forgotUser';
import ResetPassword from '../containers/resetPassword';
import Item from '../containers/item';
import createStore from '../store/createStore';

class App extends React.Component {
  constructor(){
    super()
    this.state={}
  }
  shouldComponentUpdate () {
    return false
  }  
  render () {
    const store = createStore();
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/replenishment" component={Replenishment} />
            <Route exact path="/inventoryManagement" component={InventoryManagement} />
            <Route exact path="/inventoryPlanning" component={InventoryPlanning} />
            <Route exact path="/warehouseManagement" component={WarehouseManagement} />
            <Route exact path="/administration/organisation" component={Administration} />
            <Route exact path="/administration/roles" component={Administration} />
            <Route exact path="/administration/" component={Administration} />
            <Route exact path="/administration/users" component={Administration} />
            <Route exact path="/administration/site" component={Administration} />
            <Route exact path="/administration/siteMapping" component={Administration} />
            <Route exact path="/administration/dataSync" component={Administration} />
            <Route exact path="/administration/custom" component={Administration} />
            <Route exact path="/reporting" component={Reporting} />
            <Route exact path="/logistics" component={Logistics} />
            <Route exact path="/vendor/manageVendors" component={Vendor} />
            <Route exact path="/vendor/contracts" component={Vendor} />
            <Route exact path="/vendor/priorityList" component={Vendor} />
            <Route exact path="/demandPlanning" component={DemandPlanning} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/forgotPassword" component={ForgotPass} />
            <Route exact path="/forgotUser" component={ForgotUser} />
            <Route exact path="/resetPassword" component={ResetPassword} />
            <Route exact path="/item/itemMapping" component={Item} />
            <Route exact path="/item/itemConfigurationTable" component={Item} />
            <Route exact path="/item/itemConfiguration" component={Item} />
            <Route exact path="/item/itemRoute" component={Item} />
            <Route component={Error} />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
