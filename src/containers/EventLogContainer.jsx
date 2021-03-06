import React, {Component} from "react";
import {connect} from "react-redux";

import EventLogWidget from "../components/log/EventLogWidget";

class EventLogContainer extends Component {

    render =()=>
        <div id="accordion" className="custom-accordion">
            {this.props.events.reverse().map((event) => {
                                                return <EventLogWidget
                                                                key={event.id}
                                                                id={event.id}
                                                                name={event.event}
                                                                address={event.address}
                                                                transactionHash={event.transactionHash}
                                                                transactionIndex={event.transactionIndex}
                                                                blockHash={event.blockHash}
                                                                blockNumber={event.blockNumber}
                                                                logIndex={event.logIndex}
                                                                raw={event.raw}
                                                                returnValues={event.returnValues}
                                                                signature={event.signature}
                                                                    type={event.type} />
                                                })}
        </div>


}

const mapStateToProps = (state) => {
    return {
        events: state.logsReducer.logs
    }
}

export default connect(mapStateToProps)(EventLogContainer);