import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";
import MeetingForm from "../MeetingForm/MeetingForm";
import Month from "../Schedule/Month/Month";
import "./SchedulesPage.css";
import MeetingCard from "../MeetingCard/MeetingCard";

const SchedulesPage = props => {
  const list = props.schedule.map(sched => {
    return (
      <MeetingCard
        key={sched._id}
        sched={sched}
        handleDeleteSchedule={props.handleDeleteSchedule}
      />
    );
  });

  return (
    <>
      <NavBar user={props.user} />
      <div>{list}</div>
    </>
  );
};

export default SchedulesPage;
