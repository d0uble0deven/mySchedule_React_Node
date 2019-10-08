import React, { Component } from 'react';
import './MeetingForm.css';

class MeetingForm extends Component {

    state = {
        date: '',
        people: '',
        time: '',
        location: '',
        notes: '',
    }


    handleChange = e => {
        // console.log(e.target.checkValidity());
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addSchedule(this.state)
    }



    render() {
        return (
            <div className="MeetingForm">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>Date<input
                            type="text"
                            value={this.state.date}
                            onChange={this.handleChange}
                            name='date'

                        // onKeyPress={this.handleKeyPress}
                        /></span>
                    </label>
                    <label>
                        <span>People<input type="text"
                            value={this.state.people}
                            onChange={this.handleChange}
                            name='people'
                        // onKeyPress={this.handleKeyPress}
                        /></span>
                    </label>
                    <label>
                        <span>Time<input
                            type="text"
                            value={this.state.time}
                            onChange={this.handleChange}
                            name="time"
                        // onKeyPress={this.handleKeyPress}
                        /></span>
                    </label>

                    <label>
                        <span>Location<input
                            type="text"
                            value={this.state.location}
                            onChange={this.handleChange}
                            name='location'
                        // onKeyPress={this.handleKeyPress}
                        /></span>
                    </label>

                    <label>
                        <span> Notes<input
                            type="text"
                            value={this.state.notes}
                            onChange={this.handleChange}
                            name='notes'
                        // onKeyPress={this.handleKeyPress} 
                        />
                        </span>
                    </label>


                    <span><button> + </button>
                    </span>
                </form>

            </div >
        )
    }
}

export default MeetingForm