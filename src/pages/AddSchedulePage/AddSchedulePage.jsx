import React, { Component } from "react";
import "../../components/MeetingForm/MeetingForm.css";
import PropTypes from "prop-types";
import "./AddSchedulePage.css";

class AddSchedulePage extends Component {
  state = {
    formData: {
      date: "",
      people: "",
      time: "",
      location: "",
      notes: ""
    }
  };

  handleChange = e => {
    // console.log(e.target.checkValidity());
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    };
    this.setState({
      formData

      //   [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddSchedule(this.state.formData);
  };

  render() {
    return (
      <div className="MeetingForm">
        <form onSubmit={this.handleSubmit}>
          <label>Date: </label>
          <input
            className="input-Add"
            type="text"
            value={this.state.formData.date}
            onChange={this.handleChange}
            name="date"
          />

          <label>People: </label>
          <input
            className="input-Add"
            type="text"
            value={this.state.formData.people}
            onChange={this.handleChange}
            name="people"
          />

          <label>Time: </label>
          <input
            className="input-Add"
            type="text"
            value={this.state.formData.time}
            onChange={this.handleChange}
            name="time"
          />

          <label>Location: </label>
          <input
            className="input-Add"
            type="text"
            value={this.state.formData.location}
            onChange={this.handleChange}
            name="location"
          />

          <label>Notes: </label>
          <input
            className="input-Add"
            type="text"
            value={this.state.formData.notes}
            onChange={this.handleChange}
            name="notes"
          />

          <button className="button-Add" type="submit">
            {" "}
            ADD{" "}
          </button>
        </form>
      </div>
    );
  }
}

AddSchedulePage.propTypes = {
  handleAddSchedule: PropTypes.func.isRequired
};

export default AddSchedulePage;
