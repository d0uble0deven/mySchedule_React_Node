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
      {/* <h3>Schedule</h3> */}
      <div>{list}</div>
    </>
  );
};

// Main Page

// const SchedulesPage = props => {
//   return (
//     <div>
//       <NavBar />
//       <hr />

//       {/* {props.schedule.map(schedule => (
//         <MeetingCard
//           key={schedule._id}
//           schedule={schedule}
//           handleDeleteSchedule={props.handleDeleteSchedule}
//         />
//       ))} */}

//       <MeetingCard
//         schedule={props.schedule}
//         handleDeleteSchedule={props.handleDeleteSchedule}
//         handleUpdateSchedule={props.handleUpdateSchedule}
//         user={props.user}
//       />

//       {/* <Month
//         schedule={props.schedule}
//         handleDeleteSchedule={props.handleDeleteSchedule}
//         handleUpdateSchedule={props.handleUpdateSchedule}
//         user={props.user}
//       /> */}
//       <hr />
//     </div>
//   );
// };

export default SchedulesPage;
