import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditSchedulePage extends Component {
  state = {
    formData: this.props.schedule
    // formData: {
    //   date: "",
    //   people: "",
    //   time: "",
    //   location: "",
    //   notes: ""
    // }
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

          <button type="submit"> += </button>
          <Link to="/schedule">CANCEL</Link>
        </form>
      </div>
    );
  }
}

export default EditSchedulePage;

EditSchedulePage.propTypes = {
  handleUpdateSchedule: PropTypes.func.isRequired
};
