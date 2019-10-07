import React, { Component } from 'react';

class MeetingForm extends Component {

    render() {
        return (
            <div>
                <input type="text" value={this.state.date} onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
                <input type="text" value={this.state.people} onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
                <input type="text" value={this.state.time} onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
                <input type="text" value={this.state.location} onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
                <input type="text" value={this.state.location} onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
                <button className="" onClick={this.createNewToDoItem}>+</button>
            </div>
        )
    }
}

export default MeetingForm