import React from "react";
import NavBar from "../../components/NavBar/NavBar";
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
