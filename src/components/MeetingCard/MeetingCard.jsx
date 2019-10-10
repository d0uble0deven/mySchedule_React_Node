import React from "react";
import { Link } from "react-router-dom";
import "./MeetingCard.css";

function MeetingCard({ sched, handleDeleteSchedule }) {
  // console.log("these are the props", props);
  return (
    <div className="panel panel-default">
      <div className="panel-heading"></div>
      <div className="panel-body">
        <dl className="dl">
          <dt>Date</dt>
          <dd>{sched.date}</dd>
          <dt>People</dt>
          <dd>{sched.people}</dd>
          <dt>Time</dt>
          <dd>{sched.time}</dd>
          <dt>Location</dt>
          <dd>{sched.location}</dd>
          <dt>Notes</dt>
          <dd>{sched.notes}</dd>
        </dl>
      </div>
      <div className="panel-footer">
        <Link
          className="btn btn-xs btn-warning"
          to={{
            pathname: "/edit",
            state: { sched }
          }}
        >
          EDIT
        </Link>
        <button
          className="btn btn-xs btn-danger margin-left-10"
          onClick={() => handleDeleteSchedule(sched._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default MeetingCard;
