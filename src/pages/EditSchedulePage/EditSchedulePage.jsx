import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditSchedulePage.css";
import PropTypes from "prop-types";

class EditSchedulePage extends Component {
  state = {
    // schedule,
    formData: this.props.location.state.schedule
    // formData: {
    //   date: this.props.location.state.schedule,
    //   people: this.props.location.state.schedule,
    //   time: this.props.location.state.schedule,
    //   location: this.props.location.state.schedule,
    //   notes: this.props.location.state.schedule
    // }
  };

  handleSubmit = e => {
    try {
      e.preventDefault();
      this.props.handleUpdateSchedule(this.state.formData);
    } catch (error) {
      throw new Error(error);
    }
  };

  handleChange = e => {
    try {
      const formData = {
        ...this.state.formData,
        [e.target.formData.name]: e.target.value
      };
      this.setState({
        formData
      });
    } catch (error) {
      throw new Error(error);
    }
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
            onChange={this.handleChange}
            name="date"
          />

          <label>People</label>
          <input
            type="text"
            value={this.state.formData.people}
            onChange={this.handleChange}
            name="people"
          />

          <label>Time</label>
          <input
            type="text"
            value={this.state.formData.time}
            onChange={this.handleChange}
            name="time"
          />

          <label>Location</label>
          <input
            type="text"
            value={this.state.formData.location}
            onChange={this.handleChange}
            name="location"
          />

          <label>Notes</label>
          <input
            type="text"
            value={this.state.formData.notes}
            onChange={this.handleChange}
            name="notes"
          />

          <button type="submit"> EDIT </button>
          <Link to="/schedule">CANCEL</Link>
        </form>
      </div>
    );
  }
}

EditSchedulePage.propTypes = {
  handleUpdateSchedule: PropTypes.func.isRequired
};

export default EditSchedulePage;
