import React, { Component } from 'react';
import Meeting from '../Meeting/Meeting'
import './Month.css'



class Month extends Component {
    render(props) {
        return (
            <div className="Month">
                Month
                <hr />
                {props.schedule.map((meeting, idx) =>
                    <Meeting
                        meeting={this.props.schedule}
                        deleteItem={this.props.deleteItem}
                        updateSchedule={this.props.updateSchedule}
                        user={this.props.user}
                        key={idx}
                    />
                )}
                <hr />

            </div >
        )
    }

}

{/* // how to map all state, taked from Mastermind
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
//   ); */}


export default Month


// w1: d1-d7
// w2: d1-d7
// w3: d1-d7
// w4: d1-d7