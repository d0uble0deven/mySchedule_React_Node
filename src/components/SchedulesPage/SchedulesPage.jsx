import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import MeetingForm from '../MeetingForm/MeetingForm';
import Month from '../Schedule/Month/Month';
import Meeting from '../Schedule/Meeting/Meeting';

// Main Page


// Same as HighScoresPage


const SchedulesPage = (props) => {
    return (
        <div>



            <title>SchedulesPage</title>
            <NavBar />
            <MeetingForm />
            <Month />
            <Meeting />

            <meta
                name="description"
                content="A React.js Boilerplate application homepage"
            />

        </div>
    )
}

// class SchedulesPage extends Component {


//     async componentDidMount() {
//         // const scores = await scoresService.index();
//         // this.props.handleUpdateScores(scores);
//     }


//     render() {



//     }

//     return(

//     )
// };

export default SchedulesPage;