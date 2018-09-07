import React from "react";



class SalesTrends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  render() {
    return (
    <div>
        <div className="col-md-6 col-sm-6 pad-rgt-0">
        <div className="cards_dashboard">
            <div className="col-md-3 col-sm-12 pad-0">
                <ul className="list_style">
                    <li>
                        <label className="contribution_mart">
                            SALES TREND GRAPH
                        </label>
                    </li>
                    <li>
                        <p className="master_para">lorem ipsum doler immet</p>
                    </li>
                </ul>
            </div>
            <div className="col-md-8 col-sm-8 pad-rgt-0">
                <div className="months_list">
                    <ul className="list-inline">
                        <li>
                            <button>
                                CURRENT MONTH
                            </button>
                        </li>
                        <li>
                            <button>
                                LAST MONTH
                            </button>
                        </li>
                        <li>
                            <button>
                                LAST 3 MONTH
                            </button>
                        </li>
                        <li>
                            <button>
                                LAST 6 MONTH
                            </button>
                        </li>
                        <li>
                            <button>
                                CURRENT MONTH
                            </button>
                        </li>
                        <li>
                            <button>
                                CURRENT MONTH
                            </button>
                        </li>  
                    </ul>

                </div>
            </div>
            <div className="col-md-1 col-sm-2 pad-0">
                <ul className="list-inline m-0 text_align_right">
                    <li>
                        <div className="dropdown">
                            <svg className="dropdown_img dropdown-toggle" data-toggle="dropdown" xmlns="http://www.w3.org/2000/svg" width="7" height="27" viewBox="0 0 7 27">
                                <g fill="#6D6DC9" fill-rule="nonzero" stroke="#6D6DC9" transform="translate(1 1)">
                                    <circle cx="2.5" cy="2.5" r="2.5"/>
                                    <circle cx="2.5" cy="12.643" r="2.5"/>
                                    <circle cx="2.5" cy="22.786" r="2.5"/>
                                </g>
                            </svg>
                            <ul className="dropdown-menu dropdown_table list-inline">
                                   <li>
                                      <span>
                                          EXPORT DATA
                                      </span>
                                   </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 21">
                                            <g fill="#6D6DC9" fill-rule="nonzero">
                                                <path d="M2.889 20.747H17.11A2.889 2.889 0 0 0 20 17.857V10.97a1.111 1.111 0 0 0-2.222 0v6.889a.667.667 0 0 1-.667.666H2.89a.667.667 0 0 1-.667-.666v-6.89a1.111 1.111 0 0 0-2.222 0v6.89a2.889 2.889 0 0 0 2.889 2.889z"/>
                                                <path d="M9.778.142c-.614 0-1.111.498-1.111 1.111v9.145L5.849 7.58a1.111 1.111 0 0 0-1.571 1.571l4.713 4.713c.05.049.103.093.16.132.029.017.058.03.087.046a.644.644 0 0 0 .222.091c.031 0 .062.023.093.03.147.03.298.03.445 0 .033 0 .062-.019.093-.03a.644.644 0 0 0 .222-.09c.03-.016.06-.03.087-.047.057-.04.11-.083.16-.132l4.718-4.713a1.111 1.111 0 0 0-1.571-1.571l-2.818 2.818V1.253c0-.613-.498-1.11-1.111-1.11z"/>
                                            </g>
                                        </svg> 
                                        <span>
                                            XLS
                                        </span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 21">
                                            <g fill="#4A4A4A" fill-rule="nonzero">
                                                <path d="M2.889 20.747H17.11A2.889 2.889 0 0 0 20 17.857V10.97a1.111 1.111 0 0 0-2.222 0v6.889a.667.667 0 0 1-.667.666H2.89a.667.667 0 0 1-.667-.666v-6.89a1.111 1.111 0 0 0-2.222 0v6.89a2.889 2.889 0 0 0 2.889 2.889z"/>
                                                <path d="M9.778.142c-.614 0-1.111.498-1.111 1.111v9.145L5.849 7.58a1.111 1.111 0 0 0-1.571 1.571l4.713 4.713c.05.049.103.093.16.132.029.017.058.03.087.046a.644.644 0 0 0 .222.091c.031 0 .062.023.093.03.147.03.298.03.445 0 .033 0 .062-.019.093-.03a.644.644 0 0 0 .222-.09c.03-.016.06-.03.087-.047.057-.04.11-.083.16-.132l4.718-4.713a1.111 1.111 0 0 0-1.571-1.571l-2.818 2.818V1.253c0-.613-.498-1.11-1.111-1.11z"/>
                                            </g>
                                        </svg>
                                        <span>
                                            CSV
                                        </span>
                                        </li>   
                                      <li>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 21">
                                            <g fill="#4A4A4A" fill-rule="nonzero">
                                                <path d="M2.889 20.747H17.11A2.889 2.889 0 0 0 20 17.857V10.97a1.111 1.111 0 0 0-2.222 0v6.889a.667.667 0 0 1-.667.666H2.89a.667.667 0 0 1-.667-.666v-6.89a1.111 1.111 0 0 0-2.222 0v6.89a2.889 2.889 0 0 0 2.889 2.889z"/>
                                                <path d="M9.778.142c-.614 0-1.111.498-1.111 1.111v9.145L5.849 7.58a1.111 1.111 0 0 0-1.571 1.571l4.713 4.713c.05.049.103.093.16.132.029.017.058.03.087.046a.644.644 0 0 0 .222.091c.031 0 .062.023.093.03.147.03.298.03.445 0 .033 0 .062-.019.093-.03a.644.644 0 0 0 .222-.09c.03-.016.06-.03.087-.047.057-.04.11-.083.16-.132l4.718-4.713a1.111 1.111 0 0 0-1.571-1.571l-2.818 2.818V1.253c0-.613-.498-1.11-1.111-1.11z"/>
                                            </g>
                                        </svg>
                                        <span>
                                            PDF
                                        </span>
                                    </li>   

                            </ul>
                         </div>
                    </li>
                </ul>

            </div>


        </div>
    </div>
    </div>
    );
  }
}

export default SalesTrends;
