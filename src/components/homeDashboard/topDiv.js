import React from "react";
import openRack from "../../assets/open-rack.svg";
import card from "../../assets/card.svg";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";

class TopDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  render() {
    return (
       <div className="container-fluid">
        
        <div className="col-md-12 col-sm-12 pad-0">
            <div className="menu_path">
                <ul className="list-inline width_100">
                    <li>
                        <label className="home_link">Home</label>
                    </li>
                    <li className="float_right">
                        <img src={openRack}  className="right_sidemenu"/>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-6 pad-0 m-top-10">
            <div className="cards_dashboard">
                <div className="col-md-12 col-sm-12 pad-0">
                    <ul className="list_style">
                        <li>
                            <label className="contribution_mart">
                                VENDORS
                            </label>
                        </li>
                        <li>
                            <p className="master_para">lorem ipsum doler immet</p>
                        </li>
                    </ul>
                </div>

                <div className="col-md-12 col-sm-12 pad-0 m-top-20">
                    <div className="col-md-3 col-sm-3 pad-0">
                        <div className="cards">
                            <div className="col-md-12 col-sm-12 pad-0">
                                <div className="col-md-4 pad-0">
                                
                                            <div className="cards_lft"> 
                                                <img src={card} className="cards_img"/>
                                            </div> 
                             
                                </div>
                                <div className="col-md-8 col-sm-8 pad-0">
                                    <ul className="list-inline card_list m-0">

                                    <li>
                                        <div className="container_list_card">
                                            <p className="cards_content">
                                                TOP SALES
                                            </p>
                                            <span>
                                                ( LAST ONE YEAR )
                                            </span>
                                            <p className="amout_content">
                                            567948
                                            </p>
                                        </div>
                                    </li>
                         
                                </ul>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 ">
                        <div className="cards">
                            <div className="col-md-12 col-sm-12 pad-0">
                                <div className="col-md-4 pad-0">
                                
                                            <div className="cards_lft"> 
                                                <img src={card3} className="cards_img"/>                                            </div> 
                             
                                </div>
                                <div className="col-md-8 col-sm-8 pad-0">
                                    <ul className="list-inline card_list m-0">

                                    <li>
                                        <div className="container_list_card">
                                            <p className="cards_content">
                                                TOP UNITS SALE
                                            </p>
                                            <span>
                                                ( LAST ONE YEAR )
                                            </span>
                                            <p className="amout_content">
                                            337300
                                            </p>
                                        </div>
                                    </li>
                         
                                </ul>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 ">
                        <div className="cards">
                            <div className="col-md-12 col-sm-12 pad-0">
                                <div className="col-md-4 pad-0">
                                
                                            <div className="cards_lft"> 
                                                <img src={card1} className="cards_img"/>
                                            </div> 
                             
                                </div>
                                <div className="col-md-8 col-sm-8 pad-0">
                                    <ul className="list-inline card_list m-0">

                                    <li>
                                        <div className="container_list_card">
                                            <p className="cards_content">
                                                AVG SALES PER UNIT
                                            </p>
                                            <span>
                                                ( LAST ONE YEAR )
                                            </span>
                                            <p className="amout_content">
                                            567948
                                            </p>
                                        </div>
                                    </li>
                         
                                </ul>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3">
                        <div className="cards">
                            <div className="col-md-12 col-sm-12 pad-0">
                                <div className="col-md-4 pad-0">
                                
                                            <div className="cards_lft"> 
                                                <img src={card2} className="cards_img"/>
                                            </div> 
                             
                                </div>
                                <div className="col-md-8 col-sm-8 pad-0">
                                    <ul className="list-inline card_list m-0">

                                    <li>
                                        <div className="container_list_card">
                                            <p className="cards_content">
                                               AVG SALES PER UNIT
                                            </p>
                                            <span>
                                                ( LAST ONE YEAR )
                                            </span>
                                            <p className="amout_content">
                                            567948
                                            </p>
                                        </div>
                                    </li>
                         
                                </ul>
                                </div>
                        
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div></div>

    );
  }
}

export default TopDiv;
