import React, { Component } from "react";
import Meeting from "../Meeting/Meeting";
import "./Month.css";

class Month extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="Month">
        SCHEDULE
        {this.props.schedule.length > 0 ? (
          this.props.schedule.map(schedule => (
            <Meeting
              key={schedule._id}
              schedule={this.props.schedule}
              handleUpdateSchedule={this.props.handleUpdateSchedule}
              handleDeleteSchedule={this.props.handleDeleteSchedule}
              user={this.props.user}
            />
          ))
        ) : (
          <div>
            <p>Add A Meeting In The Above Nav Bar</p>
          </div>
        )}
      </div>
    );
  }
}

export default Month;

// functions are written below because they can be called at the top (aka "hoisting")
async function getAll() {
  const url = "http://localhost:3000";
  const initialFetch = await fetch(url);
  const fetchJSON = await initialFetch.json();
  return await fetchJSON;
}

async function handleVerbs(url, options) {
  const initialFetch = await fetch(url, options);
  const fetchJSON = await initialFetch.json();
  return await fetchJSON;
}
