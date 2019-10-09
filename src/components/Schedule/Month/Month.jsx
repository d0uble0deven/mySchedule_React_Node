import React, { Component } from 'react';
import Meeting from '../Meeting/Meeting'
import './Month.css'



class Month extends Component {
    render() {
        return (
            <div className="Month">
                Month
       this.props.schedule !== 'null' ?


                {this.props.schedule.map((schedule, idx) =>
                    <Meeting
                        schedule={this.props.schedule}
                        // deleteItem={this.props.deleteItem}
                        // updateSchedule={this.props.updateSchedule}
                        user={this.props.user}
                    // key={idx}
                    />
                )
                }
                {/* < hr /> */}
                :
            </div >
        )

            (
                <div>
                    <p>Meeting</p>

                </div>

            )


    }

}

// {/* // how to map all state, taked from Mastermind
// // const GameBoard = (props) => (
// //     <div className={styles.GameBoard}>
// //       {props.guesses.map((guess, idx) =>
// //         <GuessRow
// //           guess={guess}
// //           colors={props.colors}
// //           rowIdx={idx}
// //           currentGuess={idx === (props.guesses.length - 1)}
// //           handlePegClick={props.handlePegClick}
// //           handleScoreClick={props.handleScoreClick}
// //           key={idx}
// //         />
// //       )}
// //     </div>
// //   ); */}


export default Month

// functions are written below because they can be called at the top (aka "hoisting")
async function getAll() {
    const url = 'http://localhost:3000';
    const initialFetch = await fetch(url)
    const fetchJSON = await initialFetch.json()
    return await fetchJSON
}

async function handleVerbs(url, options) {
    const initialFetch = await fetch(url, options)
    const fetchJSON = await initialFetch.json()
    return await fetchJSON
}


// w1: d1-d7
// w2: d1-d7
// w3: d1-d7
// w4: d1-d7
