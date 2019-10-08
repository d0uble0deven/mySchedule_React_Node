import React, { Component } from 'react';
import './Meeting.css';


class Meeting extends Component {
    render() {
        return (
            <div className="Meeting">
                <hr />
                Meeting
                <hr />
                <button className="deleteItem-btn"
                    onClick={this.props.deleteItem}>-
                </button>
                <hr />
            </div >

        )
    }

}


export default Meeting