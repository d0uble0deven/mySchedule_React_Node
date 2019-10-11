import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditSchedulePage.css";

class EditSchedulePage extends Component {
  state = {
    // schedule,
    // formData: this.props.location.state.post
    formData: {
      date: this.props.location.state.post,
      people: this.props.location.state.post,
      time: this.props.location.state.post,
      location: this.props.location.state.post,
      notes: this.props.location.state.post
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateSchedule(this.state.formData);
  };

  handleChange = e => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    };
    this.setState({
      formData
    });
  };

  render() {
    return (
      <div className="EditSchedulePage">
        <h4>Edit</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Date</label>
          <input
            type="text"
            value={this.state.formData.date}
            handleChange={this.handleChange}
            name="date"
          />

          <label>People</label>
          <input
            type="text"
            value={this.state.formData.people}
            handleChange={this.handleChange}
            name="people"
          />

          <label>Time</label>
          <input
            type="text"
            value={this.state.formData.time}
            handleChange={this.handleChange}
            name="time"
          />

          <label>Location</label>
          <input
            type="text"
            value={this.state.formData.location}
            handleChange={this.handleChange}
            name="location"
          />

          <label>Notes</label>
          <input
            type="text"
            value={this.state.formData.notes}
            handleChange={this.handleChange}
            name="notes"
          />

          <button type="submit"> EDIT </button>
          <Link to="/schedule">CANCEL</Link>
        </form>
      </div>
    );
  }
}

export default EditSchedulePage;

// EditSchedulePage.propTypes = {
//   handleUpdateSchedule: PropTypes.func.isRequired
// };
