import React, { Component } from 'react';
import Meeting from '../Meeting/Meeting'
import './Month.css'



class Month extends Component {
    render(props) {
        return (
            <div className="Month">
                Month
                <hr />
                <Meeting
                    deleteItem={this.props.deleteItem}
                    updateSchedule={this.props.updateSchedule}
                />
                <hr />

            </div >
        )
    }

}


export default Month


// w1: d1-d7
// w2: d1-d7
// w3: d1-d7
// w4: d1-d7