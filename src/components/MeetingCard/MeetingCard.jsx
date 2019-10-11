import React from "react";
import { Link } from "react-router-dom";
import "./MeetingCard.css";

function MeetingCard({ sched, handleDeleteSchedule }) {
  // console.log("these are the props", props);
  return (
    <div className="card">
      <div className="panel-body">
        <div className="dl">
          <ul className="ul">Date:</ul>
          <li className="li">{sched.date}</li>
          <ul className="ul">People:</ul>
          <li className="li">{sched.people}</li>
          <ul className="ul">Time:</ul>
          <li className="li">{sched.time}</li>
          <ul className="ul">Location:</ul>
          <li className="li">{sched.location}</li>
          <ul className="ul">Notes:</ul>
          <li className="li">{sched.notes}</li>
        </div>
      </div>
      <div className="bottom">
        <Link
          className="Link"
          to={{
            pathname: "/edit",
            state: { sched }
          }}
        >
          EDIT
        </Link>
        <button
          className="button-MC"
          onClick={() => handleDeleteSchedule(sched._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default MeetingCard;
