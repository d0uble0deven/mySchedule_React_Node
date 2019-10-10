import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";
import MeetingForm from "../MeetingForm/MeetingForm";
import Month from "../Schedule/Month/Month";
import "./SchedulesPage.css";
import MeetingCard from "../MeetingCard/MeetingCard";

// Main Page

const SchedulesPage = props => {
  return (
    <div>
      <NavBar />
      <hr />
      <MeetingCard
        schedule={props.schedule}
        handleDeleteSchedule={props.handleDeleteSchedule}
        handleUpdateSchedule={props.handleUpdateSchedule}
        user={props.user}
      />

      {/* <Month
        schedule={props.schedule}
        handleDeleteSchedule={props.handleDeleteSchedule}
        handleUpdateSchedule={props.handleUpdateSchedule}
        user={props.user}
      /> */}
      <hr />
    </div>
  );
};

export default SchedulesPage;
