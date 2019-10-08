import React, { Component } from 'react';
import './MeetingForm.css';

class MeetingForm extends Component {


    handleChange = e => {
        const newDate = { ...this.state.date };
        newDate[e.target.date] = e.target.value;
        // console.log(e.target.checkValidity());
        this.setState({
            newDate,
            formInvalid: !this.formRef.current.checkValidity()
        });
    };



    render(props) {
        return (
            <div className="MeetingForm">
                <span>Date<input
                    type="text"
                    value={this.props.date}
                    onChange={this.handleChange}

                // onKeyPress={this.handleKeyPress}
                /></span>

                <span>People<input type="text"
                    value={this.props.people}
                    onChange={this.handleChange}
                // onKeyPress={this.handleKeyPress}
                /></span>
                <span>Time<input
                    type="text"
                    value={this.props.time}
                    onChange={this.handleChange}
                // onKeyPress={this.handleKeyPress}
                /></span>
                <span>Location<input
                    type="text"
                    value={this.props.location}
                    onChange={this.handleChange}
                // onKeyPress={this.handleKeyPress}
                /></span>
                <span> Notes<input
                    type="text"
                    value={this.props.notes}
                    onChange={this.handleChange}
                // onKeyPress={this.handleKeyPress} 
                />
                </span>
                <span><button
                    className=""
                    onClick={this.addSchedule}
                >
                    +
                    </button> </span>
            </div >
        )
    }
}

export default MeetingForm