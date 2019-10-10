import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";
import MeetingForm from "../MeetingForm/MeetingForm";
import Month from "../Schedule/Month/Month";
import "./SchedulesPage.css";

// Main Page

const SchedulesPage = props => {
  return (
    <div>
      {/* <title>SchedulesPage</title> */}
      <NavBar />
      <hr />
      <MeetingForm handleAddSchedule={props.handleAddSchedule} />
      <hr />
      <Month
        schedule={props.schedule}
        handleDeleteSchedule={props.handleDeleteSchedule}
        handleUpdateSchedule={props.handleUpdateSchedule}
        user={props.user}
      />
      <hr />

      <meta
        name="description"
        content="A React.js Boilerplate application homepage"
      />
    </div>
  );
};

export default SchedulesPage;
