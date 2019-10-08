import React, { Component } from 'react';
import './MeetingForm.css';

class MeetingForm extends Component {

    render(props) {
        return (
            <div className="MeetingForm">
                <span>Date<input
                    type="text"
                    value={this.props.date}
                // onChange={this.handleInput}
                // onKeyPress={this.handleKeyPress}
                /></span>

                <span>People<input type="text"
                    value={this.props.people}
                // onChange={this.handleInput} 
                // onKeyPress={this.handleKeyPress} 
                /></span>
                <span>Time<input
                    type="text"
                    value={this.props.time}
                // onChange={this.handleInput}
                // onKeyPress={this.handleKeyPress}
                /></span>
                <span>Location<input
                    type="text"
                    value={this.props.location}
                // onChange={this.handleInput}
                // onKeyPress={this.handleKeyPress}
                /></span>
                <span> Notes<input
                    type="text"
                    value={this.props.notes}
                // onChange={this.handleInput}
                // onKeyPress={this.handleKeyPress} 
                />
                </span>
                <span><button
                    className=""
                    onClick={this.createNewToDoItem}
                >
                    +
                    </button> </span>
            </div >
        )
    }
}

export default MeetingForm