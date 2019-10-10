import React from "react";
import { Link } from "react-router-dom";

function MeetingCard({ schedule, handleDeleteSchedule }) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading"></div>
      <div className="panel-body">
        <dl>
          <dt>Date</dt>
          <dd>{schedule.date}</dd>
          <dt>People</dt>
          <dd>{schedule.people}</dd>
          <dt>Time</dt>
          <dd>{schedule.time}</dd>
          <dt>Location</dt>
          <dd>{schedule.location}</dd>
          <dt>Notes</dt>
          <dd>{schedule.notes}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        {/* 
          The following is another approach to provide 
          data to a different route that's different
          from the Star Wars lab's solution code.
          The state object can be accessed in the new
          route via the location.state object
        */}
        <Link
          className="btn btn-xs btn-warning"
          to={{
            pathname: "/edit",
            state: { schedule }
          }}
        >
          EDIT
        </Link>
        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() => handleDeleteSchedule(schedule._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default MeetingCard;
