import React from 'react';
import SchedulesPage from '../SchedulesPage/SchedulesPage';


function HomePage() {
    return (



        <h1> mySchedule </h1>
        <div>
            <h3> {props.date} </h3>
            <p> Person: {props.person} </p>
            <p> Time: {props.time} </p>
            <p> Location: {props.location} </p>
            <p> Notes: {props.notes} </p>
        </div>

   
    )


}


export default HomePage