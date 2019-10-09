import React, { Component } from 'react';
import './Meeting.css';


class Meeting extends Component {
    render() {
        return (
            <div className="Meeting">
                <hr />
                Meeting
                <hr />
                <button className="deleteItem-btn"
                    onClick={this.props.deleteItem}>X
                </button>
                <button className="updateItem-btn"
                    onClick={this.props.updateSchedule}>Edit
                </button>
                <hr />
            </div >

        )
    }

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

export default Meeting