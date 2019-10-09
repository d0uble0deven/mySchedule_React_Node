import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import MeetingForm from '../MeetingForm/MeetingForm';
import Month from '../Schedule/Month/Month';
// import Meeting from '../Schedule/Meeting/Meeting';
import './SchedulesPage.css';

// Main Page


// Same as HighScoresPage


const SchedulesPage = (props) => {
    return (
        <div>



            {/* <title>SchedulesPage</title> */}
            <NavBar />
            <hr />
            <MeetingForm
                addSchedule={props.addSchedule}
            />
            <hr />
            <Month
                schedule={props.schedule}
                deleteItem={props.deleteItem}
                updateSchedule={props.updateSchedule}
                user={props.user}
            />
            <hr />

            <meta
                name="description"
                content="A React.js Boilerplate application homepage"
            />

        </div>
    )
}

// how to map all state, taked from Mastermind
// const GameBoard = (props) => (
//     <div className={styles.GameBoard}>
//       {props.guesses.map((guess, idx) =>
//         <GuessRow
//           guess={guess}
//           colors={props.colors}
//           rowIdx={idx}
//           currentGuess={idx === (props.guesses.length - 1)}
//           handlePegClick={props.handlePegClick}
//           handleScoreClick={props.handleScoreClick}
//           key={idx}
//         />
//       )}
//     </div>
//   );



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