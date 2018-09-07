import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'

class Sample extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    start(){
        alert('Work is in Progeress!')
    }
    render(){
        return(
            <div className="col-md-12">
                <div className="col-sm-offset-4 col-md-4  sample">
                    <h1>Supply Chain Management</h1>
                    <button onClick={() => this.start()}>Start</button>
                    <p>By <a href="http://www.turningcloud.com/">Turning Cloud</a> Soltions Pvt Ltd.</p>
                </div>
            </div>
        )
    }
}


export function mapStateToProps(state) {
    return {
        sample: state.sample
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample);